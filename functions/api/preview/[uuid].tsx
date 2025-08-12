/**
 * Ghost Admin API for CF Worker
 * Returns html content from a ghost private draft post
 */

import { PostsOrPages } from "@tryghost/content-api";

interface Env {
  GHOST_BASE_URL: string;
  GHOST_ORIGIN: string;
  GHOST_ADMIN_API_KEY: string;
}

function base64urlEscape(str: string) {
  return str.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

function base64urlEncode(str: string) {
  return base64urlEscape(btoa(str));
}

async function createJWT(
  id: string,
  secret: string,
  audience: string
): Promise<string> {
  const header = {
    alg: "HS256",
    typ: "JWT",
    kid: id,
  };

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iat: now,
    exp: now + 30, // 30 seconds
    aud: audience,
  };

  const encodedHeader = base64urlEncode(JSON.stringify(header));
  const encodedPayload = base64urlEncode(JSON.stringify(payload));
  const unsignedToken = `${encodedHeader}.${encodedPayload}`;

  const keyBuffer = new Uint8Array(
    secret.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))
  );

  const key = await crypto.subtle.importKey(
    "raw",
    keyBuffer,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(unsignedToken)
  );

  const signatureArray = new Uint8Array(signature);
  const signatureString = String.fromCharCode(...signatureArray);
  const encodedSignature = base64urlEscape(btoa(signatureString));

  return `${unsignedToken}.${encodedSignature}`;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  if (!context.params.uuid) {
    return new Response("Error: 'uuid' parameter is missing or null", {
      status: 400,
    });
  }

  const [id, secret] = context.env.GHOST_ADMIN_API_KEY.split(":");

  const token = await createJWT(id, secret, "/admin/");

  const post_url = new URL(context.env.GHOST_BASE_URL + "/admin/posts/");
  const page_url = new URL(context.env.GHOST_BASE_URL + "/admin/pages/");

  post_url.searchParams.append("filter", "UUID:" + context.params.uuid);
  post_url.searchParams.append("formats", "html");
  page_url.searchParams.append("filter", "UUID:" + context.params.uuid);
  page_url.searchParams.append("formats", "html");

  const headers = {
    Authorization: `Ghost ${token}`,
    "Content-Type": "application/json",
  };
  const ghostResponse = await fetch(post_url, {
    method: "GET",
    headers: headers,
  });

  const apiData: PostsOrPages = await ghostResponse.json();

  if (!ghostResponse.ok || apiData.meta.pagination.total === 0) {
    const ghostResponse = await fetch(page_url, {
      method: "GET",
      headers: headers,
    });
    return new Response(ghostResponse.body, {
      status: ghostResponse.status,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new Response(JSON.stringify(apiData), {
    status: ghostResponse.status,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
