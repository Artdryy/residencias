import companiesRoutes from "./api/companies.route.js";
import keywordsRoutes from "./api/keywords.route.js";
import modulesRoutes from "./api/modules.route.js";
import reportsRoutes from "./api/reports.route.js";
import rolesRoutes from "./api/roles.route.js";
import semestersRoutes from "./api/semesters.route.js";
import usersRoutes from "./api/users.route.js";

async function router(fastify, opts) {
  fastify.register(companiesRoutes, { prefix: "/companies" });
  fastify.register(keywordsRoutes, { prefix: "/keywords" });
  fastify.register(modulesRoutes, { prefix: "/modules" });
  fastify.register(reportsRoutes, { prefix: "/reports" });
  fastify.register(rolesRoutes, { prefix: "/roles" });
  fastify.register(semestersRoutes, { prefix: "/semesters" });
  fastify.register(usersRoutes, { prefix: "/users" });
}

export default router;
