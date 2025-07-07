import ReportsController from '../controllers/reports.controller.js';

export default async function reportsRoutes(fastify, opts) {

  // POST /api/reports/create
  fastify.post(
    '/create',
    { preHandler: [fastify.reportsMiddleware.createReport] },
    ReportsController.createReport
  );

  // GET /api/reports/list
  fastify.get(
    '/list',
    { preHandler: [fastify.reportsMiddleware.getReports] },
    ReportsController.getReports
  );

  // PUT /api/reports/update/:report_id
  fastify.put(
    '/update/:report_id',
    { preHandler: [fastify.reportsMiddleware.updateReport] },
    ReportsController.updateReport
  );

  // DELETE /api/reports/delete/:report_id
  fastify.delete(
    '/delete/:report_id',
    { preHandler: [fastify.reportsMiddleware.deleteReport] },
    ReportsController.deleteReport
  );
}
