import { NextRequest, NextResponse } from "next/server"
import { Ratelimit } from "@upstash/ratelimit"
import { kv } from "@vercel/kv"

const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(999, "60 s"),
})

// Define which routes you want to rate limit
export const config = {
  matcher: ["/api/:path*"],
}

export default async function middleware(request: NextRequest) {
  const ip = request.ip ?? "127.0.0.1"
  const { success } = await ratelimit.limit(ip)
  return success
    ? NextResponse.next()
    : NextResponse.json({ error: "Too many requests." }, { status: 429 })
}
