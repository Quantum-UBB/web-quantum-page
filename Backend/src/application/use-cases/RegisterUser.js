import * as userRepository from '../../infrastructure/persistence/repositories/TypeORMUserRepository.js';
import { Roles } from '../../domain/entities/User.js';

export const execute = async (requesterUser, userData) => {
    // Solo el ADMIN puede registrar nuevos usuarios (estudiantes/miembros)
    if (requesterUser.role !== Roles.ADMIN) {
        throw new Error("Permisos insuficientes: Solo el Administrador puede registrar nuevos estudiantes.");
    }

    const existingUser = await userRepository.findByEmail(userData.email);
    if (existingUser) {
        throw new Error("El usuario ya existe.");
    }

    // Por defecto se registran como miembros activos si no se especifica
    const newUser = {
        ...userData,
        role: userData.role || Roles.MEMBER
    };

    return await userRepository.save(newUser);
};
