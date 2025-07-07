import Joi from 'joi';

class ModulesValidator {
  getModules() {
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
}

export default new ModulesValidator();