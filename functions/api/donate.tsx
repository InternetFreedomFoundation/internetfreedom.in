interface Env {
    RAZORPAY_KEY: string;
    RAZORPAY_SECRET: string;
    BACK_OFFICE: string;
}

interface FormData {
    name: string;
    email: string;
    contact: string;
    pan: string;
    plan?: string;
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

interface RazorpaySubscriptionResponse {
    id: string;
}

interface RazorpayOrderResponse {
    id: string;
}

const razorpaySubscriptionApiUrl = "https://api.razorpay.com/v1/subscriptions";

const razorpayOrdersApiUrl = "https://api.razorpay.com/v1/orders";

export const onRequestPost: PagesFunction<Env> = async (context) => {
    const apiKey = context.env.RAZORPAY_KEY + ":" + context.env.RAZORPAY_SECRET;

    const formData: FormData = await context.request.json();

    if (!formData.reference) {
        formData.reference =
            context.request.headers.get("cf-ray") || crypto.randomUUID();
    }

    try {
        if (formData.type === "ONETIME-PROXY") {
            const orderRequestOptions: RequestInit = {
                method: "POST",
                headers: {
                    Authorization: `Basic ${btoa(apiKey)}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    amount: formData.max_amount,
                    currency: "INR",
                    receipt: formData.reference,
                    notes: {
                        EMAIL: formData.email,
                        REFERENCE: formData.reference,
                    },
                }),
            };

            const response = await fetch(razorpayOrdersApiUrl, orderRequestOptions);
            if (response.ok) {
                const razorpay: RazorpayOrderResponse = await response.json();

                formData.metadata = {
                    city: String(context.request.cf.city),
                    ISP: String(context.request.cf.asOrganization),
                    country: String(context.request.cf.country),
                    pincode: String(context.request.cf.postalCode),
                    region: String(context.request.cf.region),
                    ip: String(context.request.headers.get("CF-Connecting-IP")),
                    UA: String(context.request.headers.get("user-agent")),
                    razorpayId: String(razorpay.id),
                };

                // comtinue to process in the background
                context.waitUntil(sendToHeimdall(formData, context.env.BACK_OFFICE));

                return new Response(
                    JSON.stringify({
                        id: razorpay.id,
                        reference: formData.reference,
                    })
                );
            }
            const data = await response.json()
            console.log(data)
            return new Response("razorpay order request failed", {
                status: 500,
            });
        } else if (formData.type === "SUBS-PROXY") {
            const subscriptionRequestOptions: RequestInit = {
                method: "POST",
                headers: {
                    Authorization: `Basic ${btoa(apiKey)}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    plan_id: formData.plan,
                    total_count: 120,
                    notes: {
                        EMAIL: formData.email,
                        REFERENCE: formData.reference,
                    },
                }),
            };
            const response = await fetch(
                razorpaySubscriptionApiUrl,
                subscriptionRequestOptions
            );

            if (response.ok) {
                const razorpay: RazorpaySubscriptionResponse = await response.json();

                formData.metadata = {
                    city: String(context.request.cf.city),
                    ISP: String(context.request.cf.asOrganization),
                    country: String(context.request.cf.country),
                    pincode: String(context.request.cf.postalCode),
                    region: String(context.request.cf.region),
                    ip: String(context.request.headers.get("CF-Connecting-IP")),
                    UA: String(context.request.headers.get("user-agent")),
                    razorpayId: String(razorpay.id),
                };

                // continue to process in the background
                context.waitUntil(sendToHeimdall(formData, context.env.BACK_OFFICE));

                return new Response(
                    JSON.stringify({
                        id: razorpay.id,
                        reference: formData.reference,
                    })
                );
            }
            const data = await response.json()
            console.log(data)
            return new Response("razorpay subscription request failed", {
                status: 500,
            });
        } else {
            return new Response("Invalid request", {
                status: 400,
            });
        }
    } catch (error) {
        console.error(error);
        return new Response(`Something went wrong`, { status: 500 });
    }
};

async function sendToHeimdall(
    formData: FormData,
    endpoint: string
): Promise<Response> {
    const init: RequestInit = {
        method: "POST",
        headers: {
            "content-type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(formData),
    };

    return fetch(endpoint, init);
}

