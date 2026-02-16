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
            content: `
                <h2>El Amanecer de una Nueva Era Educativa</h2>
                <p>La computación cuántica no es solo una promesa futurista; está comenzando a redefinir los paradigmas fundamentales de cómo procesamos la información y, por extensión, cómo aprendemos. En un mundo donde la velocidad de adaptación es crucial, la educación digital se encuentra en el umbral de una transformación sin precedentes.</p>
                
                <h3>Personalización a Escala Atómica</h3>
                <p>Imagina un sistema educativo capaz de analizar el estilo de aprendizaje de cada estudiante en tiempo real, adaptando el contenido, la dificultad y el formato de presentación instantáneamente. Los algoritmos cuánticos permiten procesar estas variables complejas con una eficiencia que las computadoras clásicas tardarían años en lograr.</p>
                <ul>
                    <li><strong>Adaptabilidad Instantánea:</strong> Currículos que evolucionan con el progreso del estudiante.</li>
                    <li><strong>Simulaciones Complejas:</strong> Laboratorios virtuales que modelan fenómenos físicos y químicos con precisión atómica.</li>
                    <li><strong>Seguridad de Datos:</strong> Cryptografía post-cuántica para proteger la privacidad académica.</li>
                </ul>

                <h3>El Rol de la Realidad Aumentada</h3>
                <p>Junto con la potencia de cálculo, la interfaz de usuario está cambiando. Las aulas virtuales ya no son solo videollamadas; son entornos inmersivos donde los estudiantes pueden manipular moléculas, viajar a través de la historia o programar en espacios tridimensionales.</p>

                <h2>Desafíos y Oportunidades</h2>
                <p>A pesar del optimismo, la brecha digital sigue siendo un desafío crítico. La implementación de estas tecnologías requiere no solo infraestructura avanzada, sino también una nueva pedagogía que priorice el pensamiento crítico y la creatividad sobre la memorización.</p>
                <p>En Quantum Student, estamos comprometidos a liderar este cambio, asegurando que la revolución tecnológica sea inclusiva y accesible para todos.</p>
            `,
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
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
                tag: "Inteligencia Artificial",
                description: "La IA generativa está redefiniendo la creatividad y el desarrollo de software. Exploramos cómo herramientas como GPT-4 están potenciando la colaboración humano-máquina.",
                content: `
                    <h2>Más Allá del Chatbot</h2>
                    <p>La IA generativa ha pasado de ser una curiosidad tecnológica a una herramienta fundamental en el desarrollo de software, el diseño gráfico y la creación de contenido literario. Pero, ¿qué significa esto para la creatividad humana?</p>
                    <h3>Colaboración Humano-Máquina</h3>
                    <p>Los expertos coinciden en que el futuro no es la sustitución, sino la colaboración. Las herramientas como GPT-4 y Midjourney actúan como multiplicadores de fuerza para los creadores, permitiéndoles iterar ideas a una velocidad vertiginosa.</p>
                    <ul>
                        <li>Generación de prototipos rápidos.</li>
                        <li>Asistencia en la depuración de código complejo.</li>
                        <li>Personalización de experiencias de usuario.</li>
                    </ul>
                    <p>La clave estará en aprender a "dialogar" eficazmente con estos modelos para obtener resultados óptimos.</p>
                `
            },
            {
                id: 3,
                title: "El Futuro del Desarrollo Web",
                date: "2024-03-13",
                image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1000&auto=format&fit=crop",
                tag: "Desarrollo",
                description: "WebAssembly promete un futuro donde el navegador es el nuevo sistema operativo. Analizamos el impacto de ejecutar código nativo a velocidades increíbles en la web.",
                content: `
                    <h2>WebAssembly y el Fin de JavaScript (¿Quizás?)</h2>
                    <p>Con el auge de WebAssembly (Wasm), el navegador se está convirtiendo en un verdadero sistema operativo. Ya no estamos limitados a JavaScript; ahora podemos ejecutar código escrito en Rust, C++ o Go a velocidades casi nativas directamente en la web.</p>
                    <h3>Frameworks de Próxima Generación</h3>
                    <p>Herramientas como Blazor, Yew y otros frameworks basados en Wasm están ganando tracción. Permiten aplicaciones web progresivas (PWA) con un rendimiento que rivaliza con las aplicaciones de escritorio.</p>
                    <p>Sin embargo, el ecosistema de JavaScript sigue siendo vasto y vibrante, adaptándose con herramientas como Vite y Turbopack para mantenerse relevante en la era de la velocidad.</p>
                `
            },
            {
                id: 4,
                title: "Ciberseguridad en 2024",
                date: "2024-03-12",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
                tag: "Ciberseguridad",
                description: "Ante una superficie de ataque en expansión, la arquitectura Zero Trust se convierte en el nuevo estándar. Descubre las estrategias clave para proteger activos digitales en 2024.",
                content: `
                    <h2>La Guerra Invisible</h2>
                    <p>En un mundo interconectado, la superficie de ataque nunca ha sido mayor. Los ataques de ransomware y phishing se han vuelto más sofisticados, impulsados a menudo por la misma IA que usamos para defendernos.</p>
                    <h3>Zero Trust Architecture</h3>
                    <p>El paradigma de seguridad ha cambiado de "confiar pero verificar" a "nunca confiar, siempre verificar". La arquitectura Zero Trust asume que la red siempre es hostil y requiere autenticación continua para cada solicitud, sin importar su origen.</p>
                    <ul>
                        <li>Autenticación multifactor biométrica.</li>
                        <li>Segmentación de redes.</li>
                        <li>Monitoreo de comportamiento anómalo en tiempo real.</li>
                    </ul>
                `
            },
            {
                id: 5,
                title: "Blockchain más allá de las Criptos",
                date: "2024-03-10",
                image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop",
                tag: "Blockchain",
                description: "Más allá de la especulación financiera, blockchain está construyendo la base para la identidad soberana y cadenas de suministro transparentes. Un vistazo a la utilidad real.",
                content: `
                    <h2>Identidad Digital Soberana</h2>
                    <p>Más allá de Bitcoin y Ethereum, la tecnología blockchain está revolucionando la gestión de la identidad. La Identidad Auto-Soberana (SSI) permite a los usuarios controlar sus propios datos sin depender de intermediarios centralizados como Google o Facebook.</p>
                    <h3>Cadenas de Suministro Transparentes</h3>
                    <p>Desde la granja hasta la mesa, blockchain permite rastrear el origen de los productos, garantizando la autenticidad y la sostenibilidad. Empresas líderes ya están utilizando libros de contabilidad distribuidos para certificar el comercio justo y reducir el desperdicio.</p>
                `
            }
        ],
        grid: [
            {
                id: 6,
                title: "Tema 1: Arquitectura de Software",
                description: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.",
                content: `
                    <h2>Principios S.O.L.I.D. en la Era Moderna</h2>
                    <p>Aunque los principios de diseño de software tienen décadas, siguen siendo la base de sistemas mantenibles y escalables. Revisamos cómo aplicar la Inversión de Dependencia y la Segregación de Interfaces en microservicios modernos.</p>
                    <h3>Microservicios vs Monolitos</h3>
                    <p>El debate continúa. Mientras que los microservicios ofrecen escalabilidad independiente, la complejidad operativa puede ser abrumadora. ¿Es el monolito modular la respuesta intermedia?</p>
                `,
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=100&w=3840&auto=format&fit=crop",
                author: "Dr. Smith",
                date: "2024-03-08",
                tag: "Arquitectura"
            },
            {
                id: 7,
                title: "Tema 2: Cloud Computing",
                description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
                content: `
                    <h2>Serverless: ¿El Futuro por Defecto?</h2>
                    <p>La computación sin servidor promete reducir los costos operativos y permitir a los desarrolladores centrarse puramente en el código. Analizamos los pros y contras de AWS Lambda, Azure Functions y Google Cloud Run.</p>
                    <h3>Edge Computing</h3>
                    <p>Llevar el cómputo más cerca del usuario final reduce la latencia y mejora la experiencia. Con la llegada del 5G, el Edge Computing se está convirtiendo en un componente crítico de la infraestructura moderna.</p>
                `,
                image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1000&auto=format&fit=crop",
                author: "Sarah Johnson",
                date: "2024-03-05",
                tag: "Cloud"
            }
        ]
    };
};

export const getEventsData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Fechas dinámicas para pruebas
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    
    const nextMonth = new Date(today);
    nextMonth.setMonth(today.getMonth() + 1);

    const lastMonth = new Date(today);
    lastMonth.setMonth(today.getMonth() - 1);

    const events = [
        {
            id: 1,
            title: "Hackathon Cuántico 2026",
            description: "Únete a nosotros para 48 horas de codificación intensiva y desafíos de computación cuántica.",
            fullDescription: "Este hackathon reúne a las mentes más brillantes para resolver problemas complejos utilizando algoritmos cuánticos. Tendrás acceso a simuladores de última generación y mentoría de expertos de la industria. Los equipos competirán por premios en efectivo y la oportunidad de presentar sus soluciones a líderes tecnológicos.",
            date: tomorrow.toISOString(), 
            endDate: new Date(tomorrow.getTime() + 48*60*60*1000).toISOString(),
            image: "https://picsum.photos/seed/quantum/1200/600",
            location: "Plataforma Virtual Quantum",
            locationUrl: "https://quantum-hackathon.example.com",
            status: "upcoming",
            host: "Departamento de Computación Cuántica",
            hostImage: "https://picsum.photos/seed/host1/200/200"
        },
        {
            id: 2,
            title: "Webinar: IA en Educación Superior",
            description: "Explorando cómo la IA está personalizando el aprendizaje.",
            fullDescription: "Descubre las últimas tendencias en inteligencia artificial aplicada a la educación. Analizaremos casos de éxito, herramientas emergentes y el impacto ético de la IA en el aula. Ideal para educadores, administradores y estudiantes interesados en el futuro del aprendizaje.",
            date: lastMonth.toISOString(), 
            endDate: new Date(lastMonth.getTime() + 2*60*60*1000).toISOString(),
            image: "https://picsum.photos/seed/ai/1200/600", 
            location: "Zoom",
            locationUrl: "#",
            status: "past",
            host: "Facultad de Educación Digital",
            hostImage: "https://picsum.photos/seed/host2/200/200"
        },
        {
            id: 3,
            title: "Conferencia de Ciberseguridad Global",
            description: "Protegiendo el futuro digital y la privacidad.",
            fullDescription: "La conferencia anual de seguridad informática más importante de la región. Expertos internacionales discutirán sobre criptografía post-cuántica, defensa activa y normativas de privacidad global. Incluye talleres prácticos y networking.",
            date: nextMonth.toISOString(), 
            endDate: new Date(nextMonth.getTime() + 8*60*60*1000).toISOString(),
            image: "https://picsum.photos/seed/cyber/1200/600", 
            location: "Centro de Convenciones Santiago",
            locationUrl: "https://maps.google.com",
            status: "scheduled",
            host: "Sociedad de Ciberseguridad",
            hostImage: "https://picsum.photos/seed/host3/200/200"
        }
    ];

    return events;
};

export const getEventById = async (id) => {
    const events = await getEventsData();
    return events.find(e => e.id.toString() === id.toString());
};
