import { AppDataSource } from '../src/infrastructure/persistence/data-source.js';
import { UserSchema } from '../src/infrastructure/persistence/schemas/UserSchema.js';
import { NewsSchema } from '../src/infrastructure/persistence/schemas/NewsSchema.js';
import { Roles } from '../src/domain/entities/User.js';
import bcrypt from 'bcryptjs';

const seedData = async () => {
    try {
        await AppDataSource.initialize();
        const userRepository = AppDataSource.getRepository(UserSchema);
        const newsRepository = AppDataSource.getRepository(NewsSchema);

        console.log("--- Seeding Users ---");
        // 1. Create Member
        const memberEmail = "miembro@quantum.com";
        const memberExists = await userRepository.findOneBy({ email: memberEmail });
        if (!memberExists) {
            const hashedPw = await bcrypt.hash("miembro123", 10);
            const member = userRepository.create({
                username: "Juan Miembro",
                email: memberEmail,
                password: hashedPw,
                role: Roles.MEMBER
            });
            await userRepository.save(member);
            console.log("Member user created: miembro@quantum.com / miembro123");
        }

        // 2. Create Moderator
        const modEmail = "moderador@quantum.com";
        const modExists = await userRepository.findOneBy({ email: modEmail });
        if (!modExists) {
            const hashedPw = await bcrypt.hash("mod123", 10);
            const moderator = userRepository.create({
                username: "Ana Moderadora",
                email: modEmail,
                password: hashedPw,
                role: Roles.MODERATOR
            });
            await userRepository.save(moderator);
            console.log("Moderator user created: moderador@quantum.com / mod123");
        }

        console.log("\n--- Seeding News ---");
        const newsData = [
            {
                title: "Avances en Computación Cuántica 2024",
                description: "Nuevos hitos en la estabilidad de qubits permiten soñar con ordenadores comerciales en esta década.",
                tag: "Computación",
                author: "Dr. Quantum",
                date: "10 Mar 2026",
                image: "/news-seeds/news1.png",
                content: "La computación cuántica ha dado un salto cualitativo este año con la reducción del ruido térmico en sistemas de 128 qubits...",
                status: "published",
                isLocal: false
            },
            {
                title: "Sensores Ópticos de Alta Precisión",
                description: "Investigadores locales desarrollan una red de sensores basados en fibra óptica para monitoreo estructural.",
                tag: "Óptica",
                author: "Ing. Fibra",
                date: "08 Mar 2026",
                image: "/news-seeds/news2.png",
                content: "El proyecto busca implementar una red de monitoreo en tiempo real utilizando la infraestructura de telecomunicaciones existente...",
                status: "published",
                isLocal: true
            },
            {
                title: "Evento: Workshop de Fotónica Cuántica",
                description: "Únete a nosotros en el próximo taller práctico sobre manipulación de fotones a nivel de pregrado.",
                tag: "Evento",
                author: "Comunidad Quantum",
                date: "15 Mar 2026",
                image: "/news-seeds/news3.png",
                content: "Este workshop está diseñado para estudiantes que deseen dar sus primeros pasos en laboratorios de óptica cuántica...",
                status: "published",
                isLocal: true
            }
        ];

        for (const item of newsData) {
            const newsExists = await newsRepository.findOneBy({ title: item.title });
            if (!newsExists) {
                const news = newsRepository.create(item);
                await newsRepository.save(news);
                console.log(`News created: ${item.title}`);
            }
        }

        console.log("\nSeeding completed successfully!");
        process.exit(0);
    } catch (error) {
        console.error("Error during seeding:", error);
        process.exit(1);
    }
};

seedData();
