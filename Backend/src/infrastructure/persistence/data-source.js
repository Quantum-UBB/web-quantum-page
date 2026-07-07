import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { UserSchema } from "./schemas/UserSchema.js";
import { InvestigationSchema } from "./schemas/InvestigationSchema.js";
import { NewsSchema } from "./schemas/NewsSchema.js";
import { EventSchema } from "./schemas/EventSchema.js";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: process.env.DB_PATH || "/app/data/quantum.sqlite",
    synchronize: true,
    logging: false,
    entities: [UserSchema, InvestigationSchema, NewsSchema, EventSchema],
    subscribers: [],
    migrations: [],
});
