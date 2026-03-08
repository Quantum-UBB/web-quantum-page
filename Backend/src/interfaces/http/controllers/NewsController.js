import * as CreateNews from '../../../application/use-cases/news/CreateNews.js';
import * as GetAllNews from '../../../application/use-cases/news/GetAllNews.js';
import * as GetNewsById from '../../../application/use-cases/news/GetNewsById.js';
import * as UpdateNewsStatus from '../../../application/use-cases/news/UpdateNewsStatus.js';
import * as DeleteNews from '../../../application/use-cases/news/DeleteNews.js';

export const getAll = async (req, res) => {
    try {
        const filter = req.query.status ? { status: req.query.status } : {};
        const news = await GetAllNews.execute(filter);
        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getById = async (req, res) => {
    try {
        const item = await GetNewsById.execute(req.params.id);
        if (!item) return res.status(404).json({ message: 'Noticia no encontrada' });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create = async (req, res) => {
    try {
        const newItem = await CreateNews.execute(req.body);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const updated = await UpdateNewsStatus.execute(id, status);
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const remove = async (req, res) => {
    try {
        await DeleteNews.execute(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
