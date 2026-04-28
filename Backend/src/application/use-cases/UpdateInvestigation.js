import * as repository from '../../infrastructure/persistence/repositories/TypeORMInvestigationRepository.js';
import { Roles } from '../../domain/entities/User.js';

/**
 * Caso de uso: Actualizar una investigación existente.
 * Solo el autor original puede editar su investigación.
 * 
 * @param {Object} requesterUser - Usuario que realiza la petición.
 * @param {number|string} id - ID de la investigación.
 * @param {Object} data - Datos a actualizar.
 * @returns {Promise<Object>} Investigación actualizada.
 */
export const execute = async (requesterUser, id, data) => {
    // 1. Invitados no pueden editar
    if (requesterUser.role === Roles.GUEST) {
        throw new Error("Acceso denegado: Los invitados no pueden editar investigaciones.");
    }

    // 2. Verificar existencia
    const existing = await repository.getById(id);
    if (!existing) {
        throw new Error("Investigación no encontrada.");
    }

    // 3. Verificar propiedad (Solo el autor puede editar)
    // Nota: Podríamos permitir a ADMIN/MOD editar también, pero el requerimiento dice "Solo el usuario que se loguee... sobre sus propias investigaciones"
    if (existing.researcher !== requesterUser.username) {
        throw new Error("Acceso denegado: No tienes permiso para editar esta investigación.");
    }

    // 4. Limpiar datos sensibles o que no deben cambiarse manualmente
    const { researcher, id: _, ...updateData } = data;

    // 5. Actualizar
    return await repository.update(id, updateData);
};
