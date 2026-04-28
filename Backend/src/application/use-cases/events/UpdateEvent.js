import * as repository from '../../../infrastructure/persistence/repositories/TypeORMEventRepository.js';

export const execute = async (id, data) => {
    // Only allow updating if it exists
    const existingEvent = await repository.getById(id);
    if (!existingEvent) {
        throw new Error('Evento no encontrado');
    }

    return await repository.update(id, data);
};
