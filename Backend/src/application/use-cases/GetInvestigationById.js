import * as repository from '../../infrastructure/persistence/repositories/TypeORMInvestigationRepository.js';
import { Roles } from '../../domain/entities/User.js';

export const execute = async (requesterUser, id) => {
    const investigation = await repository.getById(id);

    if (!investigation) return null;

    // Lógica de acceso:
    // 1. Si es Admin o Moderador, puede verla.
    // 2. Si está publicada, cualquiera puede verla.
    // 3. Si está oculta, solo el dueño (researcher) puede verla.

    const isPublic = investigation.publicada;
    const isOwner = investigation.researcher === requesterUser.username;
    const isStaff = requesterUser.role === Roles.ADMIN || requesterUser.role === Roles.MODERATOR;

    if (!isPublic && !isOwner && !isStaff) {
        throw new Error("Acceso denegado: Esta investigación es privada.");
    }

    return investigation;
};
