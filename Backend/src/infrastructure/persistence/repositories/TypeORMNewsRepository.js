import { AppDataSource } from "../data-source.js";
import { NewsSchema } from "../schemas/NewsSchema.js";

const repository = AppDataSource.getRepository(NewsSchema);

/**
 * Obtiene todas las noticias filtradas.
 * 
 * @param {Object} filter - Objeto de filtrado.
 * @returns {Promise<Array>} Lista de noticias filtradas.
 */
export const getAll = async (filter = {}) => {
    return await repository.find({
        where: filter,
        order: { createdAt: "DESC" }
    });
};

/**
 * Busca una noticia específica por su ID único.
 * 
 * @param {number|string} id - ID de la noticia.
 * @returns {Promise<Object|null>} Noticia encontrada o null.
 */
export const getById = async (id) => {
    return await repository.findOneBy({ id: parseInt(id) });
};

/**
 * Crea y guarda una nueva noticia.
 * 
 * @param {Object} data - Datos de la noticia.
 * @returns {Promise<Object>} Noticia persistida.
 */
export const create = async (data) => {
    const newsItem = repository.create(data);
    return await repository.save(newsItem);
};

export const update = async (id, data) => {
    await repository.update(id, data);
    return await getById(id);
};

export const updateStatus = async (id, status) => {
    await repository.update(id, { status });
    return await getById(id);
};

export const getPinnedNews = async () => {
    return await repository.find({
        where: { isPinned: true },
        order: { updatedAt: "ASC" }
    });
};

export const updatePinStatus = async (id, isPinned) => {
    await repository.update(id, { isPinned });
    return await getById(id);
};

export const deleteById = async (id) => {
    await repository.delete(id);
    return true;
};
