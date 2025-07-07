import Joi from 'joi';

class CompaniesValidator {
  createCompany() {
    return Joi.object({
      company_name: Joi.string().trim().required(),
      description: Joi.string().required(),
      address: Joi.string().required(),
      phonenumber: Joi.string().required(),
      email: Joi.string().email().required(),
    });
  }

  getCompanies() {
    return Joi.object({});
  }

  updateCompany() {
    return Joi.object({
      company_id: Joi.number().required(),
      company_name: Joi.string().trim().required(),
      description: Joi.string().required(),
      address: Joi.string().required(),
      phonenumber: Joi.string().required(),
      email: Joi.string().email().required(),
    });
  }

  deleteCompany() {
    return Joi.object({
      company_id: Joi.number().required(),
    });
  }
}

export default new CompaniesValidator();
