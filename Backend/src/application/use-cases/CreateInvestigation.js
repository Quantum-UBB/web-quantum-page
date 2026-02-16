import * as repository from '../../infrastructure/persistence/repositories/TypeORMInvestigationRepository.js';
import { Roles } from '../../domain/entities/User.js';

export const execute = async (requesterUser, investigationData) => {
    // 1. Invitados no pueden crear
    if (requesterUser.role === Roles.GUEST) {
        throw new Error("Acceso denegado: Los invitados no pueden crear investigaciones.");
    }

    // 2. Todos los roles autorizados (MEMBER, MODERATOR, ADMIN) solo pueden crear para sí mismos
    investigationData.researcher = requesterUser.username;

    // 3. Forzamos que la investigación NO sea pública al crearse
    // (Solo se puede publicar después desde el panel de gestión)
    investigationData.publicada = false;

    return await repository.create(investigationData);
};
