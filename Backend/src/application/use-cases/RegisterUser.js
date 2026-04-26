import * as userRepository from '../../infrastructure/persistence/repositories/TypeORMUserRepository.js';
import { Roles } from '../../domain/entities/User.js';
import bcrypt from 'bcryptjs';

/**
 * Caso de uso: Registrar un nuevo usuario en el sistema.
 * Solo el Administrador puede registrar nuevos miembros.
 * 
 * @param {Object} requesterUser - Usuario que solicita el registro (debe ser ADMIN).
 * @param {Object} userData - Datos del nuevo usuario (email, password, etc).
 * @returns {Promise<Object>} El usuario guardado.
 * @throws {Error} Si no es ADMIN o el email ya está en uso.
 */
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
