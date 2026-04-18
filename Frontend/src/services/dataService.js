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
            title: "Explora Nuestros Universos",
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
