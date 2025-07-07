import ModulesController from '../controllers/modules.controller.js';

export default async function modulesRoutes(fastify, opts) {
  // GET  /api/modules/list
  fastify.get(
    '/list',
    { preHandler: [fastify.modulesMiddleware.getModules] },
    ModulesController.getModules
  );

  // GET  /api/modules/by-role/:role_id
  fastify.get(
    '/list-byrole/:role_id',
    { preHandler: [fastify.modulesMiddleware.getModulesByRole] },
    ModulesController.getModulesByRole
  );

  // POST /api/modules/assign
  fastify.post(
    '/assign',
    { preHandler: [fastify.modulesMiddleware.assignModuleToRole] },
    ModulesController.assignModuleToRole
  );
}