import { EntitySchema } from "typeorm";

export const UserSchema = new EntitySchema({
    name: "User",
    tableName: "users",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        username: {
            type: "varchar",
            unique: true,
        },
        email: {
            type: "varchar",
            unique: true,
        },
        password: {
            type: "varchar",
        },
        role: {
            type: "varchar",
            default: "Miembro Activo",
        },
        createdAt: {
            type: "timestamp",
            createDate: true,
        },
    },
});
