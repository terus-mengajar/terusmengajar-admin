import { auth } from "@/lib/auth"; // pastikan path ini sesuai file auth.ts kamu
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const path = nextUrl.pathname;

  // Halaman login hanya boleh diakses ketika belum login
  if (path === "/" && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }

  // Halaman private hanya bisa diakses kalau sudah login
  const protectedPaths = ["/dashboard", "/funpaper-calistung", "/user"];
  const isProtected = protectedPaths.some((p) => path.startsWith(p));

  if (isProtected && !isLoggedIn) {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  // Selain itu biarkan lewat
  return NextResponse.next();
});

// Middleware aktif hanya untuk halaman-halaman yang perlu dicek
export const config = {
  matcher: ["/", "/dashboard/:path*", "/funpaper-calistung/:path*", "/user/:path*"],
};
