'use server';

import { db } from '@/database/db';
import { User, users } from '@/database/schema/users';
import { and, eq } from 'drizzle-orm';

export const authUser = async (data: Pick<User, 'email' | 'password'>) => {
  const user = await db
    .select()
    .from(users)
    .where(and(eq(users.email, data.email), eq(users.password, data.password)));

  return user[0];
};
