import { Sequelize, QueryTypes } from 'sequelize'
import { envConfig } from './env.js'

const sequelize = new Sequelize(
  envConfig.database.name,
  envConfig.database.user,
  envConfig.database.password,
  {
    host: envConfig.database.host,
    port: envConfig.database.port,
    dialect: 'mariadb',   
    logging: false,
    pool: {
      max: 10,
      min: 1,
      acquire: 30000,
      idle: 10000
    }
  }
)

const authenticate = async () => {
  try {
    await sequelize.authenticate()
    console.log('Conexión establecida con éxito.')
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error.message)
    process.exit(1)
  }
}

const executeQuery = async (query, replacements = []) => {
  try {
    return await sequelize.query(query, {
      replacements,
      type: QueryTypes.SELECT
    })
  } catch (error) {
    throw new Error(`Error en la consulta a la BD: ${error.message}`)
  }
}

export { sequelize, authenticate, executeQuery }
