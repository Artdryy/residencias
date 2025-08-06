import Joi from "joi";

class RolesValidator {
  create() {
    return Joi.object({
      role_name: Joi.string().trim().required(),
      description: Joi.string().required(),
    });
  }

  getAll() {
    return Joi.object({});
  }

  update() {
    return Joi.object({
      role_id: Joi.number().required(),
      role_name: Joi.string().trim().required(),
      description: Joi.string().required(),
    });
  }

  delete() {
    return Joi.object({
      role_id: Joi.number().required(),
    });
  }
}

export default new RolesValidator();
