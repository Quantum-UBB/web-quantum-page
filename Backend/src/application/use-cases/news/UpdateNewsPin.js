import * as repository from '../../../infrastructure/persistence/repositories/TypeORMNewsRepository.js';

export const execute = async (id) => {
    const newsItem = await repository.getById(id);
    if (!newsItem) throw new Error('Noticia no encontrada');

    if (newsItem.isPinned) {
        return await repository.updatePinStatus(id, false);
    }

    const pinnedNews = await repository.getPinnedNews();
    if (pinnedNews.length >= 2) {
        const toUnpin = pinnedNews.slice(0, pinnedNews.length - 1);
        for (const item of toUnpin) {
            await repository.updatePinStatus(item.id, false);
        }
    }

    return await repository.updatePinStatus(id, true);
};
