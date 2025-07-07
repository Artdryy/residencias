import Joi from 'joi';

class PermissionsValidator {
  getPermissions() {
    return Joi.object({});
  }

  assignPermissions() {
    return Joi.object({
      role_id: Joi.number().integer().required(),
      module_id: Joi.number().integer().required(),
      permission_id: Joi.number().integer().required(),
      is_granted: Joi.boolean().required(),
    });
  }

  getPermissionsRoleModule() {
    return Joi.object({
      role_id: Joi.number().integer().required(),
      module_id: Joi.number().integer().required(),
    });
  }

  getPermissionsByUser() {
    return Joi.object({
      user_id: Joi.number().integer().required(),
    });
  }
}

export default new PermissionsValidator();
