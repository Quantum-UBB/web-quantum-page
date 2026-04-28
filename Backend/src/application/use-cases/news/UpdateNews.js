import * as repository from '../../../infrastructure/persistence/repositories/TypeORMNewsRepository.js';

export const execute = async (id, data) => {
    // Only allow updating if it exists
    const existingNews = await repository.getById(id);
    if (!existingNews) {
        throw new Error('Noticia no encontrada');
    }

    return await repository.update(id, data);
};
