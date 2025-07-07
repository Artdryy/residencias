import SemestersService from '../services/semesters.service.js';

class SemestersController {
  getSemesters = async (req, reply) => {
    const result = await SemestersService.getSemesters();
    reply.sendSuccess({ message: 'Semesters fetched', data: result });
  };
}

export default new SemestersController();
