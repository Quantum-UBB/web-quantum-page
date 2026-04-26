import * as repository from '../../../infrastructure/persistence/repositories/TypeORMNewsRepository.js';
import { News } from '../../../domain/entities/News.js';

/**
 * Caso de uso: Crear una noticia externa o local.
 * 
 * @param {Object} data - Datos de la noticia (title, content, author, etc).
 * @returns {Promise<Object>} La noticia creada y guardada.
 */
export const execute = async (data) => {
    const newsEntity = new News({
        ...data,
        isLocal: false
    });
    return await repository.create(newsEntity);
};
