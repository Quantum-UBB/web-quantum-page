import * as userRepository from '../../infrastructure/persistence/repositories/TypeORMUserRepository.js';
import { Roles } from '../../domain/entities/User.js';

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
