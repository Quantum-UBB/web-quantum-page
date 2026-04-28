import * as repository from '../../../infrastructure/persistence/repositories/TypeORMNewsRepository.js';

/**
 * Caso de uso: Eliminar una noticia del sistema.
 * 
 * @param {number|string} id - ID de la noticia a eliminar.
 * @returns {Promise<boolean>} True si la operación fue exitosa.
 */
export const execute = async (id) => {
    const existing = await repository.getById(id);
    if (!existing) {
        throw new Error('Noticia no encontrada');
    }
    if (existing.status !== 'draft') {
        throw new Error('No se pueden eliminar noticias ya publicadas');
    }
    return await repository.deleteById(id);
};
