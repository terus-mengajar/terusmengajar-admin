import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return Response.json({ exists: false, error: "Email tidak dikirim" }, { status: 400 });
  }

  try {
    const response = await fetch(CLOUDFLARE_D1_URL, {
      method: "POST",
      headers: CLOUDFLARE_HEADER,
      body: JSON.stringify({
        sql: `
          SELECT id, role, email FROM admin WHERE email = ? LIMIT 1
        `,
        params: [email],
      }),
    });

    const data = await response.json();

    const admin = data?.result?.[0]?.results?.[0];

    if (!admin) {
      return Response.json({ exists: false });
    }

    // Struktur hasil dari D1: { results: [ { id: 1 } ] } atau []
    // const exists = data?.result?.[0]?.results?.length > 0;
    return Response.json({
      exists: true,
      id: admin.id,
      role: admin.role,
    });

    // return Response.json({ exists });
  } catch (err: any) {
    console.error("Error di /api/admin/check:", err);
    return Response.json(
      { exists: false, error: err.message },
      { status: 500 }
    );
  }
}
