import ReportsValidator from '../validators/reports.validator.js';
import { handleError } from './error.middleware.js';

class ReportsMiddleware {
  createReport = async (req, reply) => {
    try {
      req.body = await ReportsValidator.createReport().validateAsync(req.body);
    } catch (err) {
      return handleError(err, req, reply);
    }
  };

  getReports = async (req, reply) => {
    try {
      req.query = await ReportsValidator.getReports().validateAsync(req.query);
    } catch (err) {
      return handleError(err, req, reply);
    }
  };

  updateReport = async (req, reply) => {
    try {
      req.params = await ReportsValidator.deleteReport().validateAsync(req.params);
      req.body   = await ReportsValidator.updateReport().validateAsync(req.body);
    } catch (err) {
      return handleError(err, req, reply);
    }
  };

  deleteReport = async (req, reply) => {
    try {
      req.params = await ReportsValidator.deleteReport().validateAsync(req.params);
    } catch (err) {
      return handleError(err, req, reply);
    }
  };
}

export default new ReportsMiddleware();
