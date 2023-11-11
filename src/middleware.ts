import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

// https://nextjs.org/docs/app/building-your-application/routing/middleware
// https://github.com/vercel/next.js/tree/canary/examples/with-strict-csp
// https://stripe.com/docs/security/guide#content-security-policy

type Environment = 'production' | 'development' | 'other';
export function middleware(req: NextRequest, ev: NextFetchEvent) {
  // console.log('in middleware');
  const currentEnv = process.env.NODE_ENV as Environment;
  // console.log(`currentEnv = ${currentEnv}`);
  // console.log(`req.headers.get("x-forwarded-proto") = ${req.headers.get("x-forwarded-proto")}`);

  if (
    currentEnv === 'production' &&
    req.headers.get('x-forwarded-proto') !== 'https'
  ) {
    console.log(
      `redirect to https://${req.headers.get('host')}${req.nextUrl.pathname}`
    );
    return NextResponse.redirect(
      `https://${req.headers.get('host')}${req.nextUrl.pathname}`,
      301
    );
  }
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  let unsafeEval = `'unsafe-eval' `;
  if (currentEnv === 'production') {
    unsafeEval = '';
  }

  const cspHeader =
    // https://infosec.mozilla.org/guidelines/web_security#content-security-policy
    `default-src 'unsafe-inline' 'unsafe-eval';` + // TOOD why unsafe?
    `style-src 'self' 'unsafe-inline';` + // TODO unsafe
    // Unless sites need the ability to execute plugins such as Flash or Silverlight, they should
    // disable their execution with object-src 'none'.
    `object-src 'unsafe-inline';` + // TOOD why is unsafe-inline needed?
    `img-src 'self' https://www.signbsl.com/ https://media.signbsl.com data:;` +
    `media-src 'self' https://media.signbsl.com;`+
    `script-src 'self' 'unsafe-inline' ${unsafeEval};` + // TODO unsafe
    `script-src-elem 'self' https://embed.signbsl.com/ 'unsafe-inline';` + // TODO unsafe
    `connect-src 'self' https://embed-api.signbsl.com/;` +
    `frame-src;` +
    `font-src 'self';` +
    `base-uri 'self';` +
    `form-action 'self';` +
    `frame-ancestors 'none';`+
 
    `block-all-mixed-content;` +
    `upgrade-insecure-requests;`+
    // put any more directives here
    ``;
  /*
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'nonce-${nonce}';
  `;*/

  const requestHeaders = new Headers(req.headers);

  // Setting request headers
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set(
    'Content-Security-Policy',
    // Replace newline characters and spaces
    cspHeader.replace(/\s{2,}/g, ' ').trim()
  );

  return NextResponse.next({
    headers: requestHeaders,
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - logo.ico (logo file)
     */
    {
      source: '/((?!api|_next/static|_next/image|logo.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
