import { Router } from 'express';
import { subscribe } from '../controllers/newsletter.controller.js';

const r = Router();
r.post('/subscribe', subscribe);
export default r;
