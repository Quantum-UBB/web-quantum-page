# Quantum Web Page - Gestión de Investigaciones, Noticias y Eventos

Este proyecto es una plataforma para la gestión y visualización de investigaciones científicas, noticias y eventos en el área de [Optomecatrónica/Cuántica]. Permite a los investigadores publicar sus avances, difundir noticias del grupo y gestionar eventos académicos.

## Estructura del Proyecto

El proyecto está dividido en dos partes principales:

- **[Frontend](./Frontend)**: Aplicación web moderna construida con Next.js y React.
- **[Backend](./Backend)**: API robusta construida con Node.js, Express y TypeORM.

## Requisitos Previos

- [Node.js](https://nodejs.org/) (v18 o superior)
- [Docker](https://www.docker.com/) y Docker Compose (opcional, para la base de datos)
- [PostgreSQL](https://www.postgresql.org/) (si no se usa Docker)

## Inicio Rápido

### 1. Base de Datos
Puedes levantar la base de datos PostgreSQL rápidamente usando Docker Compose:
```bash
docker-compose up -d
```

### 2. Backend
1. Entra en la carpeta del backend: `cd Backend`
2. Instala dependencias: `npm install`
3. Configura el archivo `.env` (ver [ENV_VARS.md](./Backend/ENV_VARS.md))
4. Inicia el servidor de desarrollo: `npm run dev`

### 3. Frontend
1. Entra en la carpeta del frontend: `cd Frontend`
2. Instala dependencias: `npm install`
3. Inicia la aplicación: `npm run dev`

## Tecnologías Utilizadas

- **Frontend**: Next.js 15, React, Tailwind CSS.
- **Backend**: Node.js, Express, TypeORM.
- **Base de Datos**: PostgreSQL (Almacenamiento de perfiles, investigaciones, noticias y eventos).
- **Autenticación**: JSON Web Tokens (JWT).

## Documentación

- [Arquitectura del Backend](./Backend/ARCHITECTURE.md)
- [Variables de Entorno](./Backend/ENV_VARS.md)
