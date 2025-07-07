import SemestersValidator from '../validators/semesters.validator.js';
import { handleError } from './error.middleware.js';

class SemestersMiddleware {
  getSemesters = async (req, reply) => {
    try {
      req.query = await SemestersValidator.getSemesters().validateAsync(req.query);
    } catch (err) {
      handleError(err, req, reply);
    }
  };
}

export default new SemestersMiddleware();
