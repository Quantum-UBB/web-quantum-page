const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const getAuthHeaders = (overrideToken = null) => {
    const token = overrideToken || (typeof window !== 'undefined' 
        ? (localStorage.getItem('token') || sessionStorage.getItem('token')) 
        : null);
    return {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '69420',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    };
};

/**
 * Obtiene la lista de eventos omitiendo los borradores.
 * 
 * @returns {Promise<Array>} Lista de eventos publicados.
 */
export const getEventsData = async (token = null) => {
    try {
        const response = await fetch(`${API_URL}/events`, {
            headers: getAuthHeaders(token)
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const allEvents = await response.json();
        return allEvents.filter(e => e.status !== 'draft');
    } catch (error) {
        console.error("Error fetching events from API:", error);
        return [];
    }
};

export const getAllEventsRaw = async (token = null) => {
    try {
        const response = await fetch(`${API_URL}/events`, {
            headers: getAuthHeaders(token)
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error("Error fetching all events:", error);
        return [];
    }
};

/**
 * Obtiene un evento específico por su ID.
 * 
 * @param {number|string} id - ID del evento.
 * @returns {Promise<Object|null>} El evento o null si hay error.
 */
export const getEventById = async (id, token = null) => {
    try {
        const response = await fetch(`${API_URL}/events/${id}`, {
            headers: getAuthHeaders(token)
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error(`Error fetching event ${id} from API:`, error);
        return null;
    }
};

export const createEvent = async (data, token = null) => {
    const response = await fetch(`${API_URL}/events`, {
        method: 'POST',
        headers: getAuthHeaders(token),
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};

export const updateEventStatus = async (id, status, token = null) => {
    const response = await fetch(`${API_URL}/events/${id}/status`, {
        method: 'PATCH',
        headers: getAuthHeaders(token),
        body: JSON.stringify({ status })
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};

export const deleteEvent = async (id, token = null) => {
    const response = await fetch(`${API_URL}/events/${id}`, { 
        method: 'DELETE',
        headers: getAuthHeaders(token)
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return true;
};
