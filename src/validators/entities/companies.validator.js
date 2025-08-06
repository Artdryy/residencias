import Joi from 'joi';

class CompaniesValidator {
  create() {
    return Joi.object({
      company_name: Joi.string().trim().required(),
      description: Joi.string().required(),
      address: Joi.string().required(),
      phonenumber: Joi.string().required(),
      email: Joi.string().email().required(),
    });
  }

  getAll() {
    return Joi.object({});
  }

  update() {
    return Joi.object({
      company_id: Joi.number().required(),
      company_name: Joi.string().trim().required(),
      description: Joi.string().required(),
      address: Joi.string().required(),
      phonenumber: Joi.string().required(),
      email: Joi.string().email().required(),
    });
  }

  delete() {
    return Joi.object({
      company_id: Joi.number().required(),
    });
  }
}

export default new CompaniesValidator();
