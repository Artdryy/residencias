import CompaniesService from '../services/companies.service.js';

class CompaniesController {
  createCompany = async (req, reply) => {
    const { company_name, description, address, phonenumber, email } = req.body;
    const result = await CompaniesService.createCompany({ company_name, description, address, phonenumber, email });
    reply.code(201).sendSuccess({ message: 'Company created', data: result });
  }

  getCompanies = async (req, reply) => {
    const result = await CompaniesService.getCompanies();
    reply.sendSuccess({ message: 'Companies fetched', data: result });
  }

  updateCompany = async (req, reply) => {
    const { company_id, company_name, description, address, phonenumber, email } = req.body;
    const result = await CompaniesService.updateCompany({ company_id, company_name, description, address, phonenumber, email });
    reply.sendSuccess({ message: 'Company updated', data: result });
  }

  deleteCompany = async (req, reply) => {
    const { company_id } = req.params;
    const result = await CompaniesService.deleteCompany({ company_id });
    reply.code(204).sendSuccess({ message: 'Company deleted', data: result });
  }
}

export default new CompaniesController();
