import PermissionsController from '../controllers/permissions.controller.js';

export default async function permissionsRoutes(fastify, opts) {
  // GET  /api/permissions/list
  fastify.get(
    '/list',
    { preHandler: [fastify.permissionsMiddleware.getPermissions] },
    PermissionsController.getPermissions
  );

  // POST /api/permissions/assign
  fastify.post(
    '/assign',
    { preHandler: [fastify.permissionsMiddleware.assignPermissions] },
    PermissionsController.assignPermissions
  );

  // GET  /api/permissions/role-module/:role_id/:module_id
  fastify.get(
    '/list-rolemod/:role_id/:module_id',
    { preHandler: [fastify.permissionsMiddleware.getPermissionsRoleModule] },
    PermissionsController.getPermissionsRoleModule
  );

  // GET  /api/permissions/user/:user_id
  fastify.get(
    '/list-permsuser/:user_id',
    {   compress: false,
        preHandler: [fastify.permissionsMiddleware.getPermissionsByUser] },
    PermissionsController.getPermissionsByUser
  );
}
