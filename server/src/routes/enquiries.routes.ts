import { Router } from 'express';
import * as c from '../controllers/enquiries.controller.js';
import { requireAuth, requireRole } from '../middleware/auth.js';

const r = Router();
r.post('/', c.submit);
r.get('/', requireAuth, requireRole('ADMIN', 'STAFF'), c.list);
export default r;
