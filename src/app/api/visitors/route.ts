const visitorKey = "portfolio:visits";

export async function POST() {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!redisUrl || !redisToken) {
    return Response.json({ configured: false, count: null }, { headers: { "Cache-Control": "no-store" } });
  }

  try {
    const response = await fetch(`${redisUrl}/incr/${encodeURIComponent(visitorKey)}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${redisToken}` },
      cache: "no-store",
    });
    const data = (await response.json()) as { result?: number };

    if (!response.ok || typeof data.result !== "number") {
      throw new Error("Visitor counter request failed");
    }

    return Response.json(
      { configured: true, count: data.result },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return Response.json({ configured: false, count: null }, { headers: { "Cache-Control": "no-store" } });
  }
}
