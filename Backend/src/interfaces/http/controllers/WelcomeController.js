import * as welcomeUseCase from '../../../application/use-cases/getWelcomeMessage.js';

export const getWelcome = async (req, res) => {
    try {
        const data = await welcomeUseCase.getWelcomeMessage();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
