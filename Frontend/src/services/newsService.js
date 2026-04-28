const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const getAuthHeaders = () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    return {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '69420',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    };
};

/**
 * Obtiene y organiza las noticias para la página principal.
 * Separa la noticia destacada de las recientes y el resto de la lista.
 * 
 * @returns {Promise<Object>} Objeto con {featured, recent, grid}.
 */
export const getNewsData = async () => {
    try {
        const response = await fetch(`${API_URL}/news`, {
            headers: getAuthHeaders()
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const newsList = await response.json();
        
        const publishedNews = newsList.filter(n => n.status === 'published');
        return {
            featured: publishedNews.length > 0 ? publishedNews[0] : null,
            recent: publishedNews.slice(1, 4),
            grid: publishedNews.slice(4)
        };
    } catch (error) {
        console.error("Error fetching news from API:", error);
        return { featured: null, recent: [], grid: [] };
    }
};

export const getAllNewsRaw = async () => {
    try {
        const response = await fetch(`${API_URL}/news`, {
            headers: getAuthHeaders()
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error("Error fetching all news:", error);
        return [];
    }
};

export const createNews = async (data) => {
    const response = await fetch(`${API_URL}/news`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};

export const updateNewsStatus = async (id, status) => {
    const response = await fetch(`${API_URL}/news/${id}/status`, {
        method: 'PATCH',
        headers: getAuthHeaders(),
        body: JSON.stringify({ status })
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};

export const deleteNews = async (id) => {
    const response = await fetch(`${API_URL}/news/${id}`, { 
        method: 'DELETE',
        headers: getAuthHeaders()
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return true;
};
