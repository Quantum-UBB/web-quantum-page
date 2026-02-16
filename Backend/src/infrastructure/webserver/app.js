import "reflect-metadata";
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import welcomeRoutes from '../../interfaces/http/routes/welcomeRoutes.js';
import investigationRoutes from '../../interfaces/http/routes/investigationRoutes.js';
import userRoutes from '../../interfaces/http/routes/userRoutes.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/welcome', welcomeRoutes);
app.use('/api/investigations', investigationRoutes);
app.use('/api/users', userRoutes);

app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Backend is running on Clean Architecture' });
});

export default app;
