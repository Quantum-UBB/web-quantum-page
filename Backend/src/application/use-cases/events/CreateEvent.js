import * as repository from '../../../infrastructure/persistence/repositories/TypeORMEventRepository.js';
import { Event } from '../../../domain/entities/Event.js';

/**
 * Caso de uso: Crear un nuevo evento.
 * 
 * @param {Object} data - Datos del evento (title, description, date, etc).
 * @returns {Promise<Object>} El evento creado.
 */
export const execute = async (data) => {
    const eventEntity = new Event({
        ...data,
        isLocal: false
    });
    return await repository.create(eventEntity);
};
