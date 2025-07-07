import RolesRepository from '../repositories/roles.repository.js';
import { catchError } from '../helpers/catch.error.js';

class RolesService {
  async createRole(data) {
    const [result, error] = await catchError(RolesRepository.createRole(data));
    if (error) throw error;
    return result;
  }

  async getRoles() {
    const [result, error] = await catchError(RolesRepository.getRoles());
    if (error) throw error;
    return result;
  }

  async updateRole(data) {
    const [result, error] = await catchError(RolesRepository.updateRole(data));
    if (error) throw error;
    return result;
  }

  async deleteRole(data) {
    const [result, error] = await catchError(RolesRepository.deleteRole(data));
    if (error) throw error;
    return result;
  }
}

export default new RolesService();