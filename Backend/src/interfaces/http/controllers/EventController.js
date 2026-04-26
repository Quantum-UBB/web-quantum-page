import * as CreateEvent from '../../../application/use-cases/events/CreateEvent.js';
import * as GetAllEvents from '../../../application/use-cases/events/GetAllEvents.js';
import * as GetEventById from '../../../application/use-cases/events/GetEventById.js';
import * as UpdateEventStatus from '../../../application/use-cases/events/UpdateEventStatus.js';
import * as DeleteEvent from '../../../application/use-cases/events/DeleteEvent.js';

export const getAll = async (req, res) => {
    try {
        const userRole = req.user?.role || 'Invitado';
        const username = req.user?.username;

        let filter = req.query.status ? { status: req.query.status } : {};

        if (userRole === 'Administrador' || userRole === 'Moderador') {
            // Admin/Mod see everything
        } else if (userRole === 'Miembro Activo') {
            // Active members see published/scheduled OR their own events
            filter = [
                { status: 'published' },
                { status: 'scheduled' },
                { host: username }
            ];
            if (req.query.status) {
                filter = [
                    { status: req.query.status, host: username },
                    ...(req.query.status === 'published' || req.query.status === 'scheduled' ? [{ status: req.query.status }] : [])
                ];
            }
        } else {
            // Guests only see published/scheduled
            filter = [
                { status: 'published' },
                { status: 'scheduled' }
            ];
            if (req.query.status && (req.query.status === 'published' || req.query.status === 'scheduled')) {
                filter = { status: req.query.status };
            } else if (req.query.status) {
                // Si invitado pide drafts
                filter = { status: 'none' }; // hack to return none
            }
        }

        const events = await GetAllEvents.execute(filter);
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getById = async (req, res) => {
    try {
        const item = await GetEventById.execute(req.params.id);
        if (!item) return res.status(404).json({ message: 'Evento no encontrado' });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create = async (req, res) => {
    try {
        if (!req.user || req.user.role === 'Invitado') {
            return res.status(403).json({ message: 'No autorizado para crear eventos' });
        }
        
        let status = req.body.status || 'draft';
        if (req.user.role !== 'Administrador' && req.user.role !== 'Moderador') {
            status = 'draft';
        }

        const eventData = {
            ...req.body,
            status,
            host: req.user.username // Enforce host
        };

        const newItem = await CreateEvent.execute(eventData);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateStatus = async (req, res) => {
    try {
        const userRole = req.user?.role || 'Invitado';
        if (userRole !== 'Administrador' && userRole !== 'Moderador') {
            return res.status(403).json({ message: 'Permisos insuficientes para publicar eventos' });
        }

        const { id } = req.params;
        const { status } = req.body;
        const updated = await UpdateEventStatus.execute(id, status);
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const remove = async (req, res) => {
    try {
        await DeleteEvent.execute(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
