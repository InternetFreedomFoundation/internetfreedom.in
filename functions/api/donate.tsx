interface Env {
    RAZORPAY_KEY: string;
    RAZORPAY_SECRET: string;
    BACK_OFFICE: string;
}

interface Subscription {
    name: string;
    email: string;
    contact: string;
    pan: string;
    plan: string;
    max_amount: number;
    type: string;
    address: {
        address_line1: string;
        pincode: number;
    };
    reference?: string;
    metadata?: Record<string, string>;
    source?: string;
}

interface RazorpayResponse {
    id: string;
}


const razorpayApiUrl = 'https://api.razorpay.com/v1/subscriptions';


export const onRequestPost: PagesFunction<Env> = async (context) => {
    const apiKey = context.env.RAZORPAY_KEY + ":" + context.env.RAZORPAY_SECRET;

    const formData: Subscription = await context.request.json();

    if (!formData.reference) {
        formData.reference = context.request.headers.get('cf-ray') || crypto.randomUUID()
    }

    const requestOptions: RequestInit = {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${btoa(apiKey)}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "plan_id": formData.plan,
            "total_count": 24,
            "notes": {
                "EMAIL": formData.plan,
                "REFERENCE": formData.reference,
            }
        }),
    };

    try {
        const response = await fetch(razorpayApiUrl, requestOptions);

        if (response.ok) {
            const razorpay: RazorpayResponse = await response.json();

            formData.metadata = {
                "city": String(context.request.cf.city),
                "ISP": String(context.request.cf.asOrganization),
                "country": String(context.request.cf.country),
                "pincode": String(context.request.cf.postalCode),
                "region": String(context.request.cf.region),
                "ip": String(context.request.headers.get('CF-Connecting-IP')),
                "UA": String(context.request.headers.get('user-agent')),
                "razorpayId": String(razorpay.id),
            };

            sendToHeimdall(formData, context.env.BACK_OFFICE);


            return new Response(JSON.stringify({
                "id": razorpay.id,
                "reference": formData.reference,
            }));
        }
        return new Response('razorpay request failed', {
            status: 500
        });
    } catch (error) {
        return new Response(`Something went wrong`, { status: 500 });
    }
};

function sendToHeimdall(formData: Subscription, endpoint: string) {
    const init: RequestInit = {
        method: 'POST',
        headers: {
            "content-type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(formData),
    };

    fetch(endpoint, init);
}
