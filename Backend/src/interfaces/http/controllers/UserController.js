import * as RegisterUser from '../../../application/use-cases/RegisterUser.js';
import * as AssignRole from '../../../application/use-cases/AssignRole.js';
import * as LoginUser from '../../../application/use-cases/LoginUser.js';
import * as GetAllUsers from '../../../application/use-cases/GetAllUsers.js';

export const getAll = async (req, res) => {
    try {
        const users = await GetAllUsers.execute(req.user);
        res.status(200).json(users);
    } catch (error) {
        res.status(403).json({ error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await LoginUser.execute(email, password);
        res.status(200).json(result);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

export const register = async (req, res) => {
    try {
        const newUser = await RegisterUser.execute(req.user, req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(403).json({ error: error.message });
    }
};

export const changeRole = async (req, res) => {
    try {
        const { userId, newRole } = req.body;
        const updatedUser = await AssignRole.execute(req.user, userId, newRole);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(403).json({ error: error.message });
    }
};

export const getProfile = async (req, res) => {
    try {
        // req.user is populated by authMiddleware. 
        // If it's the default guest (id: 0), we treat it as unauthenticated for this endpoint.
        if (!req.user || req.user.id === 0) {
            return res.status(401).json({ error: "Sesión inválida o expirada" });
        }
        res.status(200).json(req.user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
