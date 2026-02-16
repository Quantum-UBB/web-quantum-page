import { AppDataSource } from '../src/infrastructure/persistence/data-source.js';
import { UserSchema } from '../src/infrastructure/persistence/schemas/UserSchema.js';
import { Roles } from '../src/domain/entities/User.js';
import bcrypt from 'bcryptjs';

const createAdmin = async () => {
    try {
        await AppDataSource.initialize();
        const userRepository = AppDataSource.getRepository(UserSchema);

        const adminEmail = "admin@quantum.com";
        const adminExists = await userRepository.findOneBy({ email: adminEmail });

        if (!adminExists) {
            const hashedPassword = await bcrypt.hash("admin123", 10);
            const admin = userRepository.create({
                username: "admin_quantum",
                email: adminEmail,
                password: hashedPassword,
                role: Roles.ADMIN
            });
            await userRepository.save(admin);
            console.log("Admin user created: admin@quantum.com / admin123");
        } else {
            console.log("Admin user already exists.");
        }

        process.exit(0);
    } catch (error) {
        console.error("Error creating admin:", error);
        process.exit(1);
    }
};

createAdmin();
