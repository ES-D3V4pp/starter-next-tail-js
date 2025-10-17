import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Si l'URL est de type /s2, /contact, etc.
  if (/^\/[^\/]+$/.test(pathname) && pathname !== '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    url.searchParams.set('section', pathname.slice(1));
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}