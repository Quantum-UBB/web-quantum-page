import * as repository from '../../../infrastructure/persistence/repositories/TypeORMNewsRepository.js';

/**
 * Caso de uso: Obtener todas las noticias.
 * 
 * @param {Object} filter - Filtros opcionales.
 * @returns {Promise<Array>} Lista de noticias.
 */
export const execute = async (filter = {}) => {
    return await repository.getAll(filter);
};
