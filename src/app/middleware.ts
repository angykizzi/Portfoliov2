import { NextRequest, NextResponse } from 'next/server';
import { fallbackLng, languages } from './i18n/settings';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = languages.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = request.headers.get('accept-language')?.split(',')[0].split('-')[0] || fallbackLng;
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
