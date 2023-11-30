import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    console.log(request.nextUrl.pathname);
    console.log(request.nextauth.token);

    if (
      request.nextUrl.pathname.startsWith('/dashboard') &&
      !request.nextauth.token
    ) {
      return NextResponse.redirect(new URL('/', request.url));
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
