const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const getAuthHeaders = () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    return {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '69420',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    };
};

export const validateSession = async () => {
    const response = await fetch(`${API_URL}/users/me`, {
        headers: getAuthHeaders()
    });
    if (!response.ok) {
        throw new Error("Sesión inválida o expirada");
    }
    return await response.json();
};

export const loginUser = async (email, password) => {
    const response = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al iniciar sesión");
    }

    return await response.json();
};

export const registerUser = async (userData) => {
    const response = await fetch(`${API_URL}/users/register`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(userData)
    });
    
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al crear el usuario');
    }
    
    return await response.json();
};

export const getAllUsers = async () => {
    const response = await fetch(`${API_URL}/users`, {
        headers: getAuthHeaders()
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error fetching users');
    }

    return await response.json();
};

export const updateUserRole = async (userId, newRole) => {
    const response = await fetch(`${API_URL}/users/assign-role`, {
        method: 'PATCH',
        headers: getAuthHeaders(),
        body: JSON.stringify({ userId, newRole })
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error assigning role');
    }

    return await response.json();
};
