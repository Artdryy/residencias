// import RolesController from "../../src/controllers/roles.controller.js";
import { RolesController } from "../../src/controllers/index.js"; // Import directo, evitando el index

export default async function rolesRoutes(fastify, opts) {
  //POST /api/roles/create
  fastify.post(
    "/create",
    { preHandler: [fastify.rolesMiddleware.create] },
    RolesController.create
  );

  //GET /api/roles/list
  fastify.get(
    "/list",
    { preHandler: [fastify.rolesMiddleware.getAll] },
    RolesController.getAll
  );

  //PUT /api/roles/update
  fastify.put(
    "/update",
    { preHandler: [fastify.rolesMiddleware.update] },
    RolesController.update
  );

  //DELETE /api/roles/delete
  fastify.delete(
    "/delete/:role_id",
    { preHandler: [fastify.rolesMiddleware.delete] },
    RolesController.delete
  );
}
