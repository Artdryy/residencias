export function createRoutes(config) {
  const { controller, middleware, entityName, routes = {} } = config;

  return async function (fastify, opts) {
    const mw = fastify[middleware];

    // CRUD estándar
    if (routes.create !== false) {
      fastify.post("/create", { preHandler: [mw.create] }, controller.create);
    }

    if (routes.getAll !== false) {
      fastify.get("/list", { preHandler: [mw.getAll] }, controller.getAll);
    }

    if (routes.update !== false) {
      fastify.put("/update", { preHandler: [mw.update] }, controller.update);
    }

    if (routes.delete !== false) {
      fastify.delete(
        `/delete/:${entityName}_id`,
        { preHandler: [mw.delete] },
        controller.delete
      );
    }

    // Rutas personalizadas
    if (routes.custom) {
      routes.custom(fastify, mw, controller);
    }
  };
}
