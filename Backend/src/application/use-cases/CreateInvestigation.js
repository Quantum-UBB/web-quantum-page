import * as repository from '../../infrastructure/persistence/repositories/TypeORMInvestigationRepository.js';
import { Roles } from '../../domain/entities/User.js';

/**
 * Caso de uso: Crear una nueva investigación.
 * Los invitados no tienen permiso para crear. El investigador se asigna automáticamente
 * basándose en el usuario que realiza la petición.
 * 
 * @param {Object} requesterUser - Usuario que realiza la creación.
 * @param {Object} investigationData - Datos de la investigación a crear.
 * @returns {Promise<Object>} La investigación creada.
 * @throws {Error} Si el usuario es un invitado.
 */
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
