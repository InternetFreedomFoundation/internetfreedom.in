interface Env {
  GHOST_API_URL: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const announcementUrl = new URL(context.env.GHOST_API_URL + "/members/api/announcement/");

  try {
    const response = await fetch(announcementUrl.toString());
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch announcement" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
