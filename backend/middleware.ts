// middleware.ts

import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default clerkMiddleware((auth, req) => {
  const res = NextResponse.next();

  // Tambahkan header CORS
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");

  return res;
});

export const config = {
  matcher: ["/((?!_next|static|favicon.ico).*)"],
};