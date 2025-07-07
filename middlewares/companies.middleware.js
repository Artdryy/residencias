import CompaniesValidator from '../validators/companies.validator.js';
import { handleError } from './error.middleware.js';

class CompaniesMiddleware {
  createCompany = async (req, reply) => {
    try {
      req.body = await CompaniesValidator.createCompany().validateAsync(req.body);
    } catch (err) {
      handleError(err, req, reply);
    }
  }

  getCompanies = async (req, reply) => {
    try {
      req.query = await CompaniesValidator.getCompanies().validateAsync(req.query);
    } catch (err) {
      handleError(err, req, reply);
    }
  }

  updateCompany = async (req, reply) => {
    try {
      req.body = await CompaniesValidator.updateCompany().validateAsync(req.body);
    } catch (err) {
      handleError(err, req, reply);
    }
  }

  deleteCompany = async (req, reply) => {
    try {
      req.params = await CompaniesValidator.deleteCompany().validateAsync(req.params);
    } catch (err) {
      handleError(err, req, reply);
    }
  }
}

export default new CompaniesMiddleware();