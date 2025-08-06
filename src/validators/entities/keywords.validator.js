import Joi from 'joi';

class KeywordsValidator {
  create() {
    return Joi.object({
      keyword: Joi.string().trim().required(),
    });
  }

  getAll() {
    return Joi.object({});
  }

  update() {
    return Joi.object({
      keyword_id: Joi.number().integer().required(),
      keyword: Joi.string().trim().required(),
    });
  }

  delete() {
    return Joi.object({
      keyword_id: Joi.number().integer().required(),
    });
  }
}

export default new KeywordsValidator();
