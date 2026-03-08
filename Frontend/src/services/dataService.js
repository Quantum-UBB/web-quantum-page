// Este servicio simula una llamada a una API o Base de Datos
// En el futuro, aquí harías: fetch('https://api.tu-backend.com/data')

export const getLandingData = async () => {
    // Simulamos un retardo de red pequeño (opcional)
    await new Promise((resolve) => setTimeout(resolve, 100));

    return {
        hero: {
            title: "Conectando Mentes, Creando Futuro",
            subtitle: "Descubre un ecosistema digital donde el conocimiento no tiene límites. Quantum Student revoluciona la forma en que aprendes, interactúas y creces, fusionando la tecnología más avanzada con una comunidad apasionada por la excelencia.",
            cta: "Comenzar Ahora",
        },
        features: [
            {
                id: 1,
                title: "Arquitectura Modular",
                description: "Diseñado para crecer. Separación clara entre UI y lógica de negocio para máxima flexibilidad.",
                icon: "Box", // Nombre del icono para renderizar en el componente
            },
            {
                id: 2,
                title: "Rendimiento Cuántico",
                description: "Optimizado para velocidad extrema con Next.js y renderizado estático.",
                icon: "Zap",
            },
            {
                id: 3,
                title: "Seguridad Robusta",
                description: "Protección de datos y estándares modernos desde el primer día.",
                icon: "Shield",
            },
        ],
        stats: {
            users: "10k+",
            uptime: "99.9%",
            speed: "<100ms",
        },
    };
};

export const getAboutData = async () => {
    // Simulamos un retardo de red
    await new Promise((resolve) => setTimeout(resolve, 100));

    return {
        hero: {
            title: "Nuestra Esencia Cuántica",
            subtitle: "Somos exploradores del código, arquitectos de realidades digitales y creyentes en el poder de la tecnología para transformar vidas.",
        },
        mission: {
            title: "Misión",
            description: "Empoderar a la próxima generación de desarrolladores con herramientas y conocimientos que rompen barreras.",
        },
        vision: {
            title: "Visión",
            description: "Un futuro donde la tecnología es accesible, ética y potencia la creatividad humana sin límites.",
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
            title: "El Norte de Nuestra Brújula",
            subtitle: "Definimos el rumbo de la educación tecnológica con propósitos claros y una mirada inquebrantable hacia el futuro.",
        },
        mission: {
            title: "Nuestra Misión",
            mainText: "Democratizar el acceso a la educación tecnológica de élite, eliminando las barreras geográficas y económicas que frenan el talento global.",
            points: [
                "Crear contenido educativo de vanguardia accesible para todos.",
                "Fomentar comunidades de aprendizaje autodidacta y colaborativo.",
                "Impulsar la innovación a través de proyectos de código abierto.",
            ]
        },
        vision: {
            title: "Nuestra Visión",
            mainText: "Ser el ecosistema de referencia mundial donde nace la próxima generación de innovadores, líderes técnicos y creadores de cambio.",
            points: [
                "Establecer el estándar de oro en pedagogía digital.",
                "Conectar talento emergente con oportunidades globales.",
                "Construir una red descentralizada de conocimiento compartido.",
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
            title: "Explora Nuestros Universos",
            subtitle: "Sumérgete en las disciplinas que están redefiniendo el mañana. Desde la inteligencia sintética hasta la computación cuántica.",
        },
        areas: [
            {
                id: 1,
                title: "Inteligencia Artificial",
                description: "Redes neuronales, Machine Learning y la revolución cognitiva.",
                icon: "Brain", 
                color: "from-pink-500 to-rose-500"
            },
            {
                id: 2,
                title: "Computación Cuántica",
                description: "Procesamiento de información más allá de los límites binarios.",
                icon: "Atom",
                color: "from-cyan-400 to-blue-600"
            },
            {
                id: 3,
                title: "Ciberseguridad",
                description: "Defensa digital en un mundo hiperconectado y vulnerable.",
                icon: "Shield",
                color: "from-green-400 to-emerald-600"
            },
            {
                id: 4,
                title: "Blockchain & Web3",
                description: "Descentralización, contratos inteligentes y economía digital.",
                icon: "Link",
                color: "from-yellow-400 to-orange-500"
            },
            {
                id: 5,
                title: "Desarrollo Cloud",
                description: "Arquitecturas escalables, serverless y microservicios.",
                icon: "Cloud",
                color: "from-sky-400 to-indigo-500"
            },
            {
                id: 6,
                title: "Diseño UX/UI",
                description: "Creando experiencias digitales que enamoran y funcionan.",
                icon: "PenTool",
                color: "from-purple-400 to-violet-600"
            }
        ]
    };
};

const API_URL = 'http://localhost:5000/api';

export const getNewsData = async () => {
    try {
        const response = await fetch(`${API_URL}/news`);
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
        const response = await fetch(`${API_URL}/news`);
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

export const getAllEventsRaw = async () => {
    try {
        const response = await fetch(`${API_URL}/events`);
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

export const createNews = async (data) => {
    const response = await fetch(`${API_URL}/news`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};

export const updateNewsStatus = async (id, status) => {
    const response = await fetch(`${API_URL}/news/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};

export const deleteNews = async (id) => {
    const response = await fetch(`${API_URL}/news/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Network response was not ok');
    return true;
};

export const createEvent = async (data) => {
    const response = await fetch(`${API_URL}/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};

export const updateEventStatus = async (id, status) => {
    const response = await fetch(`${API_URL}/events/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};

export const deleteEvent = async (id) => {
    const response = await fetch(`${API_URL}/events/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Network response was not ok');
    return true;
};
