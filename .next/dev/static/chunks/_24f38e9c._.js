(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/services/dataService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Este servicio simula una llamada a una API o Base de Datos
// En el futuro, aquí harías: fetch('https://api.tu-backend.com/data')
__turbopack_context__.s([
    "getAboutData",
    ()=>getAboutData,
    "getAreasData",
    ()=>getAreasData,
    "getEventById",
    ()=>getEventById,
    "getEventsData",
    ()=>getEventsData,
    "getLandingData",
    ()=>getLandingData,
    "getMissionVisionData",
    ()=>getMissionVisionData,
    "getNewsData",
    ()=>getNewsData
]);
const getLandingData = async ()=>{
    // Simulamos un retardo de red pequeño (opcional)
    await new Promise((resolve)=>setTimeout(resolve, 100));
    return {
        hero: {
            title: "Conectando Mentes, Creando Futuro",
            subtitle: "Descubre un ecosistema digital donde el conocimiento no tiene límites. Quantum Student revoluciona la forma en que aprendes, interactúas y creces, fusionando la tecnología más avanzada con una comunidad apasionada por la excelencia.",
            cta: "Comenzar Ahora"
        },
        features: [
            {
                id: 1,
                title: "Arquitectura Modular",
                description: "Diseñado para crecer. Separación clara entre UI y lógica de negocio para máxima flexibilidad.",
                icon: "Box"
            },
            {
                id: 2,
                title: "Rendimiento Cuántico",
                description: "Optimizado para velocidad extrema con Next.js y renderizado estático.",
                icon: "Zap"
            },
            {
                id: 3,
                title: "Seguridad Robusta",
                description: "Protección de datos y estándares modernos desde el primer día.",
                icon: "Shield"
            }
        ],
        stats: {
            users: "10k+",
            uptime: "99.9%",
            speed: "<100ms"
        }
    };
};
const getAboutData = async ()=>{
    // Simulamos un retardo de red
    await new Promise((resolve)=>setTimeout(resolve, 100));
    return {
        hero: {
            title: "Nuestra Esencia Cuántica",
            subtitle: "Somos exploradores del código, arquitectos de realidades digitales y creyentes en el poder de la tecnología para transformar vidas."
        },
        mission: {
            title: "Misión",
            description: "Empoderar a la próxima generación de desarrolladores con herramientas y conocimientos que rompen barreras."
        },
        vision: {
            title: "Visión",
            description: "Un futuro donde la tecnología es accesible, ética y potencia la creatividad humana sin límites."
        },
        values: [
            {
                id: 1,
                title: "Innovación Constante",
                description: "No nos conformamos. Buscamos siempre la mejor solución, no la más fácil.",
                icon: "Lightbulb"
            },
            {
                id: 2,
                title: "Colaboración Radical",
                description: "Creemos que las mejores ideas surgen de la diversidad y el trabajo en equipo.",
                icon: "Users"
            },
            {
                id: 3,
                title: "Integridad Total",
                description: "Construimos confianza con transparencia y responsabilidad en cada línea de código.",
                icon: "Heart"
            }
        ]
    };
};
const getMissionVisionData = async ()=>{
    // Simulamos un retardo de red
    await new Promise((resolve)=>setTimeout(resolve, 100));
    return {
        hero: {
            title: "El Norte de Nuestra Brújula",
            subtitle: "Definimos el rumbo de la educación tecnológica con propósitos claros y una mirada inquebrantable hacia el futuro."
        },
        mission: {
            title: "Nuestra Misión",
            mainText: "Democratizar el acceso a la educación tecnológica de élite, eliminando las barreras geográficas y económicas que frenan el talento global.",
            points: [
                "Crear contenido educativo de vanguardia accesible para todos.",
                "Fomentar comunidades de aprendizaje autodidacta y colaborativo.",
                "Impulsar la innovación a través de proyectos de código abierto."
            ]
        },
        vision: {
            title: "Nuestra Visión",
            mainText: "Ser el ecosistema de referencia mundial donde nace la próxima generación de innovadores, líderes técnicos y creadores de cambio.",
            points: [
                "Establecer el estándar de oro en pedagogía digital.",
                "Conectar talento emergente con oportunidades globales.",
                "Construir una red descentralizada de conocimiento compartido."
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
const getAreasData = async ()=>{
    await new Promise((resolve)=>setTimeout(resolve, 100));
    return {
        hero: {
            title: "Explora Nuestros Universos",
            subtitle: "Sumérgete en las disciplinas que están redefiniendo el mañana. Desde la inteligencia sintética hasta la computación cuántica."
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
const getNewsData = async ()=>{
    await new Promise((resolve)=>setTimeout(resolve, 100));
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
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
                tag: "Inteligencia Artificial"
            },
            {
                id: 3,
                title: "El Futuro del Desarrollo Web",
                date: "2024-03-13",
                image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1000&auto=format&fit=crop",
                tag: "Desarrollo"
            },
            {
                id: 4,
                title: "Ciberseguridad en 2024",
                date: "2024-03-12",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
                tag: "Ciberseguridad"
            },
            {
                id: 5,
                title: "Blockchain más allá de las Criptos",
                date: "2024-03-10",
                image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop",
                tag: "Blockchain"
            }
        ],
        grid: [
            {
                id: 6,
                title: "Tema 1: Arquitectura de Software",
                description: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=100&w=3840&auto=format&fit=crop",
                author: "Dr. Smith",
                date: "2024-03-08",
                tag: "Arquitectura"
            },
            {
                id: 7,
                title: "Tema 2: Cloud Computing",
                description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
                image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1000&auto=format&fit=crop",
                author: "Sarah Johnson",
                date: "2024-03-05",
                tag: "Cloud"
            }
        ]
    };
};
const getEventsData = async ()=>{
    await new Promise((resolve)=>setTimeout(resolve, 100));
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
            endDate: new Date(tomorrow.getTime() + 48 * 60 * 60 * 1000).toISOString(),
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
            endDate: new Date(lastMonth.getTime() + 2 * 60 * 60 * 1000).toISOString(),
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
            endDate: new Date(nextMonth.getTime() + 8 * 60 * 60 * 1000).toISOString(),
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
const getEventById = async (id)=>{
    const events = await getEventsData();
    return events.find((e)=>e.id.toString() === id.toString());
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/news/event/[id]/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$dataService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/dataService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function EventDetailPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(82);
    if ($[0] !== "8d013f330697d8e1e2fdc00f67be798560d3d6e88b2b52e3113e842343401f4b") {
        for(let $i = 0; $i < 82; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8d013f330697d8e1e2fdc00f67be798560d3d6e88b2b52e3113e842343401f4b";
    }
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const [event, setEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t0;
    let t1;
    if ($[1] !== params.id) {
        t0 = ({
            "EventDetailPage[useEffect()]": ()=>{
                if (params.id) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$dataService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventById"])(params.id).then({
                        "EventDetailPage[useEffect() > (anonymous)()]": (data)=>{
                            setEvent(data);
                            setLoading(false);
                        }
                    }["EventDetailPage[useEffect() > (anonymous)()]"]);
                }
            }
        })["EventDetailPage[useEffect()]"];
        t1 = [
            params.id
        ];
        $[1] = params.id;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    if (loading) {
        let t2;
        if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-white flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12 h-12 border-4 border-cyan-600 border-t-transparent rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/app/news/event/[id]/page.js",
                    lineNumber: 46,
                    columnNumber: 84
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/news/event/[id]/page.js",
                lineNumber: 46,
                columnNumber: 12
            }, this);
            $[4] = t2;
        } else {
            t2 = $[4];
        }
        return t2;
    }
    if (!event) {
        let t2;
        if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gray-50 flex flex-col items-center justify-center pt-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl text-gray-800 font-bold mb-4",
                        children: "Evento no encontrado"
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/event/[id]/page.js",
                        lineNumber: 56,
                        columnNumber: 101
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/news",
                        className: "text-cyan-600 hover:underline",
                        children: "Volver a Noticias"
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/event/[id]/page.js",
                        lineNumber: 56,
                        columnNumber: 180
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/news/event/[id]/page.js",
                lineNumber: 56,
                columnNumber: 12
            }, this);
            $[5] = t2;
        } else {
            t2 = $[5];
        }
        return t2;
    }
    let dateStr;
    let t2;
    let timeStart;
    if ($[6] !== event.date || $[7] !== event.endDate) {
        const startDate = new Date(event.date);
        const endDate = event.endDate ? new Date(event.endDate) : null;
        dateStr = startDate.toLocaleDateString("es-CL", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });
        timeStart = startDate.toLocaleTimeString("es-CL", {
            hour: "2-digit",
            minute: "2-digit"
        });
        t2 = endDate ? endDate.toLocaleTimeString("es-CL", {
            hour: "2-digit",
            minute: "2-digit"
        }) : "";
        $[6] = event.date;
        $[7] = event.endDate;
        $[8] = dateStr;
        $[9] = t2;
        $[10] = timeStart;
    } else {
        dateStr = $[8];
        t2 = $[9];
        timeStart = $[10];
    }
    const timeEnd = t2;
    let t3;
    if ($[11] !== event.date) {
        t3 = new Date(event.date);
        $[11] = event.date;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    let t4;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = new Date();
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    const isUpcoming = t3 > t4;
    const handleAuthRequired = _EventDetailPageHandleAuthRequired;
    let t5;
    if ($[14] !== dateStr || $[15] !== isUpcoming || $[16] !== timeStart) {
        t5 = isUpcoming && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-blue-50 border-b border-blue-100 sticky top-16 z-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-blue-500 text-white rounded-full p-1 mt-0.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/news/event/[id]/page.js",
                                        lineNumber: 113,
                                        columnNumber: 385
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/news/event/[id]/page.js",
                                    lineNumber: 113,
                                    columnNumber: 306
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/news/event/[id]/page.js",
                                lineNumber: 113,
                                columnNumber: 242
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-blue-900 font-medium",
                                    children: [
                                        "RSVP para este evento a realizarse el ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold capitalize",
                                            children: dateStr
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/news/event/[id]/page.js",
                                            lineNumber: 113,
                                            columnNumber: 620
                                        }, this),
                                        " a las ",
                                        timeStart,
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/news/event/[id]/page.js",
                                    lineNumber: 113,
                                    columnNumber: 533
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/news/event/[id]/page.js",
                                lineNumber: 113,
                                columnNumber: 528
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/news/event/[id]/page.js",
                        lineNumber: 113,
                        columnNumber: 202
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleAuthRequired,
                                className: "px-4 py-1.5 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 text-green-500",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M5 13l4 4L19 7"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/news/event/[id]/page.js",
                                            lineNumber: 113,
                                            columnNumber: 1026
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/news/event/[id]/page.js",
                                        lineNumber: 113,
                                        columnNumber: 932
                                    }, this),
                                    "Asistiré"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/news/event/[id]/page.js",
                                lineNumber: 113,
                                columnNumber: 738
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleAuthRequired,
                                className: "px-4 py-1.5 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors",
                                children: "Quizás"
                            }, void 0, false, {
                                fileName: "[project]/src/app/news/event/[id]/page.js",
                                lineNumber: 113,
                                columnNumber: 1137
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleAuthRequired,
                                className: "px-4 py-1.5 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors",
                                children: "No asistiré"
                            }, void 0, false, {
                                fileName: "[project]/src/app/news/event/[id]/page.js",
                                lineNumber: 113,
                                columnNumber: 1322
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/news/event/[id]/page.js",
                        lineNumber: 113,
                        columnNumber: 710
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/news/event/[id]/page.js",
                lineNumber: 113,
                columnNumber: 96
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 113,
            columnNumber: 24
        }, this);
        $[14] = dateStr;
        $[15] = isUpcoming;
        $[16] = timeStart;
        $[17] = t5;
    } else {
        t5 = $[17];
    }
    let t6;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/news",
            className: "inline-flex items-center text-cyan-600 hover:text-cyan-700 font-bold mb-6 transition-colors group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M15 19l-7-7 7-7"
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/event/[id]/page.js",
                        lineNumber: 123,
                        columnNumber: 281
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/news/event/[id]/page.js",
                    lineNumber: 123,
                    columnNumber: 139
                }, this),
                "Volver a Noticias"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 123,
            columnNumber: 10
        }, this);
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    let t7;
    if ($[19] !== event.image || $[20] !== event.title) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: event.image,
            alt: event.title,
            className: "w-full h-full object-cover"
        }, void 0, false, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[19] = event.image;
        $[20] = event.title;
        $[21] = t7;
    } else {
        t7 = $[21];
    }
    let t8;
    if ($[22] !== event.title) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl md:text-5xl font-bold text-white shadow-sm leading-tight max-w-4xl",
                children: event.title
            }, void 0, false, {
                fileName: "[project]/src/app/news/event/[id]/page.js",
                lineNumber: 139,
                columnNumber: 123
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 139,
            columnNumber: 10
        }, this);
        $[22] = event.title;
        $[23] = t8;
    } else {
        t8 = $[23];
    }
    let t9;
    if ($[24] !== t7 || $[25] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg mb-8",
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 147,
            columnNumber: 10
        }, this);
        $[24] = t7;
        $[25] = t8;
        $[26] = t9;
    } else {
        t9 = $[26];
    }
    let t10;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between border-b border-gray-200 pb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "uppercase tracking-wider text-sm font-bold text-cyan-700",
                    children: "Temas Quantum"
                }, void 0, false, {
                    fileName: "[project]/src/app/news/event/[id]/page.js",
                    lineNumber: 156,
                    columnNumber: 133
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/news/event/[id]/page.js",
                lineNumber: 156,
                columnNumber: 92
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[27] = t10;
    } else {
        t10 = $[27];
    }
    let t11;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-bold text-gray-900 mb-4",
            children: "Sobre el Evento"
        }, void 0, false, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    let t12;
    if ($[29] !== event.fullDescription) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: event.fullDescription
        }, void 0, false, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[29] = event.fullDescription;
        $[30] = t12;
    } else {
        t12 = $[30];
    }
    let t13;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4",
            children: "Este evento explorará las fronteras de la tecnología con demostraciones en vivo, sesiones de preguntas y respuestas, y oportunidades únicas de networking con líderes de la industria. No te pierdas la oportunidad de ser parte de la comunidad."
        }, void 0, false, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    let t14;
    if ($[32] !== t12) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "prose prose-lg max-w-none text-gray-600",
            children: [
                t11,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[32] = t12;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    const t15 = event.hostImage || "https://via.placeholder.com/100";
    let t16;
    if ($[34] !== event.host || $[35] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: t15,
            alt: event.host,
            className: "w-16 h-16 rounded-full object-cover ring-2 ring-gray-100"
        }, void 0, false, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[34] = event.host;
        $[35] = t15;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-lg font-bold text-gray-900 mb-1",
            children: "Organizado por"
        }, void 0, false, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[37] = t17;
    } else {
        t17 = $[37];
    }
    let t18;
    if ($[38] !== event.host) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-cyan-700 font-medium mb-2",
            children: event.host
        }, void 0, false, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 210,
            columnNumber: 11
        }, this);
        $[38] = event.host;
        $[39] = t18;
    } else {
        t18 = $[39];
    }
    let t19;
    let t20;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500",
            children: "Líderes en innovación y difusión tecnológica. Comprometidos con el avance del conocimiento abierto."
        }, void 0, false, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "mt-4 text-sm font-bold text-cyan-600 hover:text-cyan-800 uppercase tracking-wide",
            children: "Ver Perfil del Organizador →"
        }, void 0, false, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 220,
            columnNumber: 11
        }, this);
        $[40] = t19;
        $[41] = t20;
    } else {
        t19 = $[40];
        t20 = $[41];
    }
    let t21;
    if ($[42] !== t18) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t17,
                t18,
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[42] = t18;
        $[43] = t21;
    } else {
        t21 = $[43];
    }
    let t22;
    if ($[44] !== t16 || $[45] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-start gap-6",
            children: [
                t16,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 237,
            columnNumber: 11
        }, this);
        $[44] = t16;
        $[45] = t21;
        $[46] = t22;
    } else {
        t22 = $[46];
    }
    let t23;
    if ($[47] !== t14 || $[48] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 space-y-12",
            children: [
                t10,
                t14,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[47] = t14;
        $[48] = t22;
        $[49] = t23;
    } else {
        t23 = $[49];
    }
    let t24;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm font-bold text-gray-500 uppercase tracking-wider mb-2",
            children: "Fecha y Hora"
        }, void 0, false, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[50] = t24;
    } else {
        t24 = $[50];
    }
    let t25;
    if ($[51] !== dateStr) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-900 font-medium capitalize",
            children: dateStr
        }, void 0, false, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 262,
            columnNumber: 11
        }, this);
        $[51] = dateStr;
        $[52] = t25;
    } else {
        t25 = $[52];
    }
    let t26;
    if ($[53] !== timeEnd || $[54] !== timeStart) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600",
            children: [
                timeStart,
                " - ",
                timeEnd,
                " (GMT-3)"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        $[53] = timeEnd;
        $[54] = timeStart;
        $[55] = t26;
    } else {
        t26 = $[55];
    }
    let t27;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-green-600 mt-1 font-medium bg-green-50 inline-block px-2 py-0.5 rounded",
            children: "Evento en Vivo"
        }, void 0, false, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 279,
            columnNumber: 11
        }, this);
        $[56] = t27;
    } else {
        t27 = $[56];
    }
    let t28;
    if ($[57] !== t25 || $[58] !== t26) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6",
            children: [
                t24,
                t25,
                t26,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 286,
            columnNumber: 11
        }, this);
        $[57] = t25;
        $[58] = t26;
        $[59] = t28;
    } else {
        t28 = $[59];
    }
    let t29;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm font-bold text-gray-500 uppercase tracking-wider mb-2",
            children: "Ubicación"
        }, void 0, false, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 295,
            columnNumber: 11
        }, this);
        $[60] = t29;
    } else {
        t29 = $[60];
    }
    let t30;
    if ($[61] !== event.location) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-900 font-medium",
            children: event.location
        }, void 0, false, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 302,
            columnNumber: 11
        }, this);
        $[61] = event.location;
        $[62] = t30;
    } else {
        t30 = $[62];
    }
    let t31;
    if ($[63] !== event.locationUrl) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: event.locationUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-sm text-cyan-600 hover:underline",
            children: "Ver mapa / enlace"
        }, void 0, false, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 310,
            columnNumber: 11
        }, this);
        $[63] = event.locationUrl;
        $[64] = t31;
    } else {
        t31 = $[64];
    }
    let t32;
    if ($[65] !== t30 || $[66] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6",
            children: [
                t29,
                t30,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 318,
            columnNumber: 11
        }, this);
        $[65] = t30;
        $[66] = t31;
        $[67] = t32;
    } else {
        t32 = $[67];
    }
    let t33;
    let t34;
    if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleAuthRequired,
            className: "w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-lg shadow-cyan-600/20 mb-3 flex items-center justify-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/event/[id]/page.js",
                        lineNumber: 328,
                        columnNumber: 309
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/news/event/[id]/page.js",
                    lineNumber: 328,
                    columnNumber: 230
                }, this),
                "Añadir a Calendario"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 328,
            columnNumber: 11
        }, this);
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-400 text-center",
            children: "Se enviará un recordatorio 15 min antes."
        }, void 0, false, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 329,
            columnNumber: 11
        }, this);
        $[68] = t33;
        $[69] = t34;
    } else {
        t33 = $[68];
        t34 = $[69];
    }
    let t35;
    if ($[70] !== t28 || $[71] !== t32) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-xl shadow-md border border-gray-200 sticky top-40",
                children: [
                    t28,
                    t32,
                    t33,
                    t34
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/news/event/[id]/page.js",
                lineNumber: 338,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 338,
            columnNumber: 11
        }, this);
        $[70] = t28;
        $[71] = t32;
        $[72] = t35;
    } else {
        t35 = $[72];
    }
    let t36;
    if ($[73] !== t23 || $[74] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-12",
            children: [
                t23,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 347,
            columnNumber: 11
        }, this);
        $[73] = t23;
        $[74] = t35;
        $[75] = t36;
    } else {
        t36 = $[75];
    }
    let t37;
    if ($[76] !== t36 || $[77] !== t9) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "max-w-7xl mx-auto px-6 mt-8",
            children: [
                t6,
                t9,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 356,
            columnNumber: 11
        }, this);
        $[76] = t36;
        $[77] = t9;
        $[78] = t37;
    } else {
        t37 = $[78];
    }
    let t38;
    if ($[79] !== t37 || $[80] !== t5) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-50 min-h-screen font-sans text-gray-800 pb-20 pt-32 md:pt-48",
            children: [
                t5,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news/event/[id]/page.js",
            lineNumber: 365,
            columnNumber: 11
        }, this);
        $[79] = t37;
        $[80] = t5;
        $[81] = t38;
    } else {
        t38 = $[81];
    }
    return t38;
}
_s(EventDetailPage, "KOlz8HNBGpFvJxne068I4l3Dc2w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = EventDetailPage;
function _EventDetailPageHandleAuthRequired() {
    alert("Debes poseer una cuenta para realizar esta acci\xF3n.");
}
var _c;
__turbopack_context__.k.register(_c, "EventDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_24f38e9c._.js.map