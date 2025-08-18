import { env } from './env.js';
import app from './app.js';
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

app.listen(env.PORT, () => {
  console.log(`API running on http://localhost:${env.PORT}`);
});
