import { Router } from 'express';
import * as c from '../controllers/instructors.controller.js';
import { requireAuth, requireRole } from '../middleware/auth.js';

const r = Router();
r.get('/', c.list);
r.post('/', requireAuth, requireRole('ADMIN', 'STAFF'), c.create);
export default r;
