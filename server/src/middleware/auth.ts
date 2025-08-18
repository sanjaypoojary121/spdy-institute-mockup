import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../env.js';

export interface JwtUser {
  id: number;
  email: string;
  role: 'ADMIN' | 'STAFF' | 'STUDENT';
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing token' });
  }
  try {
    const token = header.split(' ')[1];
    const payload = jwt.verify(token, env.JWT_SECRET) as JwtUser;
    (req as any).user = payload;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
}

export function requireRole(...roles: JwtUser['role'][]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user as JwtUser | undefined;
    if (!user || !roles.includes(user.role)) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    next();
  };
}
