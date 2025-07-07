import companiesRoutes from "./companies.routes.js"
import rolesRoutes from "./roles.routes.js";
import modulesRoutes from "./modules.routes.js";
import permissionsRoutes from "./permissions.routes.js";
import semesterRoutes from "./semesters.routes.js";
import keywordsRoutes from "./keywords.routes.js";
import usersRoutes from './users.routes.js';
import reportsRoutes from "./reports.routes.js";

async function router(fastify, opts) {
    fastify.register(rolesRoutes, {prefix: '/roles'})
    fastify.register(companiesRoutes, {prefix: '/companies'})
    fastify.register(modulesRoutes, {prefix: '/modules'})
    fastify.register(permissionsRoutes, {prefix: '/permissions'})
    fastify.register(semesterRoutes, {prefix: '/semesters'})
    fastify.register(keywordsRoutes, {prefix: '/keywords'})
    fastify.register(usersRoutes, {prefix: '/users'})
    fastify.register(reportsRoutes, {prefix: '/reports'})

}

export default router
