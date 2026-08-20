import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Halaman login boleh diakses tanpa login
  if (pathname === "/login") {
    return NextResponse.next();
  }

  // Untuk sementara, jangan proteksi file/API internal
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // Cek session Supabase dari cookie
  const hasSupabaseSession = request.cookies
    .getAll()
    .some((cookie) =>
      cookie.name.startsWith("sb-")
    );

  // Belum login → arahkan ke login
  if (!hasSupabaseSession) {
    const loginUrl = new URL(
      "/login",
      request.url
    );

    loginUrl.searchParams.set(
      "redirect",
      pathname
    );

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Jalankan middleware pada semua route
     * kecuali asset Next.js.
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
