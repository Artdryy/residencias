import KeywordsController from '../controllers/keywords.controller.js';

export default async function keywordsRoutes(fastify, opts) {
  // POST /api/keywords/create
  fastify.post(
    '/create',
    { preHandler: [fastify.keywordsMiddleware.createKeyword] },
    KeywordsController.createKeyword
  );

  // GET /api/keywords/list
  fastify.get(
    '/list',
    { preHandler: [fastify.keywordsMiddleware.getKeywords] },
    KeywordsController.getKeywords
  );

  // DELETE /api/keywords/delete/:keyword_id
  fastify.delete(
    '/delete/:keyword_id',
    { preHandler: [fastify.keywordsMiddleware.deleteKeyword] },
    KeywordsController.deleteKeyword
  );
}
