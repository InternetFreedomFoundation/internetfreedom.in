/**
 * Ghost Admin API for CF Worker
 * Returns html content from a ghost private draft post
 */

import { PostsOrPages } from "@tryghost/content-api";

interface Env {
    GHOST_BASE_URL: string;
    GHOST_ORIGIN: string;
    GHOST_ADMIN_USERNAME: string;
    GHOST_ADMIN_PASSWORD: string;
}


export const onRequestGet: PagesFunction<Env> = async (context) => {

    if (!context.params.uuid) {
        return new Response("Error: 'uuid' parameter is missing or null", { status: 400 });
    }

    const session_url = new URL(context.env.GHOST_BASE_URL + '/admin/session/')

    const body = {
        username: context.env.GHOST_ADMIN_USERNAME,
        password: context.env.GHOST_ADMIN_PASSWORD,
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
    const page_url = new URL(context.env.GHOST_BASE_URL + '/admin/pages/')

    post_url.searchParams.append("filter", "UUID:" + context.params.uuid)
    post_url.searchParams.append("formats", "html")
    page_url.searchParams.append("filter", "UUID:" + context.params.uuid)
    page_url.searchParams.append("formats", "html")

    const ghostResponse = await fetch(post_url, {
        method: 'GET',
        headers: {
            cookie: ghost_cookie!
        }
    })

    const apiData: PostsOrPages = await ghostResponse.json()

    if (!ghostResponse.ok || apiData.meta.pagination.total === 0) {
        const ghostResponse = await fetch(page_url, {
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
    }

    return new Response(JSON.stringify(apiData), {
        status: ghostResponse.status,
        headers: {
            'Content-Type': 'application/json'
        }
    })
};