import Joi from 'joi';

class RolesValidator {
    createRole() {
        return Joi.object({
            role_name: Joi.string().trim().required(),
            description: Joi.string().required(),
        });
    }

    getRoles(){
        return Joi.object({});
    }

    updateRole(){
        return Joi.object({
            role_id: Joi.number().required(),
            role_name: Joi.string().trim().required(),
            description: Joi.string().required(),
        });
    }

    deleteRole(){
        return Joi.object({
            role_id: Joi.number().required(),
        });
    }
}

export default new RolesValidator();