import PermissionsRepository from '../repositories/permissions.repository.js';
import { catchError } from '../helpers/catch.error.js';

class PermissionsService {
  async getPermissions() {
    const [result, error] = await catchError(PermissionsRepository.getPermissions());
    if (error) throw error;
    return result;
  }

  async assignPermissions(data) {
    const [ result, error] = await catchError(PermissionsRepository.assignPermissions(data));
    if (error) throw error;
    return result;
  }

  async getPermissionsRoleModule(data) {
    const [result, error] = await catchError(PermissionsRepository.getPermissionsRoleModule(data));
    if (error) throw error;
    return result;
  }

  async getPermissionsByUser(data) {
    const [result, error] = await catchError(PermissionsRepository.getPermissionsByUser(data));
    if (error) throw error;
    return result;
  }
}

export default new PermissionsService();
