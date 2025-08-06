import dotenv from 'dotenv';
import dotenvexpand from 'dotenv-expand';
import joi from 'joi';

const env = dotenv.config();    // Cargar las variables de entorno desde el archivo .env
dotenvexpand.expand(env);       // Expandir las variables de entorno

const envSchema = joi
  .object({
    PORT: joi.number().default(3000), // Puerto por defecto
    DATABASE_HOST: joi.string().required(), // Host de la base de datos
    DATABASE_NAME: joi.string().required(), // Nombre de la base de datos
    DATABASE_USER: joi.string().required(), // Usuario de la base de datos
    DATABASE_PASSWORD: joi.string().allow("").required(), // Contraseña de la base de datos
    DATABASE_PORT: joi.number().default(3306), // Puerto de la base de datos por defecto
    API_KEY: joi.string().optional(), // Clave API opcional
  })
  .unknown();

// Validación del esquema de entorno
const { error, value: envValues } = envSchema.validate(process.env);

// Si hay un error, se imprime y se termina el proceso
if (error) {
  console.error("Error de conexión: ", error.message);
  process.exit(1);
}

// Exportar los valores validados del entorno
export { envValues }; 