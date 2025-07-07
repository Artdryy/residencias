import UsersController from '../controllers/users.controller.js';

export default async function usersRoutes(fastify, opts) {
  // POST   /api/users/create
  fastify.post(
    '/create',
    { preHandler: [fastify.usersMiddleware.createUser] },
    UsersController.createUser
  );

  // GET    /api/users/list
  fastify.get(
    '/list',
    { preHandler: [fastify.usersMiddleware.getUsers] },
    UsersController.getUsers
  );

  // PUT    /api/users/update
  fastify.put(
    '/update',
    { preHandler: [fastify.usersMiddleware.updateUser] },
    UsersController.updateUser
  );

  // DELETE /api/users/delete/:user_id
  fastify.delete(
    '/delete/:user_id',
    { preHandler: [fastify.usersMiddleware.deleteUser] },
    UsersController.deleteUser
  );
}
