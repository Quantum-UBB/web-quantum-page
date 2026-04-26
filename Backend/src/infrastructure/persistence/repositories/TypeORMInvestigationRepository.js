import { AppDataSource } from "../data-source.js";
import { InvestigationSchema } from "../schemas/InvestigationSchema.js";

const repository = AppDataSource.getRepository(InvestigationSchema);

/**
 * Obtiene todas las investigaciones que coincidan con el filtro.
 * 
 * @param {Object} filter - Objeto de filtrado para TypeORM.
 * @returns {Promise<Array>} Lista de investigaciones.
 */
export const getAll = async (filter = {}) => {
    return await repository.find({
        where: filter,
        order: { lastUpdate: "DESC" }
    });
};

/**
 * Busca una investigación específica por su ID.
 * 
 * @param {number|string} id - ID único.
 * @returns {Promise<Object|null>} Investigación encontrada o null.
 */
export const getById = async (id) => {
    return await repository.findOneBy({ id: parseInt(id) });
};

/**
 * Obtiene todas las investigaciones de un investigador específico.
 * 
 * @param {string} researcher - Nombre del investigador.
 * @returns {Promise<Array>} Lista de investigaciones.
 */
export const getByResearcher = async (researcher) => {
    return await repository.find({
        where: { researcher },
        order: { lastUpdate: "DESC" }
    });
};

/**
 * Extrae todas las etiquetas (tags) únicas de todas las investigaciones.
 * 
 * @returns {Promise<Array>} Lista de etiquetas ordenadas alfabéticamente.
 */
export const getTags = async () => {
    const investigations = await repository.find({ select: ["tags"] });
    const allTags = investigations.flatMap(inv => inv.tags);
    return [...new Set(allTags)].sort();
};

/**
 * Crea y persiste una nueva investigación en la base de datos.
 * 
 * @param {Object} data - Datos de la investigación.
 * @returns {Promise<Object>} Investigación guardada.
 */
export const create = async (data) => {
    const investigation = repository.create(data);
    return await repository.save(investigation);
};

/**
 * Actualiza el estado de visibilidad (pública/privada) de una investigación.
 * 
 * @param {number|string} id - ID de la investigación.
 * @param {boolean} publicada - Nuevo estado de visibilidad.
 * @returns {Promise<Object>} Investigación actualizada.
 */
export const updateVisibility = async (id, publicada) => {
    await repository.update(id, { publicada });
    return await getById(id);
};
