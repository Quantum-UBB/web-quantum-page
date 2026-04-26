import { AppDataSource } from "../data-source.js";
import { UserSchema } from "../schemas/UserSchema.js";

const repository = AppDataSource.getRepository(UserSchema);

/**
 * Busca un usuario por su ID único.
 * 
 * @param {number|string} id - ID del usuario.
 * @returns {Promise<Object|null>} Usuario encontrado o null.
 */
export const findById = async (id) => {
    return await repository.findOneBy({ id: parseInt(id) });
};

/**
 * Busca un usuario por su dirección de correo electrónico.
 * 
 * @param {string} email - Email del usuario.
 * @returns {Promise<Object|null>} Usuario encontrado o null.
 */
export const findByEmail = async (email) => {
    return await repository.findOneBy({ email });
};

/**
 * Crea y guarda un nuevo usuario en la base de datos.
 * 
 * @param {Object} userData - Datos del usuario a guardar.
 * @returns {Promise<Object>} Usuario persistido.
 */
export const save = async (userData) => {
    const user = repository.create(userData);
    return await repository.save(user);
};

/**
 * Actualiza el rol de un usuario existente.
 * 
 * @param {number|string} userId - ID del usuario.
 * @param {string} newRole - Nuevo rol a asignar.
 * @returns {Promise<Object>} Usuario actualizado.
 */
export const updateRole = async (userId, newRole) => {
    await repository.update(userId, { role: newRole });
    return await findById(userId);
};

/**
 * Obtiene todos los usuarios registrados (excluyendo contraseñas).
 * 
 * @returns {Promise<Array>} Lista de usuarios.
 */
export const findAll = async () => {
    return await repository.find({
        select: ["id", "username", "email", "role"] // Exclude password from the results
    });
};
