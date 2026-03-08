import app from './app.js';
import { AppDataSource } from '../persistence/data-source.js';

const PORT = process.env.PORT || 5000;

const connectWithRetry = (retries = 5) => {
    console.log(`Connecting to database... (${retries} retries left)`);
    AppDataSource.initialize()
        .then(() => {
            console.log("Database connected successfully with TypeORM (Clean Architecture)");
            app.listen(PORT, () => {
                console.log(`Server is running on http://localhost:${PORT}`);
            });
        })
        .catch((error) => {
            console.error("Database connection error: ", error.message);
            if (retries > 0) {
                console.log("Retrying in 10 seconds...");
                setTimeout(() => connectWithRetry(retries - 1), 10000);
            } else {
                console.error("Max retries reached. Could not connect to database.");
                process.exit(1);
            }
        });
};

connectWithRetry();
