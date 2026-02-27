import * as investigationRepository from '../../infrastructure/persistence/repositories/TypeORMInvestigationRepository.js';
import { Roles } from '../../domain/entities/User.js';

export const execute = async (requesterUser, investigationId, publicada) => {
    // Moderadores y Administradores pueden publicar u ocultar
    const canModerate = requesterUser.role === Roles.MODERATOR || requesterUser.role === Roles.ADMIN;

    if (!canModerate) {
        throw new Error("Permisos insuficientes: Solo Moderadores o Administradores pueden cambiar la visibilidad.");
    }

    const investigation = await investigationRepository.getById(investigationId);
    if (!investigation) {
        throw new Error("Investigación no encontrada.");
    }

    return await investigationRepository.updateVisibility(investigationId, publicada);
};
