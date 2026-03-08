import * as repository from '../../../infrastructure/persistence/repositories/TypeORMEventRepository.js';

export const execute = async (id, status) => {
    return await repository.updateStatus(id, status);
};
