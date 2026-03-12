import * as repository from '../../infrastructure/persistence/repositories/TypeORMInvestigationRepository.js';
import { Roles } from '../../domain/entities/User.js';

/**
 * Caso de uso: Obtener una investigación por su ID.
 * Verifica los permisos de acceso (Privada vs Pública vs Propietario).
 * 
 * @param {Object} requesterUser - Usuario que solicita la investigación.
 * @param {number|string} id - ID de la investigación.
 * @returns {Promise<Object|null>} La investigación encontrada o null.
 * @throws {Error} Si la investigación es privada y el usuario no tiene acceso.
 */
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
