import "reflect-metadata";
import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import investigationRoutes from '../../interfaces/http/routes/investigationRoutes.js';
import userRoutes from '../../interfaces/http/routes/userRoutes.js';
import newsRoutes from '../../interfaces/http/routes/newsRoutes.js';
import eventRoutes from '../../interfaces/http/routes/eventRoutes.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(morgan('dev'));

// Serve static files
app.use('/uploads', express.static('uploads'));

// Routes

app.use('/api/investigations', investigationRoutes);
app.use('/api/users', userRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/events', eventRoutes);

app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Backend is running on Clean Architecture' });
});

export default app;
