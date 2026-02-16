import { AppDataSource } from "../data-source.js";
import { UserSchema } from "../schemas/UserSchema.js";

const repository = AppDataSource.getRepository(UserSchema);

export const findById = async (id) => {
    return await repository.findOneBy({ id: parseInt(id) });
};

export const findByEmail = async (email) => {
    return await repository.findOneBy({ email });
};

export const save = async (userData) => {
    const user = repository.create(userData);
    return await repository.save(user);
};

export const updateRole = async (userId, newRole) => {
    await repository.update(userId, { role: newRole });
    return await findById(userId);
};
