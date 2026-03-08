import { EntitySchema } from "typeorm";

export const NewsSchema = new EntitySchema({
    name: "News",
    tableName: "news",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        title: {
            type: "varchar",
        },
        description: {
            type: "text",
            nullable: true
        },
        tag: {
            type: "varchar",
            nullable: true
        },
        author: {
            type: "varchar",
            nullable: true
        },
        date: {
            type: "varchar",
            nullable: true
        },
        image: {
            type: "text",
            nullable: true
        },
        content: {
            type: "text",
            nullable: true
        },
        secondaryImages: {
            type: "simple-array",
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
