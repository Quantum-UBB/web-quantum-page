// Datos simulados (Mock Data)
const investigations = [
    {
        id: 1,
        title: "Optimización de redes ópticas mediante el uso de OSA MS9740B",
        status: "En Curso",
        researcher: "Dr. Roberto Leyva",
        lastUpdate: "05 de febrero de 2026",
        tags: ["Optomecatrónica", "Redes"],
        abstract: "El análisis de redes ópticas mediante algoritmos cuánticos representa un cambio de paradigma en la transmisión de datos de alta velocidad. Este estudio propone un modelo híbrido que integra corrección de errores cuánticos en infraestructuras de fibra óptica existentes. El objetivo principal es mitigar la decoherencia de la señal en distancias superiores a 100km sin necesidad de repetidores clásicos, utilizando un protocolo de entrelazamiento distribuido. Los resultados teóricos sugieren que es posible reducir la latencia en un 73% manteniendo una fidelidad del estado cuántico superior al 99%.",
        arxiv: "2304.12345",
        theme: "emerald",
        progress: 75,
        coResearchers: ["Dra. Elena Torres", "Ing. Carlos Ruiz"],
        mentors: ["Dr. Roberto Leyva"],
        difficulty: "Intermedio",
        publicada: true
    },
    {
        id: 2,
        title: "Criptografía Cuántica: Protocolos de Distribución de Claves (QKD)",
        status: "En Curso",
        researcher: "Dra. Elena Torres",
        lastUpdate: "04 de febrero de 2026",
        tags: ["Cuántica", "Ciberseguridad"],
        abstract: "Este proyecto explora la implementación práctica de protocolos de distribución de claves cuánticas (QKD) como BB84 y E91 en redes metropolitanas existentes. Se analiza la resistencia de estos protocolos frente a ataques de canal lateral y se propone una arquitectura de red híbrida segura. Los resultados preliminares indican una mejora significativa en la tasa de generación de claves seguras bajo condiciones de ruido atmosférico simulado.",
        arxiv: "2301.98765",
        theme: "emerald",
        progress: 40,
        coResearchers: ["Dr. Mario López"],
        mentors: ["Dr. Roberto Leyva"],
        difficulty: "Avanzado",
        publicada: false
    },
    {
        id: 3,
        title: "Sensores de Fibra Óptica para Monitoreo Estructural en Tiempo Real",
        status: "Finalizado",
        researcher: "M.C. Juan Pérez",
        lastUpdate: "28 de enero de 2026",
        tags: ["Sensores", "Infraestructura"],
        abstract: "Desarrollo de una matriz de sensores de fibra óptica basada en redes de Bragg (FBG) para el monitoreo en tiempo real de la integridad estructural en puentes y edificios. El sistema propuesto permite la detección temprana de micro-grietas y deformaciones térmicas con una resolución espacial de 10cm. Se presenta un caso de estudio exitoso en un viaducto urbano, demostrando la viabilidad económica y técnica de la solución.",
        arxiv: "2212.55555",
        theme: "emerald",
        progress: 100,
        coResearchers: ["Dr. Luis Sánchez"],
        mentors: ["Dr. Roberto Leyva"],
        difficulty: "Principiante",
        publicada: true
    },
    {
        id: 4,
        title: "Integración de IA en Sistemas de Visión por Computadora Industrial",
        status: "En Curso",
        researcher: "Dr. Luis Sánchez",
        lastUpdate: "01 de febrero de 2026",
        tags: ["IA", "Visión Artificial"],
        abstract: "Investigación sobre la aplicación de redes neuronales convolucionales (CNN) optimizadas para hardware de borde en entornos de manufactura. El objetivo es reducir la latencia de inferencia en sistemas de control de calidad visual automatizado. Se evalúan arquitecturas ligeras como MobileNetV3 y EfficientNet-Lite, logrando tasas de acierto superiores al 98% con tiempos de procesamiento inferiores a 20ms.",
        arxiv: "2305.11223",
        theme: "emerald",
        progress: 60,
        coResearchers: ["Dra. Ana García"],
        mentors: ["Dr. Roberto Leyva"],
        difficulty: "Intermedio",
        publicada: false
    },
    {
        id: 5,
        title: "Desarrollo de Materiales 2D para Transistores de Próxima Generación",
        status: "Finalizado",
        researcher: "Dra. Ana García",
        lastUpdate: "20 de enero de 2026",
        tags: ["Nanotecnología", "Materiales"],
        abstract: "Síntesis y caracterización de disulfuro de molibdeno (MoS2) de pocas capas para su uso en transistores de efecto de campo (FET). Se demuestra una movilidad de portadores superior a la del silicio convencional a temperatura ambiente. Este avance abre la puerta a dispositivos electrónicos flexibles y transparentes con un consumo energético ultrabajo.",
        arxiv: "2211.44556",
        theme: "emerald",
        progress: 100,
        coResearchers: ["M.C. Juan Pérez"],
        mentors: ["Dr. Roberto Leyva"],
        difficulty: "Avanzado",
        publicada: true
    },
    {
        id: 6,
        title: "Automatización de Procesos de Manufactura con Robótica Colaborativa",
        status: "En Curso",
        researcher: "Ing. Carlos Ruiz",
        lastUpdate: "03 de febrero de 2026",
        tags: ["Robótica", "Automatización"],
        abstract: "Evaluación de la seguridad y eficiencia en la interacción humano-robot dentro de líneas de ensamblaje mixtas. Se propone un sistema de control adaptativo basado en sensores de fuerza y par, permitiendo a los cobots ajustar su velocidad y trayectoria en presencia de operarios humanos. Los ensayos muestran una reducción del 15% en tiempos de ciclo sin comprometer la seguridad laboral.",
        arxiv: "2306.77889",
        theme: "emerald",
        progress: 30,
        coResearchers: ["Dr. Luis Sánchez"],
        mentors: ["Dr. Roberto Leyva"],
        difficulty: "Intermedio",
        publicada: false
    },
    {
        id: 7,
        title: "Análisis Espectral de Plasmas Inducidos por Láser (LIBS)",
        status: "En Curso",
        researcher: "Dr. Mario López",
        lastUpdate: "15 de enero de 2026",
        tags: ["Física", "Espectroscopía"],
        abstract: "Desarrollo de una técnica LIBS portátil para la identificación rápida de aleaciones metálicas en campo. Se investiga el uso de pulsos láser dobles para mejorar la señal de emisión del plasma y reducir el límite de detección. La aplicación principal se centra en el reciclaje de metales y la minería urbana.",
        advisor: "Dra. Sofia Martínez",
        arxiv: "2307.99001",
        theme: "emerald",
        progress: 55,
        coResearchers: ["Dra. Sofia Martínez"],
        mentors: ["Dr. Roberto Leyva"],
        difficulty: "Principiante",
        publicada: true
    },
    {
        id: 8,
        title: "Computación de Borde (Edge Computing) para IoT Industrial",
        status: "En Curso",
        researcher: "Dra. Sofia Martínez",
        lastUpdate: "30 de enero de 2026",
        tags: ["IoT", "Redes"],
        abstract: "Diseño de una arquitectura de Edge Computing descentralizada para minimizar la latencia en redes IoT industriales masivas. Se propone un algoritmo de descarga de tareas (offloading) dinámico que optimiza el uso de recursos computacionales locales y en la nube. Simulaciones a gran escala validan la escalabilidad del sistema hasta 10,000 nodos.",
        arxiv: "2308.22334",
        theme: "emerald",
        progress: 80,
        coResearchers: ["Dr. Luis Sánchez"],
        mentors: ["Dr. Roberto Leyva"],
        difficulty: "Intermedio",
        publicada: false
    },
    {
        id: 9,
        title: "Sistemas de Control Avanzado para Micro-mecanizado Láser",
        status: "En Curso",
        researcher: "Dr. Roberto Leyva",
        lastUpdate: "08 de febrero de 2026",
        tags: ["Láser", "Control"],
        abstract: "Desarrollo de algoritmos de control predictivo para mejorar la precisión en sistemas de micro-mecanizado asistido por láser de femtosegundo. Se enfoca en la compensación de efectos térmicos y vibraciones mecánicas.",
        arxiv: "2402.12345",
        theme: "emerald",
        progress: 25,
        coResearchers: ["Ing. Carlos Ruiz"],
        mentors: ["Dr. Roberto Leyva"],
        difficulty: "Avanzado",
        publicada: true
    }
];

export const getInvestigations = () => {
    return investigations;
};

export const getMyInvestigations = () => {
    // Simulamos que el usuario logueado es "Dr. Roberto Leyva"
    return investigations.filter(inv => inv.researcher === "Dr. Roberto Leyva");
};

export const getInvestigationById = (id) => {
    return investigations.find(inv => inv.id === parseInt(id));
};

export const getInvestigationTags = () => {
    // Obtener todas las etiquetas únicas
    const allTags = investigations.flatMap(inv => inv.tags);
    // Eliminar duplicados y ordenar
    return [...new Set(allTags)].sort();
};
