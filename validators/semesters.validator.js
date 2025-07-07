import Joi from 'joi';

class SemestersValidator {
  getSemesters() {
    return Joi.object({});
  }
}

export default new SemestersValidator();
