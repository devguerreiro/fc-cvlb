import { NextRequest, NextResponse } from "next/server";

import { API_BASE_URL } from "@/environment";

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  const res = await fetch(`${API_BASE_URL}/tasks/${params.id}`, {
    method: "DELETE",
  });
  return NextResponse.json(await res.json());
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await req.json();

  const res = await fetch(`${API_BASE_URL}/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
