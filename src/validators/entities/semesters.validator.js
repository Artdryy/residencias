import Joi from 'joi';

class SemestersValidator {

  create() {
    return Joi.object({
      semester_name: Joi.string().trim().required(),
    });
  }

  getAll() {
    return Joi.object({});
  }

  update() {
    return Joi.object({
      semester_id: Joi.number().integer().required(),
      semester_name: Joi.string().trim().required(),
    });
  }

  delete() {
    return Joi.object({
      semester_id: Joi.number().integer().required(),
    });
  }
  
}

export default new SemestersValidator();
