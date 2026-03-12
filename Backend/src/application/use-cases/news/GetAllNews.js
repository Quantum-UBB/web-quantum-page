import * as repository from '../../../infrastructure/persistence/repositories/TypeORMNewsRepository.js';

export const execute = async (filter = {}) => {
    return await repository.getAll(filter);
};
