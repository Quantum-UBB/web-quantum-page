import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'secret_fallback';

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

    if (!token) {
        // Si no hay token, lo tratamos como invitado
        req.user = { id: 0, role: 'Invitado', username: 'Anónimo' };
        return next();
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            // Si el token es inválido o expiró, lo tratamos como invitado en lugar de fallar con 403
            // Esto permite que el usuario vea contenido público incluso si su sesión local es antigua
            req.user = { id: 0, role: 'Invitado', username: 'Anónimo' };
            return next();
        }
        req.user = user;
        next();
    });
};
