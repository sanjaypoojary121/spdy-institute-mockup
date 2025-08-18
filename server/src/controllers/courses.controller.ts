import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const list = async (_req: Request, res: Response) => {
  const items = await prisma.course.findMany({
    include: { instructors: { include: { instructor: true } } },
    orderBy: { createdAt: 'desc' }
  });
  res.json(items);
};

export const getOne = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const item = await prisma.course.findUnique({
    where: { id },
    include: { instructors: { include: { instructor: true } } }
  });
  if (!item) return res.status(404).json({ error: 'Course not found' });
  res.json(item);
};

export const create = async (req: Request, res: Response) => {
  const { slug, title, summary, description, duration, fee, thumbnail, instructorIds } = req.body;
  const data: any = { slug, title, summary, description, duration, fee: fee ? Number(fee) : null, thumbnail };
  if (Array.isArray(instructorIds) && instructorIds.length) {
    data.instructors = { create: instructorIds.map((id: number) => ({ instructor: { connect: { id } } })) };
  }
  const created = await prisma.course.create({ data, include: { instructors: { include: { instructor: true } } } });
  res.status(201).json(created);
};

export const update = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { title, summary, description, duration, fee, thumbnail } = req.body;
  const updated = await prisma.course.update({
    where: { id },
    data: { title, summary, description, duration, fee: fee ? Number(fee) : undefined, thumbnail },
    include: { instructors: { include: { instructor: true } } }
  });
  res.json(updated);
};

export const remove = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await prisma.instructorOnCourse.deleteMany({ where: { courseId: id } });
  await prisma.course.delete({ where: { id } });
  res.status(204).send();
};
