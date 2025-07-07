import UsersValidator from '../validators/users.validator.js';
import { handleError } from './error.middleware.js';

class UsersMiddleware {
  createUser = async (req, reply) => {
    try {
      req.body = await UsersValidator.createUser().validateAsync(req.body);
    } catch (err) {
      handleError(err, req, reply);
    }
  };

  getUsers = async (req, reply) => {
    try {
      req.query = await UsersValidator.getUsers().validateAsync(req.query);
    } catch (err) {
      handleError(err, req, reply);
    }
  };

  updateUser = async (req, reply) => {
    try {
      req.body = await UsersValidator.updateUser().validateAsync(req.body);
    } catch (err) {
      handleError(err, req, reply);
    }
  };

  deleteUser = async (req, reply) => {
    try {
      req.params = await UsersValidator.deleteUser().validateAsync(req.params);
    } catch (err) {
      handleError(err, req, reply);
    }
  };

  updateStatus = async (req, reply) => {
    try {
        req.body = await UsersValidator.updateStatus().validateAsync(req.body);
    } catch (err) {
        handleError(err, req, reply);
    }
  }

  updatePassword = async (req, reply) => {
    try{
        req.body = await UsersValidator.updatePassword().validateAsync(req.body);
    } catch (err) {
        handleError(err, req, reply);
    }
  }
}

export default new UsersMiddleware();
