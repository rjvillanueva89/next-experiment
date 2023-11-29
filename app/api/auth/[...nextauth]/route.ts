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

        const { id, name, email } = await authUser(identifier!, password!);

        if (!id) return null;

        return { id, name, email };
      },
    }),
  ],
});

export { handler as GET, handler as POST };
