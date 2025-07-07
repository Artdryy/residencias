import KeywordsValidator from '../validators/keywords.validator.js';
import { handleError } from './error.middleware.js';

class KeywordsMiddleware {
  createKeyword = async (req, reply) => {
    try {
      req.body = await KeywordsValidator.createKeyword().validateAsync(req.body);
    } catch (err) {
      handleError(err, req, reply);
    }
  };

  getKeywords = async (req, reply) => {
    try {
      req.query = await KeywordsValidator.getKeywords().validateAsync(req.query);
    } catch (err) {
      handleError(err, req, reply);
    }
  };

  deleteKeyword = async (req, reply) => {
    try {
      req.params = await KeywordsValidator.deleteKeyword().validateAsync(req.params);
    } catch (err) {
      handleError(err, req, reply);
    }
  };
}

export default new KeywordsMiddleware();
