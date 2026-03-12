import * as repository from '../../../infrastructure/persistence/repositories/TypeORMNewsRepository.js';
import { News } from '../../../domain/entities/News.js';

export const execute = async (data) => {
    const newsEntity = new News({
        ...data,
        isLocal: false
    });
    return await repository.create(newsEntity);
};
