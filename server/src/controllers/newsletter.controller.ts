import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const subscribe = async (req: Request, res: Response) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'email required' });
  const created = await prisma.newsletter.upsert({
    where: { email },
    update: {},
    create: { email }
  });
  res.status(201).json(created);
};
