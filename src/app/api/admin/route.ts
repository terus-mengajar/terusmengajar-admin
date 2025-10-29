import { NextResponse } from "next/server";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";
import { auth } from "@/lib/auth";

export async function GET(req: Request) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  
  try {
    // const { searchParams } = new URL(req.url);

    let sql = `
      SELECT admin.*
      FROM admin
      ORDER BY email ASC
    `;

    const res = await fetch(CLOUDFLARE_D1_URL, {
      method: "POST",
      headers: CLOUDFLARE_HEADER,
      body: JSON.stringify({ sql }),
    });

    const data = await res.json();
    const logs = data?.result?.[0]?.results ?? [];
    if (!data.success) console.log(data.errors);

    return NextResponse.json(logs);
  } catch (err) {
    console.error("Gagal ambil data:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
