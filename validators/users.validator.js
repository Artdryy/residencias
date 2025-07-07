import Joi from 'joi';

class UsersValidator {
  createUser() {
    return Joi.object({
      user_name: Joi.string().trim().required(),
      password:  Joi.string().trim().required(),
      email:     Joi.string().email().required(),
      role_id:   Joi.number().integer().required(),
    });
  }

  getUsers() {
    return Joi.object({});
  }

  updateUser() {
    return Joi.object({
      user_id:   Joi.number().integer().required(),
      user_name: Joi.string().trim().required(),
      password:  Joi.string().trim().required(),
      email:     Joi.string().email().required(),
      role_id:   Joi.number().integer().required(),
      is_active: Joi.boolean().required(),
    });
  }

  deleteUser() {
    return Joi.object({
      user_id: Joi.number().integer().required(),
    });
  }

  updateStatus(){
    return Joi.object({
        user_id: Joi.number().integer().required(),
        is_active: Joi.boolean().required(),
    });
  }

  updatePassword(){
    return Joi.object({
        user_id: Joi.number().integer().required(),
        password: Joi.string().required(),
    })
  }
}

export default new UsersValidator();
