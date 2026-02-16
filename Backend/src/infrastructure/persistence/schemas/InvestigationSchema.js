import { EntitySchema } from "typeorm";

export const InvestigationSchema = new EntitySchema({
    name: "Investigation",
    tableName: "investigations",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        title: {
            type: "varchar",
        },
        status: {
            type: "varchar",
            default: "En Curso"
        },
        researcher: {
            type: "varchar",
        },
        lastUpdate: {
            type: "timestamp",
            updateDate: true,
        },
        tags: {
            type: "simple-array",
            nullable: true
        },
        abstract: {
            type: "text",
            nullable: true
        },
        arxiv: {
            type: "varchar",
            nullable: true
        },
        progress: {
            type: "int",
            default: 0
        },
        coResearchers: {
            type: "simple-array",
            nullable: true
        },
        mentors: {
            type: "simple-array",
            nullable: true
        },
        difficulty: {
            type: "varchar",
            nullable: true
        },
        publicada: {
            type: "boolean",
            default: false
        },
        createdAt: {
            type: "timestamp",
            createDate: true,
        },
    },
});
