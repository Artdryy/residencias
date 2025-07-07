import SemestersRepository from '../repositories/semesters.repository.js';
import { catchError } from '../helpers/catch.error.js';

class SemestersService {
  async getSemesters() {
    const [result, error] = await catchError(
      SemestersRepository.getSemesters()
    );
    if (error) throw error;
    return result;
  }
}

export default new SemestersService();
