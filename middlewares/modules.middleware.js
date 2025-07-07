import ModulesValidator from '../validators/modules.validator.js';
import { handleError } from './error.middleware.js';

class ModulesMiddleware {
  getModules = async (req, reply) => {
    try {
      req.query = await ModulesValidator.getModules().validateAsync(req.query);
    } catch (err) {
      handleError(err, req, reply);
    }
  };

  getModulesByRole = async (req, reply) => {
    try {
      req.params = await ModulesValidator.getModulesByRole().validateAsync(req.params);
    } catch (err) {
      handleError(err, req, reply);
    }
  };

  assignModuleToRole = async (req, reply) => {
    try {
      req.body = await ModulesValidator.assignModuleToRole().validateAsync(req.body);
    } catch (err) {
      handleError(err, req, reply);
    }
  };
}

export default new ModulesMiddleware();