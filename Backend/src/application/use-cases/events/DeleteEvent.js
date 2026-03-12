import * as repository from '../../../infrastructure/persistence/repositories/TypeORMEventRepository.js';

export const execute = async (id) => {
    return await repository.deleteById(id);
};
