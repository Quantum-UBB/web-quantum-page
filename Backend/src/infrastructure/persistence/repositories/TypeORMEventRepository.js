import { AppDataSource } from "../data-source.js";
import { EventSchema } from "../schemas/EventSchema.js";

const repository = AppDataSource.getRepository(EventSchema);

export const getAll = async (filter = {}) => {
    return await repository.find({
        where: filter,
        order: { date: "ASC" }
    });
};

/**
 * Busca un evento por su ID.
 * 
 * @param {number|string} id - ID del evento.
 * @returns {Promise<Object|null>} Evento encontrado o null.
 */
export const getById = async (id) => {
    return await repository.findOneBy({ id: parseInt(id) });
};

/**
 * Crea y guarda un nuevo evento.
 * 
 * @param {Object} data - Datos del evento.
 * @returns {Promise<Object>} Evento guardado.
 */
export const create = async (data) => {
    const eventItem = repository.create(data);
    return await repository.save(eventItem);
};

export const update = async (id, data) => {
    await repository.update(id, data);
    return await getById(id);
};

export const updateStatus = async (id, status) => {
    await repository.update(id, { status });
    return await getById(id);
};

export const getPinnedEvents = async () => {
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
