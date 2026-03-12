import * as repository from '../../../infrastructure/persistence/repositories/TypeORMNewsRepository.js';

/**
 * Caso de uso: Eliminar una noticia del sistema.
 * 
 * @param {number|string} id - ID de la noticia a eliminar.
 * @returns {Promise<boolean>} True si la operación fue exitosa.
 */
export const execute = async (id) => {
    return await repository.deleteById(id);
};
