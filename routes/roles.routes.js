import RolesController from '../controllers/roles.controller.js';

export default async function rolesRoutes(fastify, opts) {
    //POST /api/roles/create
    fastify.post(
        '/create', {preHandler: [fastify.rolesMiddleware.createRole]},
        RolesController.createRole
    );

    //GET /api/roles/list
    fastify.get(
        '/list', {preHandler: [fastify.rolesMiddleware.getRoles]},
        RolesController.getRoles
    );
    
    //PUT /api/roles/update
    fastify.put(
        '/update', {preHandler: [fastify.rolesMiddleware.updateRole]},
        RolesController.updateRole
    );

    //DELETE /api/roles/delete
    fastify.delete(
        '/delete/:role_id', {preHandler: [fastify.rolesMiddleware.deleteRole]},
        RolesController.deleteRole
    );
}

