# Quantum Web - Frontend

Esta es la aplicación cliente del proyecto Quantum, construida con **Next.js** y **React**. Proporciona una interfaz moderna y dinámica para la visualización de datos científicos.

## Características

- **Visualización de Investigaciones**: Repositorio interactivo con filtros avanzados.
- **Gestión de Perfil**: Panel de control para que investigadores gestionen sus propios estudios.
- **Noticias y Eventos**: Sección dedicada a la comunicación del grupo de investigación.
- **Diseño Premium**: Interfaz oscura con acentos esmeralda, optimizada para legibilidad.

## Tecnologías

- **Next.js 15**: Framework de React con soporte para Server Components.
- **Tailwind CSS**: Estilizado mediante utilidades CSS modernas.
- **Context API**: Gestión de estado global para la autenticación.

## Estructura de Carpetas

- `src/app`: Rutas y páginas de la aplicación (App Router).
- `src/components`: Componentes reutilizables divididos por categorías (layout, investigations, news).
- `src/context`: Proveedores de estado global (AuthContext).
- `src/services`: Funciones de comunicación con la API del Backend.
- `public`: Activos estáticos como imágenes y fuentes.

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Documentación de Código

El código utiliza **JSDoc** para documentar componentes y funciones. Puedes leer los comentarios directamente en los archivos `.jsx` y `.js` para entender el flujo de datos y las propiedades requeridas.
