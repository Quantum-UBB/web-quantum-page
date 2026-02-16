module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/src/services/dataService.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Este servicio simula una llamada a una API o Base de Datos
// En el futuro, aquí harías: fetch('https://api.tu-backend.com/data')
__turbopack_context__.s([
    "getAboutData",
    ()=>getAboutData,
    "getAreasData",
    ()=>getAreasData,
    "getLandingData",
    ()=>getLandingData,
    "getMissionVisionData",
    ()=>getMissionVisionData
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
}),
"[project]/src/app/areas-de-interes/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AreasOfInterest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$dataService$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/dataService.js [app-rsc] (ecmascript)");
;
;
;
;
async function AreasOfInterest() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$dataService$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAreasData"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col min-h-screen relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[-1]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: "/home.jpg",
                        alt: "Quantum Background",
                        fill: true,
                        className: "object-cover",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/areas-de-interes/page.js",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/80"
                    }, void 0, false, {
                        fileName: "[project]/src/app/areas-de-interes/page.js",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/areas-de-interes/page.js",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative overflow-hidden flex items-center pt-48 pb-10 lg:pt-56 lg:pb-16 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 relative z-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight text-white drop-shadow-lg font-[family-name:var(--font-orbitron)]",
                            children: data.hero.title
                        }, void 0, false, {
                            fileName: "[project]/src/app/areas-de-interes/page.js",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "max-w-3xl mx-auto text-xl text-gray-300 mb-8 leading-relaxed drop-shadow-md",
                            children: data.hero.subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/app/areas-de-interes/page.js",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/areas-de-interes/page.js",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/areas-de-interes/page.js",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-12 relative pb-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                        children: data.areas.map((area)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group relative p-8 rounded-2xl glass-panel bg-white/5 border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300 hover:-translate-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${area.color}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/areas-de-interes/page.js",
                                        lineNumber: 45,
                                        columnNumber: 18
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-16 h-16 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl text-white",
                                            children: area.icon === 'Brain' ? '🧠' : area.icon === 'Atom' ? '⚛️' : area.icon === 'Shield' ? '🛡️' : area.icon === 'Link' ? '🔗' : area.icon === 'Cloud' ? '☁️' : '✏️'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/areas-de-interes/page.js",
                                            lineNumber: 50,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/areas-de-interes/page.js",
                                        lineNumber: 48,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold text-white mb-3 font-[family-name:var(--font-orbitron)] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all",
                                        children: area.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/areas-de-interes/page.js",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-300 leading-relaxed mb-6",
                                        children: area.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/areas-de-interes/page.js",
                                        lineNumber: 62,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#",
                                        className: "inline-flex items-center text-sm font-bold text-white uppercase tracking-wider hover:underline decoration-[#14E19D] underline-offset-4 decoration-2",
                                        children: [
                                            "Explorar Curso  ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/areas-de-interes/page.js",
                                                lineNumber: 67,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/areas-de-interes/page.js",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, area.id, true, {
                                fileName: "[project]/src/app/areas-de-interes/page.js",
                                lineNumber: 40,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/areas-de-interes/page.js",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/areas-de-interes/page.js",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/areas-de-interes/page.js",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/areas-de-interes/page.js",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/areas-de-interes/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/areas-de-interes/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bd98059f._.js.map