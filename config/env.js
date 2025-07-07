import { envValues } from './envSchema.js'

const envConfig = {
    database: {
        name: envValues.DATABASE_NAME,
        user: envValues.DATABASE_USER,
        password: envValues.DATABASE_PASSWORD,
        host: envValues.DATABASE_HOST,
        port: envValues.DATABASE_PORT,
    },
    global: {
        port: envValues.PORT,
    }
}

export { envConfig }