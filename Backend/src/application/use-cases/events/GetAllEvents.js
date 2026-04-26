import * as repository from '../../../infrastructure/persistence/repositories/TypeORMEventRepository.js';

export const execute = async (filter = {}) => {
    return await repository.getAll(filter);
};
