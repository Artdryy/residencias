import ModulesRepository from '../repositories/modules.repository.js';
import { catchError } from '../helpers/catch.error.js';

class ModulesService {
  async getModules() {
    const [result, error] = await catchError(ModulesRepository.getModules());
    if (error) throw error;
    return result;
  }

  async getModulesByRole(data) {
    const [result, error] = await catchError(ModulesRepository.getModulesByRole(data));
    if (error) throw error;
    return result;
  }

  async assignModuleToRole(data) {
    const [result, error] = await catchError(ModulesRepository.assignModuleToRole(data));
    if (error) throw error;
    return result;
  }
}

export default new ModulesService();