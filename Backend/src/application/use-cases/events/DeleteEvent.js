import * as repository from '../../../infrastructure/persistence/repositories/TypeORMEventRepository.js';

/**
 * Caso de uso: Eliminar un evento.
 * 
 * @param {number|string} id - ID del evento a eliminar.
 * @returns {Promise<boolean>} True si se eliminó correctamente.
 */
export const execute = async (id) => {
    return await repository.deleteById(id);
};
