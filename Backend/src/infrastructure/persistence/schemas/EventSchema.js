import { EntitySchema } from "typeorm";

/**
 * Esquema de base de datos para la entidad de Eventos.
 */
export const EventSchema = new EntitySchema({
    name: "Event",
    tableName: "events",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        title: {
            type: "varchar",
        },
        host: {
            type: "varchar",
            nullable: true
        },
        type: {
            type: "varchar",
            nullable: true
        },
        date: {
            type: "varchar",
            nullable: true
        },
        endDate: {
            type: "varchar",
            nullable: true
        },
        location: {
            type: "varchar",
            nullable: true
        },
        locationUrl: {
            type: "varchar",
            nullable: true
        },
        mode: {
            type: "varchar",
            nullable: true
        },
        image: {
            type: "text",
            nullable: true
        },
        hostImage: {
            type: "text",
            nullable: true
        },
        abstract: {
            type: "text",
            nullable: true
        },
        fullDescription: {
            type: "text",
            nullable: true
        },
        status: {
            type: "varchar",
            default: "draft"
        },
        isLocal: {
            type: "boolean",
            default: false
        },
        createdAt: {
            type: "timestamp",
            createDate: true,
        },
        updatedAt: {
            type: "timestamp",
            updateDate: true,
        },
    },
});
