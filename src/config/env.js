import { envValues } from "./envSchema.js";

// Configuración del entorno
const envConfig = {
    database: {
        host: envValues.DATABASE_HOST, // Host de la base de datos
        name: envValues.DATABASE_NAME, // Nombre de la base de datos
        user: envValues.DATABASE_USER, // Usuario de la base de datos
        password: envValues.DATABASE_PASSWORD, // Contraseña de la base de datos
        port: envValues.DATABASE_PORT, // Puerto de la base de datos
    },
    global: {
        port: envValues.PORT, // Puerto de la aplicación
    },
};

// Exportar la configuración del entorno
export { envConfig };