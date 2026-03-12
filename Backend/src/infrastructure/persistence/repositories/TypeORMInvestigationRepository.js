import { AppDataSource } from "../data-source.js";
import { InvestigationSchema } from "../schemas/InvestigationSchema.js";

const repository = AppDataSource.getRepository(InvestigationSchema);

export const getAll = async (filter = {}) => {
    return await repository.find({
        where: filter,
        order: { lastUpdate: "DESC" }
    });
};

export const getById = async (id) => {
    return await repository.findOneBy({ id: parseInt(id) });
};

export const getByResearcher = async (researcher) => {
    return await repository.find({
        where: { researcher },
        order: { lastUpdate: "DESC" }
    });
};

export const getTags = async () => {
    const investigations = await repository.find({ select: ["tags"] });
    const allTags = investigations.flatMap(inv => inv.tags);
    return [...new Set(allTags)].sort();
};

export const create = async (data) => {
    const investigation = repository.create(data);
    return await repository.save(investigation);
};

export const updateVisibility = async (id, publicada) => {
    await repository.update(id, { publicada });
    return await getById(id);
};
