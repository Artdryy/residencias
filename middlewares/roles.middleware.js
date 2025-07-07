import RolesValidator from "../validators/roles.validator.js";
import { handleError } from "./error.middleware.js";

class RolesMiddleware {
    createRole = async (req, reply) => {
        try {
            req.body = await RolesValidator.createRole().validateAsync(req.body);
        } catch (err) {
            handleError(err, req, reply);
        }
    }

    getRoles = async (req, reply) => {
        try {
            req.query = await RolesValidator.getRoles().validateAsync(req.query);
        } catch (err) {
            handleError(err, req, reply);
        }
    }

    updateRole = async (req, reply) => {
        try {
            req.body = await RolesValidator.updateRole().validateAsync(req.body);
        } catch (err) {
            handleError(err, req, reply);
        }
    }

    deleteRole = async (req, reply) => {
        try {
            req.params = await RolesValidator.deleteRole().validateAsync(req.params);
        } catch (err) {
            handleError(err, req, reply);
        }
    }
}

export default new RolesMiddleware();
