import * as repository from '../../../infrastructure/persistence/repositories/TypeORMNewsRepository.js';

/**
 * Caso de uso: Actualizar el estado (borrador/publicado) de una noticia.
 * 
 * @param {number|string} id - ID de la noticia.
 * @param {string} status - Nuevo estado ('draft' o 'published').
 * @returns {Promise<Object>} La noticia actualizada.
 */
export const execute = async (id, status) => {
    return await repository.updateStatus(id, status);
};
