import * as repository from '../../infrastructure/persistence/repositories/TypeORMInvestigationRepository.js';

export const execute = async () => {
    return await repository.getTags();
};
