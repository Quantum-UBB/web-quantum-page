# Arquitectura del Backend

El backend de este proyecto sigue los principios de la **Arquitectura Limpia (Clean Architecture)**. Esto permite una clara separación de responsabilidades y facilita las pruebas y el mantenimiento.

## Estructura de Capas

### 1. Dominio (`src/domain`)
Contiene las **Entidades** y las reglas de negocio base. Esta capa no depende de ningún framework ni librería externa (como la base de datos).
- **Entities**: Definiciones de los objetos del sistema (User, Investigation).

### 2. Aplicación (`src/application`)
Contiene los **Casos de Uso** (Use Cases). Aquí vive la lógica específica de la aplicación.
- **Use Cases**: Funciones que orquestan el flujo de datos desde y hacia las entidades.

### 3. Infraestructura (`src/infrastructure`)
Contiene las implementaciones técnicas que permiten que la aplicación funcione.
- **Persistence**: Repositorios de base de datos usando TypeORM y esquemas.
- **Webserver**: Configuración del servidor de Express.

### 4. Interfaces (`src/interfaces`)
Define cómo el mundo exterior interactúa con la aplicación.
- **HTTP**: Controladores, rutas y middlewares de la API.

## Flujo de Datos
1. Una petición llega a una **Ruta**.
2. La ruta llama a un **Controlador**.
3. El controlador invoca un **Caso de Uso**.
4. El caso de uso utiliza un **Repositorio** para persistir o recuperar datos.
5. El repositorio interactúa con la **Base de Datos** mediante TypeORM.

## Beneficios
- **Independencia de Frameworks**: La lógica de negocio no está atada a Express.
- **Testeabilidad**: Es fácil probar los Casos de Uso sin necesidad de una base de datos real.
- **Mantenibilidad**: Los cambios en la infraestructura (ej. cambiar PostgreSQL por MongoDB) no afectan a la lógica de negocio.
