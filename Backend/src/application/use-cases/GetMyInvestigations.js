import * as repository from '../../infrastructure/persistence/repositories/TypeORMInvestigationRepository.js';
import { Roles } from '../../domain/entities/User.js';

/**
 * Caso de uso: Obtener investigaciones de un investigador específico.
 * 
 * @param {Object} requesterUser - Usuario que solicita la acción.
 * @param {string} researcherName - Nombre del investigador cuyas obras se buscan.
 * @returns {Promise<Array>} Lista de investigaciones del autor.
 * @throws {Error} Si el solicitante es un invitado.
 */
export const execute = async (requesterUser, researcherName) => {
    if (requesterUser.role === Roles.GUEST) {
        throw new Error("Acceso denegado: Inicia sesión para ver investigaciones.");
    }

    // Siempre filtrar por el nombre del investigador solicitado (que el controller asegura que es el del token)
    return await repository.getByResearcher(researcherName);

    // Solo puede ver las investigaciones de otro a menos que sea Admin/Mod
    const isOwner = requesterUser.username === researcherName;

    if (!isOwner && !isAdminOrMod) {
        throw new Error("Permisos insuficientes para ver las investigaciones de este usuario.");
    }

    return await repository.getByResearcher(researcherName);
};
