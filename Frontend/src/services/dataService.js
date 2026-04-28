// Este servicio maneja datos estáticos o de configuración del sitio
// Las llamadas a API de Entidades (Noticias, Eventos, Investigaciones, Usuarios) 
// se han movido a sus respectivos archivos en /services/ para mejor organización.

export const getLandingData = async () => {
    // Simulamos un retardo de red pequeño (opcional)
    await new Promise((resolve) => setTimeout(resolve, 100));

    return {
        hero: {
            title: "Una cuántica a la Chilena",
            subtitle: "Somos el grupo más grande de estudiantes de pregrado de la 8va región en tecnologías cuánticas. Quantum Student es tu puerta de entrada al futuro.",
            cta: "Comenzar Ahora",
        }
    };
};

export const getAboutData = async () => {
    // Simulamos un retardo de red
    await new Promise((resolve) => setTimeout(resolve, 100));

    return {
        hero: {
            title: "Identidad Quantum",
            subtitle: "Promovemos la adopción temprana de tecnologías cuánticas para modelar el capital humano avanzado del futuro.",
        },
        mission: {
            title: "Misión",
            description: "Promover la adopción temprana y local de tecnologías cuánticas entre estudiantes para modelar el futuro capital humano avanzado.",
        },
        vision: {
            title: "Visión",
            description: "Posicionarnos en los próximos 5 años como un centro de manufactura y generación de capital humano en tecnologías cuánticas.",
        },
        values: [
            {
                id: 1,
                title: "Innovación Constante",
                description: "No nos conformamos. Buscamos siempre la mejor solución, no la más fácil.",
                icon: "Lightbulb",
            },
            {
                id: 2,
                title: "Colaboración Radical",
                description: "Creemos que las mejores ideas surgen de la diversidad y el trabajo en equipo.",
                icon: "Users",
            },
            {
                id: 3,
                title: "Integridad Total",
                description: "Construimos confianza con transparencia y responsabilidad en cada línea de código.",
                icon: "Heart",
            },
        ]
    };
};

export const getMissionVisionData = async () => {
    // Simulamos un retardo de red
    await new Promise((resolve) => setTimeout(resolve, 100));

    return {
        hero: {
            title: "Nuestro Propósito",
            subtitle: "Definimos el rumbo de la educación tecnológica local con una mirada de impacto regional y global.",
        },
        mission: {
            title: "Nuestra Misión",
            mainText: "Nuestra misión es promover la adopción temprana y local de tecnologías cuánticas entre estudiantes, creando un entorno propicio para el desarrollo de nuevas habilidades.",
            points: [
                "Generar capital humano avanzado en tecnologías cuánticas.",
                "Fomentar la investigación local desde el pregrado.",
                "Impactar en la industria regional con soluciones de vanguardia.",
            ]
        },
        vision: {
            title: "Nuestra Visión",
            mainText: "Para el 2030, seremos el centro de referencia en manufactura y formación de capital humano en tecnologías cuánticas de la 8va región.",
            points: [
                "Liderar la investigación de pregrado en la macrozona sur.",
                "Consolidar laboratorios de óptica y sensores avanzados.",
                "Conectar el talento local con la red global de física cuántica.",
            ]
        },
        pillars: [
            {
                title: "Excelencia",
                description: "La calidad no es negociable. Cada curso, cada línea de código, busca la perfección."
            },
            {
                title: "Inclusión",
                description: "La tecnología es para todos. Trabajamos activamente para cerrar brechas digitales."
            },
            {
                title: "Impacto",
                description: "Medimos nuestro éxito no por ganancias, sino por las vidas que transformamos."
            }
        ]
    };
};

export const getAreasData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 100));

    return {
        hero: {
            title: "Explora Nuestras Áreas",
            subtitle: "Desde la fotónica hasta el control avanzado. Especialízate en las tecnologías que impulsan la infraestructura física del mañana.",
        },
        areas: [
            {
                id: 1,
                title: "Fibra Óptica",
                description: "Desarrollo de plataformas de fibra óptica para comunicaciones de alta velocidad.",
                icon: "Activity",
                color: "from-blue-500 to-cyan-500"
            },
            {
                id: 2,
                title: "Sensores Ópticos",
                description: "Diseño y aplicación de sensores ópticos de alta precisión.",
                icon: "Eye",
                color: "from-emerald-400 to-teal-600"
            },
            {
                id: 3,
                title: "Sistemas Embebidos",
                description: "Programación de microcomputadores y microcontroladores para aplicaciones industriales.",
                icon: "Cpu",
                color: "from-amber-400 to-orange-500"
            },
            {
                id: 4,
                title: "Tecnología FPGA",
                description: "Diseño lógico programable y procesamiento de señales en tiempo real.",
                icon: "Cpu",
                color: "from-purple-400 to-indigo-500"
            },
            {
                id: 5,
                title: "Control Automático",
                description: "Modelado y diseño de sistemas de control automático para procesos complejos.",
                icon: "Settings",
                color: "from-slate-400 to-slate-600"
            }
        ]
    };
};

const API_URL = '/api';

export const getNewsData = async () => {
    try {
        const response = await fetch(`${API_URL}/news`);
        if (!response.ok) throw new Error('Network response was not ok');
        const newsList = await response.json();
        
        const publishedNews = newsList.filter(n => n.status === 'published');
        // Identificar noticias fijadas y no fijadas
        const pinned = publishedNews.filter(n => n.isPinned);
        const unpinned = publishedNews.filter(n => !n.isPinned);
        
        // El destacado principal es el primer fijado, o el más nuevo si no hay
        const featured = pinned.length > 0 ? pinned[0] : (unpinned.length > 0 ? unpinned[0] : null);
        
        // Removemos el featured del pool de unpinned (por si se uso como fallback)
        const pureUnpinned = unpinned.filter(n => n.id !== featured?.id);

        return {
            pinned,
            featured,
            recent: pureUnpinned.slice(0, 3),
            grid: pureUnpinned.slice(3)
        };
    } catch (error) {
        console.error("Error fetching news from API:", error);
        return { featured: null, recent: [], grid: [], pinned: [] };
    }
};

export const getAllNewsRaw = async (token = null) => {
    try {
        const headers = {};
        if (token) headers['Authorization'] = `Bearer ${token}`;

        const response = await fetch(`${API_URL}/news`, { headers });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error("Error fetching all news:", error);
        return [];
    }
};

export const getEventsData = async () => {
    try {
        const response = await fetch(`${API_URL}/events`);
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
        const headers = {};
        if (token) headers['Authorization'] = `Bearer ${token}`;

        const response = await fetch(`${API_URL}/events`, { headers });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error("Error fetching all events:", error);
        return [];
    }
};

export const getEventById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/events/${id}`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error(`Error fetching event ${id} from API:`, error);
        return null;
    }
};

export const createNews = async (data, token = null) => {
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(`${API_URL}/news`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};

export const updateNewsStatus = async (id, status, token = null) => {
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(`${API_URL}/news/${id}/status`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify({ status })
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};

export const updateNews = async (id, data, token = null) => {
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(`${API_URL}/news/${id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};

export const deleteNews = async (id, token = null) => {
    const headers = {};
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(`${API_URL}/news/${id}`, { 
        method: 'DELETE',
        headers 
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return true;
};

export const toggleNewsPin = async (id, token = null) => {
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(`${API_URL}/news/${id}/pin`, {
        method: 'PATCH',
        headers
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};

export const createEvent = async (data, token = null) => {
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(`${API_URL}/events`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};

export const updateEventStatus = async (id, status, token = null) => {
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(`${API_URL}/events/${id}/status`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify({ status })
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};

export const updateEvent = async (id, data, token = null) => {
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(`${API_URL}/events/${id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};

export const deleteEvent = async (id, token = null) => {
    const headers = {};
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(`${API_URL}/events/${id}`, { 
        method: 'DELETE',
        headers
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return true;
};

export const toggleEventPin = async (id, token = null) => {
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(`${API_URL}/events/${id}/pin`, {
        method: 'PATCH',
        headers
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};

export const registerUser = async (userData, token) => {
    const response = await fetch(`${API_URL}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(userData)
    });
    
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al crear el usuario');
    }
    
    return await response.json();
};

export const getAllUsers = async (token) => {
    const response = await fetch(`${API_URL}/users`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error fetching users');
    }

    return await response.json();
};

export const updateUserRole = async (userId, newRole, token) => {
    const response = await fetch(`${API_URL}/users/assign-role`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ userId, newRole })
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error assigning role');
    }

    return await response.json();
};
