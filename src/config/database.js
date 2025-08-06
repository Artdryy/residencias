import { Sequelize, QueryTypes } from "sequelize";
import { envConfig } from "./env.js";

// Configuración de la conexión a la base de datos utilizando Sequelize
const sequelize = new Sequelize(
    envConfig.database.name, // Nombre de la base de datos
    envConfig.database.user, // Usuario de la base de datos
    envConfig.database.password, // Contraseña de la base de datos
    {
        host: envConfig.database.host, // Host de la base de datos
        port: envConfig.database.port, // Puerto de la base de datos
        dialect: "mariadb", // Dialecto de la base de datos
        logging: false, // Desactivar el logging de consultas
        pool: {
            max: 10, // Máximo de conexiones en el pool
            min: 1, // Mínimo de conexiones en el pool
            acquire: 30000, // Tiempo máximo para adquirir una conexión
            idle: 10000, // Tiempo máximo de inactividad antes de liberar una conexión
        },
    }
);

// Función para autenticar la conexión a la base de datos
// y manejar errores de conexión
const authenticate = async () => {

    // Intentar autenticar la conexión a la base de datos
    try {
        await sequelize.authenticate();                 // Autenticación de la conexión
        console.log("Conexión establecida con éxito."); // Mensaje de éxito
    } catch (error) {
        // Imprimir el error en la consola y finalizar el proceso
        console.error("No se pudo conectar a la base de datos:", error.message);
        process.exit(1); // Finalizar el proceso con error
    }
};

// Función para ejecutar consultas SQL
// y manejar errores de consulta
const executeQuery = async (query, replacements = []) => {

    try {
        return await sequelize.query(query, {
            replacements,
            type: QueryTypes.SELECT,
        });
    } catch (error) {
        throw new Error(`Error en la consulta a la BD: ${error.message}`);
    }
};

export { sequelize, authenticate, executeQuery };
