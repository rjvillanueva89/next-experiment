import { authUser } from '@/actions/auth-user';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
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

        const user = await authUser({
          email: identifier!,
          password: password!,
        });

        if (!user) return null;

        return user;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      return Promise.resolve(token);
    },
    session: async ({ session, token }) => {
      if (token.sub) {
        session.user.id = token.sub;
      }

      return Promise.resolve(session);
    },
  },
  pages: {
    signIn: '/login',
    signOut: '/',
  },
};
