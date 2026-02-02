import * as welcomeService from '../services/welcomeService.js';

export const getWelcome = async (req, res) => {
    try {
        const data = await welcomeService.getWelcomeMessage();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
