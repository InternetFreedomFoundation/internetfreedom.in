export const onRequestGet: PagesFunction = () => {
    return new Response(JSON.stringify({
        "status": "ok"
    }));
};