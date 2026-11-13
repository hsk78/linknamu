import { NextResponse } from "next/server";
import { getClient } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

// POST /api/click  { url: string } → 해당 링크의 클릭 수 +1
export async function POST(request: Request) {
  let url: unknown;
  try {
    ({ url } = await request.json());
  } catch {
    return NextResponse.json({ error: "잘못된 요청" }, { status: 400 });
  }
  if (typeof url !== "string" || url.length === 0 || url.length > 2048) {
    return NextResponse.json({ error: "url이 필요합니다" }, { status: 400 });
  }

  try {
    const client = await getClient();
    await client
      .db()
      .collection("clicks")
      .updateOne({ url }, { $inc: { count: 1 } }, { upsert: true });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("클릭 수 저장 실패", e);
    return NextResponse.json({ error: "저장 실패" }, { status: 500 });
  }
}
