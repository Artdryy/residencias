import dotenv from 'dotenv'
import dotenvexpand from 'dotenv-expand'
import Joi from 'joi'

const env = dotenv.config()
dotenvexpand.expand(env)

const envSchema = Joi.object({
    PORT: Joi.number().default(3000),
    DATABASE_HOST: Joi.string().required(),
    DATABASE_NAME: Joi.string().required(),
    DATABASE_USER: Joi.string().required(),
    DATABASE_PASSWORD: Joi.string().required(),
    DATABASE_PORT: Joi.number().default(3306),
    API_KEY: Joi.string().optional(),
}).unknown()

const { error, value: envValues} = envSchema.validate(process.env)

if (error) {
    console.error('Error de conexión: ', error.message)
    process.exit(1)
}

export {envValues}  