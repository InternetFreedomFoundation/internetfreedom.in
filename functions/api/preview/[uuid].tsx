/**
 * Ghost Admin API for CF Worker
 * Returns html content from a ghost private draft post
 */

export async function onRequestGet(context) {

    if (!context.params.uuid) {
        return new Response("Error: 'uuid' parameter is missing or null", { status: 400 });
    }

    const session_url = new URL(context.env.GHOST_BASE_URL + '/admin/session/')

    const body = {
        username: context.env.GHOST_ADMIN_USERNAME,
        password: context.env.GHOST_ADMIN_PASSWORD
    }

    const headers = {
        'Content-Type': 'application/json;charset=utf-8',
        'Origin': context.env.GHOST_ORIGIN
    }

    const response = await fetch(session_url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    })

    const ghost_cookie = response.headers.get("set-cookie");

    const post_url = new URL(context.env.GHOST_BASE_URL + '/admin/posts/')
    post_url.searchParams.append("filter", "UUID:" + context.params.uuid)
    post_url.searchParams.append("formats", "html")

    const ghostResponse = await fetch(post_url, {
        method: 'GET',
        headers: {
            cookie: ghost_cookie!
        }
    })

    return new Response(ghostResponse.body, {
        status: ghostResponse.status,
        headers: {
            'Content-Type': 'application/json'
        }
    })
};