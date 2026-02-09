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

export const getNewsData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    
    return {
        featured: {
            id: 1,
            title: "La Revolución Cuántica en la Educación Digital",
            description: "Descubre cómo las nuevas tecnologías están transformando la manera en que aprendemos y compartimos conocimiento globalmente. Una mirada profunda al futuro del aprendizaje.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=100&w=3840&auto=format&fit=crop",
            author: "Richard McClintock",
            date: "2024-03-15",
            tag: "Tecnología"
        },
        recent: [
            {
                id: 2,
                title: "Inteligencia Artificial Generativa",
                date: "2024-03-14",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop"
            },
            {
                id: 3,
                title: "El Futuro del Desarrollo Web",
                date: "2024-03-13",
                image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1000&auto=format&fit=crop"
            },
            {
                id: 4,
                title: "Ciberseguridad en 2024",
                date: "2024-03-12",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
            },
            {
                id: 5,
                title: "Blockchain más allá de las Criptos",
                date: "2024-03-10",
                image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        grid: [
            {
                id: 6,
                title: "Tema 1: Arquitectura de Software",
                description: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=100&w=3840&auto=format&fit=crop",
                author: "Dr. Smith",
                date: "2024-03-08"
            },
            {
                id: 7,
                title: "Tema 2: Cloud Computing",
                description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
                image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1000&auto=format&fit=crop",
                author: "Sarah Johnson",
                date: "2024-03-05"
            }
        ]
    };
};
