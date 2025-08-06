import Fastify from "fastify";
import { envConfig } from "../config/env.js";
import { authenticate } from "../config/database.js";

import fastifyCors from "@fastify/cors";
import fastifyHelmet from "@fastify/helmet";
import compress from "@fastify/compress";
import fastifyFormbody from "@fastify/formbody";

import router from "../../routes/index.js";
import {
  handleError,
  handleNotFound,
} from "../middlewares/error.middleware.js";

// import RolesMiddleware from "../middlewares/roles.middleware.js";
import {
  CompaniesMiddleware,
  KeywordsMiddleware,
  ModulesMiddleware,
  PermissionsMiddleware,
  ReportsMiddleware,
  RolesMiddleware,
  SemestersMiddleware,
  UsersMiddleware,
} from "../middlewares/index.js";
// import CompaniesMiddleware from "../middlewares/companies.middleware.js";
// import ModulesMiddleware from "../middlewares/modules.middleware.js";
// import PermissionsMiddleware from "../middlewares/permissions.middleware.js";
// import SemestersMiddleware from "../middlewares/semesters.middleware.js";
// import KeywordsMiddleware from "../middlewares/keywords.middleware.js";
// import UsersMiddleware from "../middlewares/users.middleware.js";
// import ReportsMiddleware from "../middlewares/reports.middleware.js";

const fastify = Fastify({
  logger: true,
  bodyLimit: 50 * 1024 * 1024,
});

// Middlewares de seguridad y parsing
fastify.register(fastifyHelmet, { contentSecurityPolicy: false });
fastify.register(fastifyCors, { origin: true, optionsSuccessStatus: 200 });
fastify.register(fastifyFormbody);
fastify.register(compress);

// Decoraciones para los middleware
fastify.decorate("rolesMiddleware", RolesMiddleware);
fastify.decorate("companiesMiddleware", CompaniesMiddleware);
fastify.decorate("modulesMiddleware", ModulesMiddleware);
fastify.decorate("permissionsMiddleware", PermissionsMiddleware);
fastify.decorate("semestersMiddleware", SemestersMiddleware);
fastify.decorate("keywordsMiddleware", KeywordsMiddleware);
fastify.decorate("usersMiddleware", UsersMiddleware);
fastify.decorate("reportsMiddleware", ReportsMiddleware);

// Método helper para respuestas exitosas
fastify.decorateReply(
  "sendSuccess",
  function ({
    status = true,
    statusCode = 200,
    message = "Operación exitosa",
    data = null,
  }) {
    this.status(statusCode).send({ status, message, data });
  }
);

// Rutas bajo /api
fastify.register(router, { prefix: "/api" });

// Handlers de error y ruta no encontrada
fastify.setErrorHandler(handleError);
fastify.setNotFoundHandler(handleNotFound);

// Ruta raíz de comprobación
fastify.get("/", async (request, reply) => {
  return reply.sendSuccess({
    message: "API is running",
    data: {},
  });
});

const start = async () => {
  try {
    // 1) Verificar conexión a la BD
    await authenticate();
    fastify.log.info("Conexión a la base de datos establecida con éxito.");

    // 2) Arrancar servidor en el puerto validado
    await fastify.listen({ port: envConfig.global.port });
    fastify.log.info(
      `Servidor corriendo en http://localhost:${envConfig.global.port}`
    );
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
