import * as repository from '../../../infrastructure/persistence/repositories/TypeORMEventRepository.js';

/**
 * Caso de uso: Obtener un evento por su ID.
 * 
 * @param {number|string} id - ID del evento.
 * @returns {Promise<Object|null>} El evento encontrado o null.
 */
export const execute = async (id) => {
    return await repository.getById(id);
};
