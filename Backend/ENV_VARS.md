# Configuración de Variables de Entorno

El backend requiere un archivo `.env` en la raíz de la carpeta `Backend` para funcionar correctamente.

## Variables Requeridas

| Variable | Descripción | Valor Ejemplo |
|:--- |:--- |:--- |
| `PORT` | Puerto en el que correrá el servidor API. | `5000` |
| `NODE_ENV` | Entorno de ejecución (`development`, `production`). | `development` |
| `DB_HOST` | Dirección del servidor de base de datos. | `localhost` |
| `DB_PORT` | Puerto de la base de datos PostgreSQL. | `5432` |
| `DB_USER` | Usuario de la base de datos. | `quantum_user` |
| `DB_PASSWORD` | Contraseña del usuario de base de datos. | `quantum_pass` |
| `DB_NAME` | Nombre de la base de datos. | `quantum_db` |
| `JWT_SECRET` | Clave secreta para firmar los tokens de sesión. | `una_clave_muy_segura` |

## Notas de Seguridad

> [!WARNING]
> Nunca subas el archivo `.env` al control de versiones (Git). Asegúrate de que esté incluido en el archivo `.gitignore`.
