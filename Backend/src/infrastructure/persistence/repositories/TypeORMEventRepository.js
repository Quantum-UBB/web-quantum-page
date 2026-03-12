import { AppDataSource } from "../data-source.js";
import { EventSchema } from "../schemas/EventSchema.js";

const repository = AppDataSource.getRepository(EventSchema);

export const getAll = async (filter = {}) => {
    return await repository.find({
        where: filter,
        order: { date: "ASC" }
    });
};

export const getById = async (id) => {
    return await repository.findOneBy({ id: parseInt(id) });
};

export const create = async (data) => {
    const eventItem = repository.create(data);
    return await repository.save(eventItem);
};

export const updateStatus = async (id, status) => {
    await repository.update(id, { status });
    return await getById(id);
};

export const deleteById = async (id) => {
    await repository.delete(id);
    return true;
};
