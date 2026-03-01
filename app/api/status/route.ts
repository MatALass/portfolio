import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    mode: process.env.VERCEL_ENV ?? process.env.NODE_ENV ?? "unknown",
    uptimeSeconds: Math.round(process.uptime()),
    now: new Date().toISOString(),
  });
}