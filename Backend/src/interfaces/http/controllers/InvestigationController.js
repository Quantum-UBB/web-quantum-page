import * as ToggleInvestigationVisibility from '../../../application/use-cases/ToggleInvestigationVisibility.js';
import * as GetAllInvestigations from '../../../application/use-cases/GetAllInvestigations.js';
import * as GetInvestigationById from '../../../application/use-cases/GetInvestigationById.js';
import * as GetMyInvestigations from '../../../application/use-cases/GetMyInvestigations.js';
import * as GetUniqueTags from '../../../application/use-cases/GetUniqueTags.js';
import * as CreateInvestigation from '../../../application/use-cases/CreateInvestigation.js';

export const getAll = async (req, res) => {
    try {
        const investigations = await GetAllInvestigations.execute(req.user);
        res.status(200).json(investigations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getById = async (req, res) => {
    try {
        const investigation = await GetInvestigationById.execute(req.user, req.params.id);
        if (!investigation) return res.status(404).json({ message: 'Investigación no encontrada' });
        res.status(200).json(investigation);
    } catch (error) {
        res.status(403).json({ error: error.message });
    }
};

export const getMy = async (req, res) => {
    try {
        let researcher = req.params.researcher || req.user.username;
        if (researcher === 'me') {
            researcher = req.user.username;
        }
        const investigations = await GetMyInvestigations.execute(req.user, researcher);
        res.status(200).json(investigations);
    } catch (error) {
        res.status(403).json({ error: error.message });
    }
};

export const getTags = async (req, res) => {
    try {
        const tags = await GetUniqueTags.execute();
        res.status(200).json(tags);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create = async (req, res) => {
    try {
        const payload = { ...req.body };
        if (req.file) {
            // Generar la URL relativa para el archivo público
            payload.pdfUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
        }

        const newInvestigation = await CreateInvestigation.execute(req.user, payload);
        res.status(201).json(newInvestigation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const toggleVisibility = async (req, res) => {
    try {
        const { id } = req.params;
        const { publicada } = req.body;
        const updated = await ToggleInvestigationVisibility.execute(req.user, id, publicada);
        res.status(200).json(updated);
    } catch (error) {
        res.status(403).json({ error: error.message });
    }
};
