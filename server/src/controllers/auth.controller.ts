import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../env.js';
import { hashPassword, verifyPassword } from '../utils/hash.js';

const prisma = new PrismaClient();

function tokenFor(id: number, email: string, role: string) {
  return jwt.sign({ id, email, role }, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRES_IN });
}

export const register = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'email & password required' });
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return res.status(409).json({ error: 'Email already in use' });

  const user = await prisma.user.create({
    data: { email, name, password: await hashPassword(password), role: 'STUDENT' }
  });

  res.status(201).json({ user: { id: user.id, email: user.email, role: user.role }, token: tokenFor(user.id, user.email, user.role) });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  const ok = await verifyPassword(password, user.password);
  if (!ok) return res.status(401).json({ error: 'Invalid credentials' });
  res.json({ user: { id: user.id, email: user.email, role: user.role }, token: tokenFor(user.id, user.email, user.role) });
};
