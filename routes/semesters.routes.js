import SemestersController from '../controllers/semesters.controller.js';

export default async function semesterRoutes(fastify, opts) {
  // GET /api/semesters/list
  fastify.get(
    '/list',
    { preHandler: [fastify.semestersMiddleware.getSemesters] },
    SemestersController.getSemesters
  );
}
