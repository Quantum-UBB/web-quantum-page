import * as repository from '../../../infrastructure/persistence/repositories/TypeORMNewsRepository.js';

/**
 * Caso de uso: Obtener el detalle de una noticia por su ID.
 * 
 * @param {number|string} id - ID de la noticia.
 * @returns {Promise<Object|null>} La noticia encontrada o null.
 */
export const execute = async (id) => {
    return await repository.getById(id);
};
