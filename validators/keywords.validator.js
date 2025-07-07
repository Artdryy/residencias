import Joi from 'joi';

class KeywordsValidator {
  createKeyword() {
    return Joi.object({
      keyword: Joi.string().trim().required(),
    });
  }

  getKeywords() {
    return Joi.object({});
  }

  deleteKeyword() {
    return Joi.object({
      keyword_id: Joi.number().integer().required(),
    });
  }
}

export default new KeywordsValidator();
