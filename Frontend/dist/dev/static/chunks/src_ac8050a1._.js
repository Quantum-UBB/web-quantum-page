(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/services/dataService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/common/LoadingScreen.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Componente de pantalla de carga animada compartida.
 * Muestra un spinner con el logo de Quantum Student y un mensaje opcional.
 *
 * @param {string} message - Texto opcional a mostrar bajo el spinner.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function LoadingScreen(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "4b11c191fdeb01f5fdb92ef748ea5bc8071607e50099bde343e5bf089a117cff") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4b11c191fdeb01f5fdb92ef748ea5bc8071607e50099bde343e5bf089a117cff";
    }
    const { message: t1 } = t0;
    const message = t1 === undefined ? "Cargando..." : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute w-28 h-28 rounded-full border-2 border-[#14E19D]/10 animate-ping",
            style: {
                animationDuration: "2s"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/common/LoadingScreen.jsx",
            lineNumber: 24,
            columnNumber: 10
        }, this);
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute w-20 h-20 rounded-full border border-[#14E19D]/20 animate-ping",
            style: {
                animationDuration: "1.5s",
                animationDelay: "0.25s"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/common/LoadingScreen.jsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            animationDuration: "1.2s"
        };
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    let t5;
    let t6;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "40",
            cy: "40",
            r: "34",
            stroke: "#1e293b",
            strokeWidth: "6"
        }, void 0, false, {
            fileName: "[project]/src/components/common/LoadingScreen.jsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M40 6 A34 34 0 0 1 74 40",
            stroke: "url(#spinGradient)",
            strokeWidth: "6",
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/common/LoadingScreen.jsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[4] = t5;
        $[5] = t6;
    } else {
        t5 = $[4];
        t6 = $[5];
    }
    let t7;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-20 h-20 animate-spin",
            style: t4,
            viewBox: "0 0 80 80",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                t5,
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "spinGradient",
                        x1: "40",
                        y1: "6",
                        x2: "74",
                        y2: "40",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: "#14E19D"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/LoadingScreen.jsx",
                                lineNumber: 63,
                                columnNumber: 238
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#0ea5e9"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/LoadingScreen.jsx",
                                lineNumber: 63,
                                columnNumber: 266
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/common/LoadingScreen.jsx",
                        lineNumber: 63,
                        columnNumber: 142
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/common/LoadingScreen.jsx",
                    lineNumber: 63,
                    columnNumber: 136
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/common/LoadingScreen.jsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[6] = t7;
    } else {
        t7 = $[6];
    }
    let t8;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex items-center justify-center mb-8",
            children: [
                t2,
                t3,
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute text-2xl font-bold text-[#14E19D] font-orbitron",
                    style: {
                        textShadow: "0 0 20px rgba(20,225,157,0.5)"
                    },
                    children: "Q"
                }, void 0, false, {
                    fileName: "[project]/src/components/common/LoadingScreen.jsx",
                    lineNumber: 70,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/common/LoadingScreen.jsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[7] = t8;
    } else {
        t8 = $[7];
    }
    let t9;
    if ($[8] !== message) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-slate-400 text-xs uppercase tracking-[0.3em] font-orbitron animate-pulse",
            children: message
        }, void 0, false, {
            fileName: "[project]/src/components/common/LoadingScreen.jsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[8] = message;
        $[9] = t9;
    } else {
        t9 = $[9];
    }
    let t10;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 w-32 h-px bg-gradient-to-r from-transparent via-[#14E19D]/50 to-transparent"
        }, void 0, false, {
            fileName: "[project]/src/components/common/LoadingScreen.jsx",
            lineNumber: 87,
            columnNumber: 11
        }, this);
        $[10] = t10;
    } else {
        t10 = $[10];
    }
    let t11;
    if ($[11] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0b0f19]",
            children: [
                t8,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/common/LoadingScreen.jsx",
            lineNumber: 94,
            columnNumber: 11
        }, this);
        $[11] = t9;
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    return t11;
}
_c = LoadingScreen;
var _c;
__turbopack_context__.k.register(_c, "LoadingScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/common/ParticleBackground.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ParticleBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ParticleBackground() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nodesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const linksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const photonsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const nebulaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: null,
        y: null
    });
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dimensionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        width: 0,
        height: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticleBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            const container = containerRef.current;
            if (!canvas || !container) return;
            const ctx = canvas.getContext('2d');
            const dpr = ("TURBOPACK compile-time truthy", 1) ? Math.min(window.devicePixelRatio || 1, 2) : "TURBOPACK unreachable";
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
            const resize = {
                "ParticleBackground.useEffect.resize": ()=>{
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
                }
            }["ParticleBackground.useEffect.resize"];
            const initNetwork = {
                "ParticleBackground.useEffect.initNetwork": (width_0, height_0)=>{
                    const clusters = [];
                    for(let r = 0; r < CLUSTER_ROWS; r++){
                        for(let c = 0; c < CLUSTER_COLS; c++){
                            const baseX = (c + 0.5) * width_0 / CLUSTER_COLS;
                            const baseY = (r + 0.5) * height_0 / CLUSTER_ROWS;
                            const jitterX = (Math.random() - 0.5) * (width_0 / CLUSTER_COLS) * 0.45;
                            const jitterY = (Math.random() - 0.5) * (height_0 / CLUSTER_ROWS) * 0.45;
                            clusters.push({
                                x: baseX + jitterX,
                                y: baseY + jitterY
                            });
                        }
                    }
                    const nodes = [];
                    let id = 0;
                    for(let c_0 = 0; c_0 < clusters.length; c_0++){
                        const cluster = clusters[c_0];
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
                                clusterIndex: c_0
                            });
                        }
                    }
                    nodesRef.current = nodes;
                    linksRef.current = buildLinks(nodes);
                    const links = linksRef.current;
                    const photons = [];
                    for(let i_0 = 0; i_0 < PHOTON_COUNT; i_0++){
                        photons.push({
                            linkIndex: Math.floor(Math.random() * links.length),
                            progress: Math.random(),
                            speed: PHOTON_SPEED * (0.7 + Math.random() * 0.6)
                        });
                    }
                    photonsRef.current = photons;
                    const nebula = [];
                    for(let i_1 = 0; i_1 < NEBULA_COUNT; i_1++){
                        nebula.push({
                            x: Math.random() * width_0,
                            y: Math.random() * height_0,
                            vx: (Math.random() - 0.5) * NEBULA_SPEED,
                            vy: (Math.random() - 0.5) * NEBULA_SPEED,
                            radius: Math.random() * 1.2 + 0.4,
                            alpha: Math.random() * 0.06 + 0.02
                        });
                    }
                    nebulaRef.current = nebula;
                }
            }["ParticleBackground.useEffect.initNetwork"];
            const buildLinks = {
                "ParticleBackground.useEffect.buildLinks": (nodes_0)=>{
                    const links_0 = [];
                    // Each node connects to its NEIGHBORS closest nodes within MAX_LINK_DISTANCE.
                    for(let i_2 = 0; i_2 < nodes_0.length; i_2++){
                        const distances = [];
                        for(let j = 0; j < nodes_0.length; j++){
                            if (i_2 === j) continue;
                            const dx = nodes_0[i_2].x - nodes_0[j].x;
                            const dy = nodes_0[i_2].y - nodes_0[j].y;
                            const dist = Math.sqrt(dx * dx + dy * dy);
                            if (dist < MAX_LINK_DISTANCE) {
                                distances.push({
                                    index: j,
                                    dist
                                });
                            }
                        }
                        distances.sort({
                            "ParticleBackground.useEffect.buildLinks": (a, b)=>a.dist - b.dist
                        }["ParticleBackground.useEffect.buildLinks"]);
                        for(let k = 0; k < NEIGHBORS && k < distances.length; k++){
                            const j_0 = distances[k].index;
                            const exists = links_0.some({
                                "ParticleBackground.useEffect.buildLinks.exists": (l)=>l.source === i_2 && l.target === j_0 || l.source === j_0 && l.target === i_2
                            }["ParticleBackground.useEffect.buildLinks.exists"]);
                            if (!exists) {
                                links_0.push({
                                    source: i_2,
                                    target: j_0,
                                    dist: distances[k].dist
                                });
                            }
                        }
                    }
                    // Ensure the entire graph is one connected component.
                    // If there are isolated sub-graphs, bridge them with the shortest possible links.
                    const adj = Array.from({
                        length: nodes_0.length
                    }, {
                        "ParticleBackground.useEffect.buildLinks.adj": ()=>[]
                    }["ParticleBackground.useEffect.buildLinks.adj"]);
                    for (const l_0 of links_0){
                        adj[l_0.source].push(l_0.target);
                        adj[l_0.target].push(l_0.source);
                    }
                    const findComponents = {
                        "ParticleBackground.useEffect.buildLinks.findComponents": ()=>{
                            const visited = new Array(nodes_0.length).fill(false);
                            const components = [];
                            for(let i_3 = 0; i_3 < nodes_0.length; i_3++){
                                if (!visited[i_3]) {
                                    const comp = [];
                                    const stack = [
                                        i_3
                                    ];
                                    visited[i_3] = true;
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
                        }
                    }["ParticleBackground.useEffect.buildLinks.findComponents"];
                    let components_0 = findComponents();
                    while(components_0.length > 1){
                        let minDist = Infinity;
                        let bestPair = null;
                        for(let i_4 = 0; i_4 < components_0.length; i_4++){
                            for(let j_1 = i_4 + 1; j_1 < components_0.length; j_1++){
                                for (const u_0 of components_0[i_4]){
                                    for (const v_0 of components_0[j_1]){
                                        const dx_0 = nodes_0[u_0].x - nodes_0[v_0].x;
                                        const dy_0 = nodes_0[u_0].y - nodes_0[v_0].y;
                                        const dist_0 = Math.sqrt(dx_0 * dx_0 + dy_0 * dy_0);
                                        if (dist_0 < minDist) {
                                            minDist = dist_0;
                                            bestPair = [
                                                u_0,
                                                v_0
                                            ];
                                        }
                                    }
                                }
                            }
                        }
                        if (bestPair) {
                            const [u_1, v_1] = bestPair;
                            links_0.push({
                                source: u_1,
                                target: v_1,
                                dist: minDist
                            });
                            adj[u_1].push(v_1);
                            adj[v_1].push(u_1);
                        }
                        components_0 = findComponents();
                    }
                    return links_0;
                }
            }["ParticleBackground.useEffect.buildLinks"];
            const handleMouseMove = {
                "ParticleBackground.useEffect.handleMouseMove": (e)=>{
                    const rect = container.getBoundingClientRect();
                    mouseRef.current = {
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top
                    };
                }
            }["ParticleBackground.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "ParticleBackground.useEffect.handleMouseLeave": ()=>{
                    mouseRef.current = {
                        x: null,
                        y: null
                    };
                }
            }["ParticleBackground.useEffect.handleMouseLeave"];
            const handleWindowMouseOut = {
                "ParticleBackground.useEffect.handleWindowMouseOut": (e_0)=>{
                    if (!e_0.relatedTarget) {
                        mouseRef.current = {
                            x: null,
                            y: null
                        };
                    }
                }
            }["ParticleBackground.useEffect.handleWindowMouseOut"];
            const draw = {
                "ParticleBackground.useEffect.draw": ()=>{
                    const { width: width_1, height: height_1 } = dimensionsRef.current;
                    ctx.clearRect(0, 0, width_1, height_1);
                    const nodes_1 = nodesRef.current;
                    const links_1 = linksRef.current;
                    const photons_0 = photonsRef.current;
                    const nebula_0 = nebulaRef.current;
                    const mouse = mouseRef.current;
                    // Nebula dust
                    for (const p of nebula_0){
                        p.x += p.vx;
                        p.y += p.vy;
                        if (p.x < 0) p.x = width_1;
                        if (p.x > width_1) p.x = 0;
                        if (p.y < 0) p.y = height_1;
                        if (p.y > height_1) p.y = 0;
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(20, 225, 157, ${p.alpha})`;
                        ctx.fill();
                    }
                    // Move nodes
                    for (const node of nodes_1){
                        // Gentle mouse repulsion
                        if (mouse.x !== null && mouse.y !== null) {
                            const dx_1 = node.x - mouse.x;
                            const dy_1 = node.y - mouse.y;
                            const dist_1 = Math.sqrt(dx_1 * dx_1 + dy_1 * dy_1);
                            if (dist_1 < MOUSE_RADIUS && dist_1 > 0) {
                                const force = (MOUSE_RADIUS - dist_1) / MOUSE_RADIUS;
                                node.vx += dx_1 / dist_1 * force * REPULSION_FORCE;
                                node.vy += dy_1 / dist_1 * force * REPULSION_FORCE;
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
                        if (node.x < 0 || node.x > width_1) node.vx *= -1;
                        if (node.y < 0 || node.y > height_1) node.vy *= -1;
                        node.x = Math.max(0, Math.min(width_1, node.x));
                        node.y = Math.max(0, Math.min(height_1, node.y));
                    }
                    // Draw links (same pairs always; lines stretch/move with the nodes)
                    for (const link of links_1){
                        const a_0 = nodes_1[link.source];
                        const b_0 = nodes_1[link.target];
                        const dx_2 = a_0.x - b_0.x;
                        const dy_2 = a_0.y - b_0.y;
                        const dist_2 = Math.sqrt(dx_2 * dx_2 + dy_2 * dy_2);
                        const opacity = Math.max(0, (1 - Math.min(dist_2, MAX_LINK_DISTANCE * 1.5) / (MAX_LINK_DISTANCE * 1.5)) * LINE_OPACITY);
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(20, 225, 157, ${opacity})`;
                        ctx.lineWidth = 0.8;
                        ctx.moveTo(a_0.x, a_0.y);
                        ctx.lineTo(b_0.x, b_0.y);
                        ctx.stroke();
                    }
                    // Draw photons
                    for (const photon of photons_0){
                        const link_0 = links_1[photon.linkIndex];
                        if (!link_0) continue;
                        const a_1 = nodes_1[link_0.source];
                        const b_1 = nodes_1[link_0.target];
                        photon.progress += photon.speed;
                        if (photon.progress > 1) {
                            photon.progress = 0;
                            photon.linkIndex = Math.floor(Math.random() * links_1.length);
                        }
                        const t = photon.progress;
                        const px = a_1.x + (b_1.x - a_1.x) * t;
                        const py = a_1.y + (b_1.y - a_1.y) * t;
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
                    for (const node_0 of nodes_1){
                        const pulse = 0.6 + 0.4 * Math.sin(time + node_0.pulseOffset);
                        ctx.beginPath();
                        ctx.arc(node_0.x, node_0.y, node_0.radius * (2.4 + pulse), 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(20, 225, 157, ${0.12 * pulse})`;
                        ctx.fill();
                        ctx.beginPath();
                        ctx.arc(node_0.x, node_0.y, node_0.radius, 0, Math.PI * 2);
                        ctx.fillStyle = 'rgba(20, 225, 157, 0.95)';
                        ctx.fill();
                    }
                    rafRef.current = requestAnimationFrame(draw);
                }
            }["ParticleBackground.useEffect.draw"];
            resize();
            draw();
            window.addEventListener('resize', resize);
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseout', handleWindowMouseOut);
            return ({
                "ParticleBackground.useEffect": ()=>{
                    if (rafRef.current) cancelAnimationFrame(rafRef.current);
                    window.removeEventListener('resize', resize);
                    window.removeEventListener('mousemove', handleMouseMove);
                    window.removeEventListener('mouseout', handleWindowMouseOut);
                }
            })["ParticleBackground.useEffect"];
        }
    }["ParticleBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    backgroundImage: 'radial-gradient(circle, rgba(20, 225, 157, 0.25) 1.5px, transparent 1.5px)',
                    backgroundSize: '34px 34px'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/common/ParticleBackground.jsx",
                lineNumber: 377,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "absolute inset-0 w-full h-full"
            }, void 0, false, {
                fileName: "[project]/src/components/common/ParticleBackground.jsx",
                lineNumber: 381,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/60"
            }, void 0, false, {
                fileName: "[project]/src/components/common/ParticleBackground.jsx",
                lineNumber: 382,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/ParticleBackground.jsx",
        lineNumber: 368,
        columnNumber: 10
    }, this);
}
_s(ParticleBackground, "Gzcir5bHwDkZO1rp2e/DGPM2V2M=");
_c = ParticleBackground;
var _c;
__turbopack_context__.k.register(_c, "ParticleBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$dataService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/dataService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$LoadingScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/LoadingScreen.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$ParticleBackground$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/ParticleBackground.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "bde72b6b46d5c56f3d8e2ee3267d56100ab0fef8814a23a992e11b7675dc7af7") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bde72b6b46d5c56f3d8e2ee3267d56100ab0fef8814a23a992e11b7675dc7af7";
    }
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [, setScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Home[useEffect()]": ()=>{
                const fetchData = async function fetchData() {
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$dataService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLandingData"])();
                    setData(result);
                };
                fetchData();
                const handleScroll = {
                    "Home[useEffect() > handleScroll]": ()=>{
                        setScrollY(window.scrollY);
                    }
                }["Home[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll, {
                    passive: true
                });
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["Home[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    if (!data) {
        let t2;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$LoadingScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                message: "Iniciando sistema"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 52,
                columnNumber: 12
            }, this);
            $[3] = t2;
        } else {
            t2 = $[3];
        }
        return t2;
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$ParticleBackground$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== data.hero.title) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-4xl md:text-7xl font-bold mb-8 tracking-tight leading-tight text-white drop-shadow-lg",
            children: data.hero.title
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[5] = data.hero.title;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== data.hero.subtitle) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "max-w-2xl mx-auto text-xl text-gray-200 mb-12 leading-relaxed drop-shadow-md",
            children: data.hero.subtitle
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[7] = data.hero.subtitle;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/about_us",
                    className: "px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all transform hover:scale-105 shadow-xl",
                    children: "¿Quiénes Somos?"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 84,
                    columnNumber: 87
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/areas_of_interest",
                    className: "px-8 py-4 rounded-full border border-white/30 bg-white/5 hover:bg-white/10 transition-all text-white font-medium backdrop-blur-sm",
                    children: "Áreas de Interés"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 84,
                    columnNumber: 266
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t3 || $[11] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col min-h-screen relative",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "relative overflow-hidden min-h-screen flex items-center pt-48 pb-20 lg:pt-64 lg:pb-32",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container mx-auto px-4 relative z-20 text-center",
                        children: [
                            t3,
                            t4,
                            t5
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 91,
                        columnNumber: 174
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 91,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[10] = t3;
        $[11] = t4;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    return t6;
}
_s(Home, "kkel8io01nPeIO3HdCdPB/Frz58=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_ac8050a1._.js.map