import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { UserSchema } from "./schemas/UserSchema.js";
import { InvestigationSchema } from "./schemas/InvestigationSchema.js";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [UserSchema, InvestigationSchema],
    subscribers: [],
    migrations: [],
});
