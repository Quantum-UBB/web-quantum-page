import * as repository from '../../infrastructure/persistence/repositories/TypeORMInvestigationRepository.js';
import { Roles } from '../../domain/entities/User.js';

export const execute = async (requesterUser, researcherName) => {
    if (requesterUser.role === Roles.GUEST) {
        throw new Error("Acceso denegado: Inicia sesión para ver investigaciones.");
    }

    const isAdminOrMod = requesterUser.role === Roles.ADMIN || requesterUser.role === Roles.MODERATOR;

    // Si es admin o mod en su propio panel, mostrar el Master List para poder gestionar.
    if (isAdminOrMod && requesterUser.username === researcherName) {
        return await repository.getAll({});
    }

    // Solo puede ver las investigaciones de otro a menos que sea Admin/Mod
    const isOwner = requesterUser.username === researcherName;

    if (!isOwner && !isAdminOrMod) {
        throw new Error("Permisos insuficientes para ver las investigaciones de este usuario.");
    }

    return await repository.getByResearcher(researcherName);
};
