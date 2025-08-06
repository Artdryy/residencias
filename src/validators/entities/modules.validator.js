import Joi from 'joi';

class ModulesValidator {

  create() {
    return Joi.object({
      module_name: Joi.string().trim().required(),
    });
  }


  getAll() {
    return Joi.object({});
  }

  getModulesByRole() {
    return Joi.object({
      role_id: Joi.number().integer().required(),
    });
  }

  assignModuleToRole() {
    return Joi.object({
      role_id: Joi.number().integer().required(),
      module_id: Joi.number().integer().required(),
      is_visible: Joi.boolean().required(),
    });
  }

  update() {
    return Joi.object({
      module_id: Joi.number().integer().required(),
      module_name: Joi.string().trim().required(),
    });
  }

  delete() {
    return Joi.object({
      module_id: Joi.number().integer().required(),
    });
  }
}

export default new ModulesValidator();