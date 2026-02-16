import app from './app.js';
import { AppDataSource } from '../persistence/data-source.js';

const PORT = process.env.PORT || 5000;

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected successfully with TypeORM (Clean Architecture)");
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => console.log("Database connection error: ", error));
