import * as userRepository from '../../infrastructure/persistence/repositories/TypeORMUserRepository.js';
import { Roles } from '../../domain/entities/User.js';

/**
 * Caso de uso: Asignar un rol a un usuario existente.
 * Solo el Administrador tiene permiso para ejecutar esta acción.
 * 
 * @param {Object} requesterUser - Usuario que solicita la acción (debe ser ADMIN).
 * @param {number} targetUserId - ID del usuario al que se le cambiará el rol.
 * @param {string} newRole - El nuevo rol a asignar.
 * @returns {Promise<Object>} El usuario actualizado.
 * @throws {Error} Si el solicitante no es ADMIN o el usuario destino no existe.
 */
export const execute = async (requesterUser, targetUserId, newRole) => {
    // Solo el ADMIN puede asignar roles
    if (requesterUser.role !== Roles.ADMIN) {
        throw new Error("Permisos insuficientes: Solo el Administrador puede dar o quitar roles.");
    }

    const targetUser = await userRepository.findById(targetUserId);
    if (!targetUser) {
        throw new Error("Usuario receptor no encontrado.");
    }

    return await userRepository.updateRole(targetUserId, newRole);
};
