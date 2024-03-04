export const onRequestGet: PagesFunction = async (context) => {
    return new Response(JSON.stringify({
        "status": "ok",
        "metadata": {
            "city": String(context.request.cf.city),
            "ISP": String(context.request.cf.asOrganization),
            "country": String(context.request.cf.country),
            "pincode": String(context.request.cf.postalCode),
            "region": String(context.request.cf.region),
            "ip": String(context.request.headers.get('CF-Connecting-IP')),
            "UA": String(context.request.headers.get('user-agent')),
        },
    }));
};