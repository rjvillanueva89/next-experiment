import { authUser } from '@/app/lib/data';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        identifier: {
          label: 'Identifier',
          type: 'text',
          placeholder: 'Identifier',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      authorize: async (credentials) => {
        const { identifier, password } = credentials || {};

        const user = await authUser(identifier!, password!);

        if (!user) return null;

        return user;
      },
    }),
  ],
  // callbacks: {
  //   jwt: async ({ token, user }) => {
  //     const userToken = {
  //       ...token,
  //       id: user.id,
  //     };

  //     console.log('userToken');
  //     console.log(userToken);

  //     return Promise.resolve(userToken);
  //   },
  //   session: async ({ session, token }) => {
  //     const sessionResponse: Session = {
  //       ...session,
  //       user: {
  //         id: token.sub!,
  //         name: token.name!,
  //         email: token.email!,
  //       },
  //     };

  //     console.log('session');
  //     console.log(sessionResponse);

  //     return Promise.resolve(sessionResponse);
  //   },
  // },
  pages: {
    signIn: '/login',
    signOut: '/',
  },
});

export { handler as GET, handler as POST };
