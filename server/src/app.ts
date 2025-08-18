import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { errorHandler, notFound } from './middleware/error.js';
import authRoutes from './routes/auth.routes.js';
import coursesRoutes from './routes/courses.routes.js';
import instructorsRoutes from './routes/instructors.routes.js';
import enquiriesRoutes from './routes/enquiries.routes.js';
import newsletterRoutes from './routes/newsletter.routes.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use(
  rateLimit({
    windowMs: 60 * 1000,
    limit: 100
  })
);

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.use('/api/auth', authRoutes);
app.use('/api/courses', coursesRoutes);
app.use('/api/instructors', instructorsRoutes);
app.use('/api/enquiries', enquiriesRoutes);
app.use('/api/newsletter', newsletterRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
