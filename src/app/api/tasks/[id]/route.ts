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
