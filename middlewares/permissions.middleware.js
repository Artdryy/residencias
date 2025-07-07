import PermissionsValidator from '../validators/permissions.validator.js';
import { handleError } from './error.middleware.js';

class PermissionsMiddleware {
  getPermissions = async (req, reply) => {
    try {
      req.query = await PermissionsValidator.getPermissions().validateAsync(req.query);
    } catch (err) {
      handleError(err, req, reply);
    }
  };

  assignPermissions = async (req, reply) => {
    try {
      req.body = await PermissionsValidator.assignPermissions().validateAsync(req.body);
    } catch (err) {
      handleError(err, req, reply);
    }
  };

  getPermissionsRoleModule = async (req, reply) => {
    try {
      req.params = await PermissionsValidator.getPermissionsRoleModule().validateAsync(req.params);
    } catch (err) {
      handleError(err, req, reply);
    }
  };

  getPermissionsByUser = async (req, reply) => {
    try {
      req.params = await PermissionsValidator.getPermissionsByUser().validateAsync(req.params);
    } catch (err) {
      handleError(err, req, reply);
    }
  };
}

export default new PermissionsMiddleware();
