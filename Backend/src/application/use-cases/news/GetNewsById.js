import * as repository from '../../../infrastructure/persistence/repositories/TypeORMNewsRepository.js';

export const execute = async (id) => {
    return await repository.getById(id);
};
