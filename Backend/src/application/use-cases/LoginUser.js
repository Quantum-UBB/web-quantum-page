import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import * as userRepository from '../../infrastructure/persistence/repositories/TypeORMUserRepository.js';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'secret_fallback';

export const execute = async (email, password) => {
    const user = await userRepository.findByEmail(email);

    if (!user) {
        throw new Error("Credenciales inválidas");
    }

    // Por ahora, si no están hasheadas las contraseñas en DB, comparamos directo
    // pero lo ideal es usar bcrypt.compare. 
    // Si tus semillas/DB usan texto plano aún, cámbialo a: if (user.password !== password)
    const isMatch = (user.password === password) || (await bcrypt.compare(password, user.password));

    if (!isMatch) {
        throw new Error("Credenciales inválidas");
    }

    const payload = {
        id: user.id,
        username: user.username,
        role: user.role
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '8h' });

    return {
        token,
        user: {
            id: user.id,
            username: user.username,
            role: user.role,
            email: user.email
        }
    };
};
