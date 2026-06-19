module.exports = [
"[project]/src/services/dataService.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Este servicio maneja datos estáticos o de configuración del sitio
// Las llamadas a API de Entidades (Noticias, Eventos, Investigaciones, Usuarios) 
// se han movido a sus respectivos archivos en /services/ para mejor organización.
__turbopack_context__.s([
    "createEvent",
    ()=>createEvent,
    "createNews",
    ()=>createNews,
    "deleteEvent",
    ()=>deleteEvent,
    "deleteNews",
    ()=>deleteNews,
    "getAboutData",
    ()=>getAboutData,
    "getAllEventsRaw",
    ()=>getAllEventsRaw,
    "getAllNewsRaw",
    ()=>getAllNewsRaw,
    "getAllUsers",
    ()=>getAllUsers,
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
    ()=>getNewsData,
    "registerUser",
    ()=>registerUser,
    "toggleEventPin",
    ()=>toggleEventPin,
    "toggleNewsPin",
    ()=>toggleNewsPin,
    "updateEvent",
    ()=>updateEvent,
    "updateEventStatus",
    ()=>updateEventStatus,
    "updateNews",
    ()=>updateNews,
    "updateNewsStatus",
    ()=>updateNewsStatus,
    "updateUserRole",
    ()=>updateUserRole
]);
const getLandingData = async ()=>{
    // Simulamos un retardo de red pequeño (opcional)
    await new Promise((resolve)=>setTimeout(resolve, 100));
    return {
        hero: {
            title: "Una cuántica a la Chilena",
            subtitle: "Somos el grupo más grande de estudiantes de pregrado de la 8va región en tecnologías cuánticas. Quantum Student es tu puerta de entrada al futuro.",
            cta: "Comenzar Ahora"
        }
    };
};
const getAboutData = async ()=>{
    // Simulamos un retardo de red
    await new Promise((resolve)=>setTimeout(resolve, 100));
    return {
        hero: {
            title: "Identidad Quantum",
            subtitle: "Promovemos la adopción temprana de tecnologías cuánticas para modelar el capital humano avanzado del futuro."
        },
        mission: {
            title: "Misión",
            description: "Promover la adopción temprana y local de tecnologías cuánticas entre estudiantes para modelar el futuro capital humano avanzado."
        },
        vision: {
            title: "Visión",
            description: "Posicionarnos en los próximos 5 años como un centro de manufactura y generación de capital humano en tecnologías cuánticas."
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
            title: "Nuestro Propósito",
            subtitle: "Definimos el rumbo de la educación tecnológica local con una mirada de impacto regional y global."
        },
        mission: {
            title: "Nuestra Misión",
            mainText: "Nuestra misión es promover la adopción temprana y local de tecnologías cuánticas entre estudiantes, creando un entorno propicio para el desarrollo de nuevas habilidades.",
            points: [
                "Generar capital humano avanzado en tecnologías cuánticas.",
                "Fomentar la investigación local desde el pregrado.",
                "Impactar en la industria regional con soluciones de vanguardia."
            ]
        },
        vision: {
            title: "Nuestra Visión",
            mainText: "Para el 2030, seremos el centro de referencia en manufactura y formación de capital humano en tecnologías cuánticas de la 8va región.",
            points: [
                "Liderar la investigación de pregrado en la macrozona sur.",
                "Consolidar laboratorios de óptica y sensores avanzados.",
                "Conectar el talento local con la red global de física cuántica."
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
            title: "Explora Nuestras Áreas",
            subtitle: "Desde la fotónica hasta el control avanzado. Especialízate en las tecnologías que impulsan la infraestructura física del mañana."
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
const getNewsData = async ()=>{
    try {
        const response = await fetch(`${API_URL}/news`);
        if (!response.ok) throw new Error('Network response was not ok');
        const newsList = await response.json();
        const publishedNews = newsList.filter((n)=>n.status === 'published');
        // Identificar noticias fijadas y no fijadas
        const pinned = publishedNews.filter((n)=>n.isPinned);
        const unpinned = publishedNews.filter((n)=>!n.isPinned);
        // El destacado principal es el primer fijado, o el más nuevo si no hay
        const featured = pinned.length > 0 ? pinned[0] : unpinned.length > 0 ? unpinned[0] : null;
        // Removemos el featured del pool de unpinned (por si se uso como fallback)
        const pureUnpinned = unpinned.filter((n)=>n.id !== featured?.id);
        return {
            pinned,
            featured,
            recent: pureUnpinned.slice(0, 3),
            grid: pureUnpinned.slice(3)
        };
    } catch (error) {
        console.error("Error fetching news from API:", error);
        return {
            featured: null,
            recent: [],
            grid: [],
            pinned: []
        };
    }
};
const getAllNewsRaw = async (token = null)=>{
    try {
        const headers = {};
        if (token) headers['Authorization'] = `Bearer ${token}`;
        const response = await fetch(`${API_URL}/news`, {
            headers
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error("Error fetching all news:", error);
        return [];
    }
};
const getEventsData = async ()=>{
    try {
        const response = await fetch(`${API_URL}/events`);
        if (!response.ok) throw new Error('Network response was not ok');
        const allEvents = await response.json();
        return allEvents.filter((e)=>e.status !== 'draft');
    } catch (error) {
        console.error("Error fetching events from API:", error);
        return [];
    }
};
const getAllEventsRaw = async (token = null)=>{
    try {
        const headers = {};
        if (token) headers['Authorization'] = `Bearer ${token}`;
        const response = await fetch(`${API_URL}/events`, {
            headers
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error("Error fetching all events:", error);
        return [];
    }
};
const getEventById = async (id)=>{
    try {
        const response = await fetch(`${API_URL}/events/${id}`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error(`Error fetching event ${id} from API:`, error);
        return null;
    }
};
const createNews = async (data, token = null)=>{
    const headers = {
        'Content-Type': 'application/json'
    };
    if (token) headers['Authorization'] = `Bearer ${token}`;
    const response = await fetch(`${API_URL}/news`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};
const updateNewsStatus = async (id, status, token = null)=>{
    const headers = {
        'Content-Type': 'application/json'
    };
    if (token) headers['Authorization'] = `Bearer ${token}`;
    const response = await fetch(`${API_URL}/news/${id}/status`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify({
            status
        })
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};
const updateNews = async (id, data, token = null)=>{
    const headers = {
        'Content-Type': 'application/json'
    };
    if (token) headers['Authorization'] = `Bearer ${token}`;
    const response = await fetch(`${API_URL}/news/${id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};
const deleteNews = async (id, token = null)=>{
    const headers = {};
    if (token) headers['Authorization'] = `Bearer ${token}`;
    const response = await fetch(`${API_URL}/news/${id}`, {
        method: 'DELETE',
        headers
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return true;
};
const toggleNewsPin = async (id, token = null)=>{
    const headers = {
        'Content-Type': 'application/json'
    };
    if (token) headers['Authorization'] = `Bearer ${token}`;
    const response = await fetch(`${API_URL}/news/${id}/pin`, {
        method: 'PATCH',
        headers
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};
const createEvent = async (data, token = null)=>{
    const headers = {
        'Content-Type': 'application/json'
    };
    if (token) headers['Authorization'] = `Bearer ${token}`;
    const response = await fetch(`${API_URL}/events`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};
const updateEventStatus = async (id, status, token = null)=>{
    const headers = {
        'Content-Type': 'application/json'
    };
    if (token) headers['Authorization'] = `Bearer ${token}`;
    const response = await fetch(`${API_URL}/events/${id}/status`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify({
            status
        })
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};
const updateEvent = async (id, data, token = null)=>{
    const headers = {
        'Content-Type': 'application/json'
    };
    if (token) headers['Authorization'] = `Bearer ${token}`;
    const response = await fetch(`${API_URL}/events/${id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};
const deleteEvent = async (id, token = null)=>{
    const headers = {};
    if (token) headers['Authorization'] = `Bearer ${token}`;
    const response = await fetch(`${API_URL}/events/${id}`, {
        method: 'DELETE',
        headers
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return true;
};
const toggleEventPin = async (id, token = null)=>{
    const headers = {
        'Content-Type': 'application/json'
    };
    if (token) headers['Authorization'] = `Bearer ${token}`;
    const response = await fetch(`${API_URL}/events/${id}/pin`, {
        method: 'PATCH',
        headers
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};
const registerUser = async (userData, token)=>{
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
const getAllUsers = async (token)=>{
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
const updateUserRole = async (userId, newRole, token)=>{
    const response = await fetch(`${API_URL}/users/assign-role`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            userId,
            newRole
        })
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error assigning role');
    }
    return await response.json();
};
}),
"[project]/src/components/common/LoadingScreen.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function LoadingScreen({ message = "Cargando..." }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0b0f19]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-center justify-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute w-28 h-28 rounded-full border-2 border-[#14E19D]/10 animate-ping",
                        style: {
                            animationDuration: '2s'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/LoadingScreen.jsx",
                        lineNumber: 14,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute w-20 h-20 rounded-full border border-[#14E19D]/20 animate-ping",
                        style: {
                            animationDuration: '1.5s',
                            animationDelay: '0.25s'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/LoadingScreen.jsx",
                        lineNumber: 15,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-20 h-20 animate-spin",
                        style: {
                            animationDuration: '1.2s'
                        },
                        viewBox: "0 0 80 80",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "40",
                                cy: "40",
                                r: "34",
                                stroke: "#1e293b",
                                strokeWidth: "6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/LoadingScreen.jsx",
                                lineNumber: 25,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M40 6 A34 34 0 0 1 74 40",
                                stroke: "url(#spinGradient)",
                                strokeWidth: "6",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/LoadingScreen.jsx",
                                lineNumber: 30,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "spinGradient",
                                    x1: "40",
                                    y1: "6",
                                    x2: "74",
                                    y2: "40",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            stopColor: "#14E19D"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/LoadingScreen.jsx",
                                            lineNumber: 38,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "1",
                                            stopColor: "#0ea5e9"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/LoadingScreen.jsx",
                                            lineNumber: 39,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/common/LoadingScreen.jsx",
                                    lineNumber: 37,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/LoadingScreen.jsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/common/LoadingScreen.jsx",
                        lineNumber: 18,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute text-2xl font-bold text-[#14E19D] font-orbitron",
                        style: {
                            textShadow: '0 0 20px rgba(20,225,157,0.5)'
                        },
                        children: "Q"
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/LoadingScreen.jsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/LoadingScreen.jsx",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-400 text-xs uppercase tracking-[0.3em] font-orbitron animate-pulse",
                children: message
            }, void 0, false, {
                fileName: "[project]/src/components/common/LoadingScreen.jsx",
                lineNumber: 54,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 w-32 h-px bg-gradient-to-r from-transparent via-[#14E19D]/50 to-transparent"
            }, void 0, false, {
                fileName: "[project]/src/components/common/LoadingScreen.jsx",
                lineNumber: 59,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/LoadingScreen.jsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/common/ParticleBackground.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ParticleBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function ParticleBackground() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nodesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const linksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const photonsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const nebulaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: null,
        y: null
    });
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dimensionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        width: 0,
        height: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;
        const ctx = canvas.getContext('2d');
        const dpr = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1;
        const CLUSTER_COLS = 4;
        const CLUSTER_ROWS = 4;
        const CLUSTER_RADIUS = 200;
        const NODES_PER_CLUSTER = 12;
        const NODE_RADIUS = 5.5;
        const NODE_SPEED = 0.02;
        const NEIGHBORS = 2; //limit connections per node for a clean mesh
        const MAX_LINK_DISTANCE = 260;
        const LINE_OPACITY = 0.4;
        const PHOTON_COUNT = 55;
        const PHOTON_SPEED = 0.005;
        const PHOTON_RADIUS = 2.0;
        const NEBULA_COUNT = 160;
        const NEBULA_SPEED = 0.025;
        const MOUSE_RADIUS = 100;
        const REPULSION_FORCE = 0.5;
        const HOME_FORCE = 0.003;
        const MAX_SPEED = 1.2;
        const FRICTION = 0.94;
        const resize = ()=>{
            const width = container.clientWidth;
            const height = container.clientHeight;
            dimensionsRef.current = {
                width,
                height
            };
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.scale(dpr, dpr);
            initNetwork(width, height);
        };
        const initNetwork = (width, height)=>{
            const clusters = [];
            for(let r = 0; r < CLUSTER_ROWS; r++){
                for(let c = 0; c < CLUSTER_COLS; c++){
                    const baseX = (c + 0.5) * width / CLUSTER_COLS;
                    const baseY = (r + 0.5) * height / CLUSTER_ROWS;
                    const jitterX = (Math.random() - 0.5) * (width / CLUSTER_COLS) * 0.45;
                    const jitterY = (Math.random() - 0.5) * (height / CLUSTER_ROWS) * 0.45;
                    clusters.push({
                        x: baseX + jitterX,
                        y: baseY + jitterY
                    });
                }
            }
            const nodes = [];
            let id = 0;
            for(let c = 0; c < clusters.length; c++){
                const cluster = clusters[c];
                for(let i = 0; i < NODES_PER_CLUSTER; i++){
                    const angle = Math.random() * Math.PI * 2;
                    const distance = Math.sqrt(Math.random()) * CLUSTER_RADIUS;
                    const x = cluster.x + Math.cos(angle) * distance;
                    const y = cluster.y + Math.sin(angle) * distance;
                    nodes.push({
                        id: id++,
                        x,
                        y,
                        homeX: x,
                        homeY: y,
                        vx: (Math.random() - 0.5) * NODE_SPEED,
                        vy: (Math.random() - 0.5) * NODE_SPEED,
                        radius: NODE_RADIUS,
                        pulseOffset: Math.random() * Math.PI * 2,
                        clusterIndex: c
                    });
                }
            }
            nodesRef.current = nodes;
            linksRef.current = buildLinks(nodes);
            const links = linksRef.current;
            const photons = [];
            for(let i = 0; i < PHOTON_COUNT; i++){
                photons.push({
                    linkIndex: Math.floor(Math.random() * links.length),
                    progress: Math.random(),
                    speed: PHOTON_SPEED * (0.7 + Math.random() * 0.6)
                });
            }
            photonsRef.current = photons;
            const nebula = [];
            for(let i = 0; i < NEBULA_COUNT; i++){
                nebula.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * NEBULA_SPEED,
                    vy: (Math.random() - 0.5) * NEBULA_SPEED,
                    radius: Math.random() * 1.2 + 0.4,
                    alpha: Math.random() * 0.06 + 0.02
                });
            }
            nebulaRef.current = nebula;
        };
        const buildLinks = (nodes)=>{
            const links = [];
            // Each node connects to its NEIGHBORS closest nodes within MAX_LINK_DISTANCE.
            for(let i = 0; i < nodes.length; i++){
                const distances = [];
                for(let j = 0; j < nodes.length; j++){
                    if (i === j) continue;
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < MAX_LINK_DISTANCE) {
                        distances.push({
                            index: j,
                            dist
                        });
                    }
                }
                distances.sort((a, b)=>a.dist - b.dist);
                for(let k = 0; k < NEIGHBORS && k < distances.length; k++){
                    const j = distances[k].index;
                    const exists = links.some((l)=>l.source === i && l.target === j || l.source === j && l.target === i);
                    if (!exists) {
                        links.push({
                            source: i,
                            target: j,
                            dist: distances[k].dist
                        });
                    }
                }
            }
            // Ensure the entire graph is one connected component.
            // If there are isolated sub-graphs, bridge them with the shortest possible links.
            const adj = Array.from({
                length: nodes.length
            }, ()=>[]);
            for (const l of links){
                adj[l.source].push(l.target);
                adj[l.target].push(l.source);
            }
            const findComponents = ()=>{
                const visited = new Array(nodes.length).fill(false);
                const components = [];
                for(let i = 0; i < nodes.length; i++){
                    if (!visited[i]) {
                        const comp = [];
                        const stack = [
                            i
                        ];
                        visited[i] = true;
                        while(stack.length){
                            const u = stack.pop();
                            comp.push(u);
                            for (const v of adj[u]){
                                if (!visited[v]) {
                                    visited[v] = true;
                                    stack.push(v);
                                }
                            }
                        }
                        components.push(comp);
                    }
                }
                return components;
            };
            let components = findComponents();
            while(components.length > 1){
                let minDist = Infinity;
                let bestPair = null;
                for(let i = 0; i < components.length; i++){
                    for(let j = i + 1; j < components.length; j++){
                        for (const u of components[i]){
                            for (const v of components[j]){
                                const dx = nodes[u].x - nodes[v].x;
                                const dy = nodes[u].y - nodes[v].y;
                                const dist = Math.sqrt(dx * dx + dy * dy);
                                if (dist < minDist) {
                                    minDist = dist;
                                    bestPair = [
                                        u,
                                        v
                                    ];
                                }
                            }
                        }
                    }
                }
                if (bestPair) {
                    const [u, v] = bestPair;
                    links.push({
                        source: u,
                        target: v,
                        dist: minDist
                    });
                    adj[u].push(v);
                    adj[v].push(u);
                }
                components = findComponents();
            }
            return links;
        };
        const handleMouseMove = (e)=>{
            const rect = container.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };
        const handleMouseLeave = ()=>{
            mouseRef.current = {
                x: null,
                y: null
            };
        };
        const handleWindowMouseOut = (e)=>{
            if (!e.relatedTarget) {
                mouseRef.current = {
                    x: null,
                    y: null
                };
            }
        };
        const draw = ()=>{
            const { width, height } = dimensionsRef.current;
            ctx.clearRect(0, 0, width, height);
            const nodes = nodesRef.current;
            const links = linksRef.current;
            const photons = photonsRef.current;
            const nebula = nebulaRef.current;
            const mouse = mouseRef.current;
            // Nebula dust
            for (const p of nebula){
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(20, 225, 157, ${p.alpha})`;
                ctx.fill();
            }
            // Move nodes
            for (const node of nodes){
                // Gentle mouse repulsion
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = node.x - mouse.x;
                    const dy = node.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < MOUSE_RADIUS && dist > 0) {
                        const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
                        node.vx += dx / dist * force * REPULSION_FORCE;
                        node.vy += dy / dist * force * REPULSION_FORCE;
                    }
                }
                // Spring force back to home position
                node.vx += (node.homeX - node.x) * HOME_FORCE;
                node.vy += (node.homeY - node.y) * HOME_FORCE;
                // Friction to prevent runaway velocity
                node.vx *= FRICTION;
                node.vy *= FRICTION;
                // Clamp speed
                const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
                if (speed > MAX_SPEED) {
                    node.vx = node.vx / speed * MAX_SPEED;
                    node.vy = node.vy / speed * MAX_SPEED;
                }
                node.x += node.vx;
                node.y += node.vy;
                if (node.x < 0 || node.x > width) node.vx *= -1;
                if (node.y < 0 || node.y > height) node.vy *= -1;
                node.x = Math.max(0, Math.min(width, node.x));
                node.y = Math.max(0, Math.min(height, node.y));
            }
            // Draw links (same pairs always; lines stretch/move with the nodes)
            for (const link of links){
                const a = nodes[link.source];
                const b = nodes[link.target];
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const opacity = Math.max(0, (1 - Math.min(dist, MAX_LINK_DISTANCE * 1.5) / (MAX_LINK_DISTANCE * 1.5)) * LINE_OPACITY);
                ctx.beginPath();
                ctx.strokeStyle = `rgba(20, 225, 157, ${opacity})`;
                ctx.lineWidth = 0.8;
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
            }
            // Draw photons
            for (const photon of photons){
                const link = links[photon.linkIndex];
                if (!link) continue;
                const a = nodes[link.source];
                const b = nodes[link.target];
                photon.progress += photon.speed;
                if (photon.progress > 1) {
                    photon.progress = 0;
                    photon.linkIndex = Math.floor(Math.random() * links.length);
                }
                const t = photon.progress;
                const px = a.x + (b.x - a.x) * t;
                const py = a.y + (b.y - a.y) * t;
                ctx.beginPath();
                ctx.arc(px, py, PHOTON_RADIUS, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
                ctx.shadowColor = '#14E19D';
                ctx.shadowBlur = 10;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
            // Draw nodes (qubits) with pulse
            const time = Date.now() * 0.002;
            for (const node of nodes){
                const pulse = 0.6 + 0.4 * Math.sin(time + node.pulseOffset);
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius * (2.4 + pulse), 0, Math.PI * 2);
                ctx.fillStyle = `rgba(20, 225, 157, ${0.12 * pulse})`;
                ctx.fill();
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(20, 225, 157, 0.95)';
                ctx.fill();
            }
            rafRef.current = requestAnimationFrame(draw);
        };
        resize();
        draw();
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleWindowMouseOut);
        return ()=>{
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleWindowMouseOut);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "fixed inset-0 z-[-1]",
        style: {
            background: `
          radial-gradient(ellipse at 20% 30%, rgba(20, 225, 157, 0.10) 0%, transparent 55%),
          radial-gradient(ellipse at 80% 70%, rgba(20, 225, 157, 0.07) 0%, transparent 55%),
          radial-gradient(ellipse at 50% 50%, rgba(20, 225, 157, 0.05) 0%, transparent 60%),
          #0F172A
        `
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    backgroundImage: 'radial-gradient(circle, rgba(20, 225, 157, 0.25) 1.5px, transparent 1.5px)',
                    backgroundSize: '34px 34px'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/common/ParticleBackground.jsx",
                lineNumber: 387,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "absolute inset-0 w-full h-full"
            }, void 0, false, {
                fileName: "[project]/src/components/common/ParticleBackground.jsx",
                lineNumber: 394,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/60"
            }, void 0, false, {
                fileName: "[project]/src/components/common/ParticleBackground.jsx",
                lineNumber: 395,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/ParticleBackground.jsx",
        lineNumber: 374,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$dataService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/dataService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$LoadingScreen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/LoadingScreen.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$ParticleBackground$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/ParticleBackground.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function Home() {
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [scrollY, setScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchData() {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$dataService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLandingData"])();
            setData(result);
        }
        fetchData();
        const handleScroll = ()=>{
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    if (!data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$LoadingScreen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        message: "Iniciando sistema"
    }, void 0, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 28,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col min-h-screen relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$ParticleBackground$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative overflow-hidden min-h-screen flex items-center pt-48 pb-20 lg:pt-64 lg:pb-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 relative z-20 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-7xl font-bold mb-8 tracking-tight leading-tight text-white drop-shadow-lg",
                            children: data.hero.title
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "max-w-2xl mx-auto text-xl text-gray-200 mb-12 leading-relaxed drop-shadow-md",
                            children: data.hero.subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/about_us",
                                    className: "px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all transform hover:scale-105 shadow-xl",
                                    children: "¿Quiénes Somos?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/areas_of_interest",
                                    className: "px-8 py-4 rounded-full border border-white/30 bg-white/5 hover:bg-white/10 transition-all text-white font-medium backdrop-blur-sm",
                                    children: "Áreas de Interés"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_f489672b._.js.map