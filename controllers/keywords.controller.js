import KeywordsService from '../services/keywords.service.js';

class KeywordsController {
  createKeyword = async (req, reply) => {
    const { keyword } = req.body;
    const result = await KeywordsService.createKeyword({ keyword });
    reply.code(201).sendSuccess({ message: 'Keyword created', data: result });
  };

  getKeywords = async (req, reply) => {
    const result = await KeywordsService.getKeywords();
    reply.sendSuccess({ message: 'Keywords fetched', data: result });
  };

  deleteKeyword = async (req, reply) => {
    const { keyword_id } = req.params;
    const result = await KeywordsService.deleteKeyword({ keyword_id });
    reply.code(204).sendSuccess({ message: 'Keyword deleted', data: result });
  };
}

export default new KeywordsController();
