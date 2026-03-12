import * as repository from '../../infrastructure/persistence/repositories/TypeORMInvestigationRepository.js';
import { Roles } from '../../domain/entities/User.js';

/**
 * Caso de uso: Obtener todas las investigaciones.
 * Aplica filtros de visibilidad según el rol del usuario (Admin/Mod ven ocultas).
 * 
 * @param {Object} requesterUser - Usuario que solicita la lista.
 * @returns {Promise<Array>} Lista de investigaciones filtradas.
 */
export const execute = async (requesterUser) => {
    // Si es Admin o Moderador, ver todo. Si es invitado o miembro, solo lo publicado.
    const canSeeHidden = requesterUser.role === Roles.ADMIN || requesterUser.role === Roles.MODERATOR;
    const filter = canSeeHidden ? {} : { publicada: true };

    return await repository.getAll(filter);
};
