import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const list = async (_req: Request, res: Response) => {
  res.json(await prisma.instructor.findMany({ orderBy: { createdAt: 'desc' } }));
};

export const create = async (req: Request, res: Response) => {
  const { name, title, bio, avatar, socials } = req.body;
  const created = await prisma.instructor.create({ data: { name, title, bio, avatar, socials } });
  res.status(201).json(created);
};
