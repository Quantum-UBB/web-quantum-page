import { AppDataSource } from "../data-source.js";
import { NewsSchema } from "../schemas/NewsSchema.js";

const repository = AppDataSource.getRepository(NewsSchema);

export const getAll = async (filter = {}) => {
    return await repository.find({
        where: filter,
        order: { createdAt: "DESC" }
    });
};

export const getById = async (id) => {
    return await repository.findOneBy({ id: parseInt(id) });
};

export const create = async (data) => {
    const newsItem = repository.create(data);
    return await repository.save(newsItem);
};

export const updateStatus = async (id, status) => {
    await repository.update(id, { status });
    return await getById(id);
};

export const deleteById = async (id) => {
    await repository.delete(id);
    return true;
};
