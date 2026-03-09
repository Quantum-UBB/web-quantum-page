import * as userRepository from '../../infrastructure/persistence/repositories/TypeORMUserRepository.js';
import { Roles } from '../../domain/entities/User.js';
import bcrypt from 'bcryptjs';

export const execute = async (requesterUser, userData) => {
    // Solo el ADMIN puede registrar nuevos usuarios (estudiantes/miembros)
    if (requesterUser.role !== Roles.ADMIN) {
        throw new Error("Permisos insuficientes: Solo el Administrador puede registrar nuevos estudiantes.");
    }

    const existingUser = await userRepository.findByEmail(userData.email);
    if (existingUser) {
        throw new Error("El usuario ya existe.");
    }

    // Hash user password before saving
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

    // Por defecto se registran como miembros activos si no se especifica
    const newUser = {
        ...userData,
        password: hashedPassword,
        role: userData.role || Roles.MEMBER
    };

    return await userRepository.save(newUser);
};
