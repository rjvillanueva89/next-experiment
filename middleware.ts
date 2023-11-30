import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

const SECURED_PATHS = [
  '/dashboard',
  '/dashboard/invoices',
  '/dashboard/customers',
];
const AUTH_PATHS = ['/', '/login', '/register'];

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    // if user is logged out
    if (
      SECURED_PATHS.includes(request.nextUrl.pathname) &&
      !request.nextauth.token
    ) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    // if user is logged in
    if (
      AUTH_PATHS.includes(request.nextUrl.pathname) &&
      request.nextauth.token
    ) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // console.log(token);

        return true;
      },
    },
  },
);

// export const config = { matcher: ['/dashboard'] };
