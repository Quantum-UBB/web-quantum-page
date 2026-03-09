import * as CreateEvent from '../../../application/use-cases/events/CreateEvent.js';
import * as GetAllEvents from '../../../application/use-cases/events/GetAllEvents.js';
import * as GetEventById from '../../../application/use-cases/events/GetEventById.js';
import * as UpdateEventStatus from '../../../application/use-cases/events/UpdateEventStatus.js';
import * as DeleteEvent from '../../../application/use-cases/events/DeleteEvent.js';

export const getAll = async (req, res) => {
    try {
        const filter = req.query.status ? { status: req.query.status } : {};
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
        const newItem = await CreateEvent.execute(req.body);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateStatus = async (req, res) => {
    try {
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
