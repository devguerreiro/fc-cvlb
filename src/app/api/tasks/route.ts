import { NextRequest, NextResponse } from "next/server";

import { API_BASE_URL } from "@/environment";

export async function GET() {
  const res = await fetch(`${API_BASE_URL}/tasks`);
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const res = await fetch(`${API_BASE_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return NextResponse.json(data);
}
