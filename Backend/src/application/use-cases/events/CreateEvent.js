import * as repository from '../../../infrastructure/persistence/repositories/TypeORMEventRepository.js';
import { Event } from '../../../domain/entities/Event.js';

export const execute = async (data) => {
    const eventEntity = new Event({
        ...data,
        isLocal: false
    });
    return await repository.create(eventEntity);
};
