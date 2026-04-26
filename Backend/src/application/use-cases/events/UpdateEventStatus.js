import * as repository from '../../../infrastructure/persistence/repositories/TypeORMEventRepository.js';

/**
 * Caso de uso: Actualizar el estado de un evento (borrador/publicado).
 * 
 * @param {number|string} id - ID del evento.
 * @param {string} status - Nuevo estado.
 * @returns {Promise<Object>} El evento actualizado.
 */
export const execute = async (id, status) => {
    return await repository.updateStatus(id, status);
};
