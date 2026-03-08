import * as repository from '../../../infrastructure/persistence/repositories/TypeORMNewsRepository.js';

export const execute = async (id, status) => {
    return await repository.updateStatus(id, status);
};
