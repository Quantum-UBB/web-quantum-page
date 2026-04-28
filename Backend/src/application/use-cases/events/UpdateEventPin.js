import * as repository from '../../../infrastructure/persistence/repositories/TypeORMEventRepository.js';

export const execute = async (id) => {
    const eventItem = await repository.getById(id);
    if (!eventItem) throw new Error('Evento no encontrado');

    if (eventItem.isPinned) {
        return await repository.updatePinStatus(id, false);
    }

    const pinnedEvents = await repository.getPinnedEvents();
    if (pinnedEvents.length >= 2) {
        const toUnpin = pinnedEvents.slice(0, pinnedEvents.length - 1);
        for (const item of toUnpin) {
            await repository.updatePinStatus(item.id, false);
        }
    }

    return await repository.updatePinStatus(id, true);
};
