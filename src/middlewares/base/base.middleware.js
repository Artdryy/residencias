import { handleError } from "../error.middleware.js";

class BaseMiddleware {
  constructor(validator) {
    this.validator = validator;
  }

  create = async (req, reply) => {
    try {
      req.body = await this.validator.create().validateAsync(req.body);
    } catch (err) {
      handleError(err, req, reply);
    }
  };

  getAll = async (req, reply) => {
    try {
      req.query = await this.validator.getAll().validateAsync(req.query);
    } catch (err) {
      handleError(err, req, reply);
    }
  };

  update = async (req, reply) => {
    try {
      req.body = await this.validator.update().validateAsync(req.body);
    } catch (err) {
      handleError(err, req, reply);
    }
  };

  delete = async (req, reply) => {
    try {
      req.params = await this.validator.delete().validateAsync(req.params);
    } catch (err) {
      handleError(err, req, reply);
    }
  };
}

export default BaseMiddleware;
