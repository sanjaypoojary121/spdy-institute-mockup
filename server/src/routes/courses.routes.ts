import { Router } from 'express';
import * as c from '../controllers/courses.controller.js';
import { requireAuth, requireRole } from '../middleware/auth.js';

const r = Router();

r.get('/', c.list);
r.get('/:id', c.getOne);

// Admin/Staff protected mutating routes
r.post('/', requireAuth, requireRole('ADMIN', 'STAFF'), c.create);
r.put('/:id', requireAuth, requireRole('ADMIN', 'STAFF'), c.update);
r.delete('/:id', requireAuth, requireRole('ADMIN'), c.remove);

export default r;
