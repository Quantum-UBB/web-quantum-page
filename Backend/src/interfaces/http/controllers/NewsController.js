import * as CreateNews from '../../../application/use-cases/news/CreateNews.js';
import * as GetAllNews from '../../../application/use-cases/news/GetAllNews.js';
import * as GetNewsById from '../../../application/use-cases/news/GetNewsById.js';
import * as UpdateNewsStatus from '../../../application/use-cases/news/UpdateNewsStatus.js';
import * as DeleteNews from '../../../application/use-cases/news/DeleteNews.js';

export const getAll = async (req, res) => {
    try {
        const userRole = req.user?.role || 'Invitado';
        const username = req.user?.username;

        let filter = req.query.status ? { status: req.query.status } : {};

        if (userRole === 'Administrador' || userRole === 'Moderador') {
            // Admin/Mod see everything based on query status (already handled by default filter)
        } else if (userRole === 'Miembro Activo') {
            // Active members see published OR their own news
            filter = [
                { status: 'published' },
                { author: username }
            ];
            // If they provided a specific status query, we need to respect it for their own news but
            // usually 'getAll' on the frontend for members will just fetch all and filter client-side,
            // or we just return this OR condition.
            if (req.query.status) {
                filter = [
                    { status: req.query.status, author: username },
                    ...(req.query.status === 'published' ? [{ status: 'published' }] : [])
                ];
            }
        } else {
            // Guests only see published
            filter = { status: 'published' };
        }

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
        if (!req.user || req.user.role === 'Invitado') {
            return res.status(403).json({ message: 'No autorizado para crear noticias' });
        }
        
        let status = req.body.status || 'draft';
        if (req.user.role !== 'Administrador' && req.user.role !== 'Moderador') {
            status = 'draft';
        }
        
        const newsData = {
            ...req.body,
            status,
            author: req.user.username
        };
        
        const newItem = await CreateNews.execute(newsData);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateStatus = async (req, res) => {
    try {
        const userRole = req.user?.role || 'Invitado';
        if (userRole !== 'Administrador' && userRole !== 'Moderador') {
            return res.status(403).json({ message: 'Permisos insuficientes para publicar noticias' });
        }

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
