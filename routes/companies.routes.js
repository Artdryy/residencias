import CompaniesController from '../controllers/companies.controller.js';

export default async function companiesRoutes(fastify, opts) {
  // POST /api/companies/create
  fastify.post(
    '/create', { preHandler: [fastify.companiesMiddleware.createCompany]},
    CompaniesController.createCompany
  );

  // GET /api/companies/list
  fastify.get(
    '/list', { preHandler: [fastify.companiesMiddleware.getCompanies]},
    CompaniesController.getCompanies
  );

  // PUT /api/companies/update
  fastify.put(
    '/update', { preHandler: [fastify.companiesMiddleware.updateCompany]},
    CompaniesController.updateCompany
  );

  // DELETE /api/companies/delete/:company_id
  fastify.delete(
    '/delete/:company_id', { preHandler: [fastify.companiesMiddleware.deleteCompany]},
    CompaniesController.deleteCompany
  );
}
