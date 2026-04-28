import * as repository from '../../infrastructure/persistence/repositories/TypeORMInvestigationRepository.js';
import { Roles } from '../../domain/entities/User.js';

/**
 * Caso de uso: Eliminar una investigación.
 * Solo el autor original puede eliminar su investigación.
 * 
 * @param {Object} requesterUser - Usuario que realiza la petición.
 * @param {number|string} id - ID de la investigación.
 * @returns {Promise<boolean>} True si se eliminó correctamente.
 */
export const execute = async (requesterUser, id) => {
    // 1. Invitados no pueden eliminar
    if (requesterUser.role === Roles.GUEST) {
        throw new Error("Acceso denegado: Los invitados no pueden eliminar investigaciones.");
    }

    // 2. Verificar existencia
    const existing = await repository.getById(id);
    if (!existing) {
        throw new Error("Investigación no encontrada.");
    }

    // 3. Verificar propiedad
    if (existing.researcher !== requesterUser.username) {
        throw new Error("Acceso denegado: No tienes permiso para eliminar esta investigación.");
    }

    // 4. Eliminar
    return await repository.remove(id);
};
