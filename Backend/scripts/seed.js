import { AppDataSource } from '../src/infrastructure/persistence/data-source.js';
import { InvestigationSchema } from '../src/infrastructure/persistence/schemas/InvestigationSchema.js';

const investigations = [
    {
        title: "Optimización de redes ópticas mediante el uso de OSA MS9740B",
        status: "En Curso",
        researcher: "Dr. Roberto Leyva",
        tags: ["Optomecatrónica", "Redes"],
        abstract: "El análisis de redes ópticas mediante algoritmos cuánticos representa un cambio de paradigma...",
        arxiv: "2304.12345",
        progress: 75,
        coResearchers: ["Dra. Elena Torres", "Ing. Carlos Ruiz"],
        mentors: ["Dr. Roberto Leyva"],
        difficulty: "Intermedio",
        publicada: true
    },
    {
        title: "Criptografía Cuántica: Protocolos de Distribución de Claves (QKD)",
        status: "En Curso",
        researcher: "Dra. Elena Torres",
        tags: ["Cuántica", "Ciberseguridad"],
        abstract: "Este proyecto explora la implementación práctica de protocolos de distribución de claves cuánticas...",
        arxiv: "2301.98765",
        progress: 40,
        coResearchers: ["Dr. Mario López"],
        mentors: ["Dr. Roberto Leyva"],
        difficulty: "Avanzado",
        publicada: false
    },
    {
        title: "Sensores de Fibra Óptica para Monitoreo Estructural en Tiempo Real",
        status: "Finalizado",
        researcher: "M.C. Juan Pérez",
        tags: ["Sensores", "Infraestructura"],
        abstract: "Desarrollo de una matriz de sensores de fibra óptica basada en redes de Bragg (FBG)...",
        arxiv: "2212.55555",
        progress: 100,
        coResearchers: ["Dr. Luis Sánchez"],
        mentors: ["Dr. Roberto Leyva"],
        difficulty: "Principiante",
        publicada: true
    }
];

const seed = async () => {
    try {
        await AppDataSource.initialize();
        const repository = AppDataSource.getRepository(InvestigationSchema);

        for (const data of investigations) {
            const exists = await repository.findOneBy({ title: data.title });
            if (!exists) {
                const investigation = repository.create(data);
                await repository.save(investigation);
                console.log(`Seeded: ${data.title}`);
            }
        }

        console.log("Seeding complete.");
        process.exit(0);
    } catch (error) {
        console.error("Error seeding:", error);
        process.exit(1);
    }
};

seed();
