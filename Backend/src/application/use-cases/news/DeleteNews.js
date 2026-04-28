import * as repository from '../../../infrastructure/persistence/repositories/TypeORMNewsRepository.js';

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
