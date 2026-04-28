import * as repository from '../../../infrastructure/persistence/repositories/TypeORMEventRepository.js';

export const execute = async (id) => {
    const existing = await repository.getById(id);
    if (!existing) {
        throw new Error('Evento no encontrado');
    }
    if (existing.status !== 'draft') {
        throw new Error('No se pueden eliminar eventos ya publicados');
    }
    return await repository.deleteById(id);
};
