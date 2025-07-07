import PermissionsService from '../services/permissions.service.js';

class PermissionsController {
  getPermissions = async (req, reply) => {
    const result = await PermissionsService.getPermissions();
    reply.sendSuccess({ message: 'Permissions fetched', data: result });
  };

  assignPermissions = async (req, reply) => {
    const { role_id, module_id, permission_id, is_granted } = req.body;
    const result = await PermissionsService.assignPermissions({
      role_id, module_id, permission_id, is_granted
    });
    reply.code(201).sendSuccess({ message: 'Permission assigned', data: result });
  };

  getPermissionsRoleModule = async (req, reply) => {
    const { role_id, module_id } = req.params;
    const result = await PermissionsService.getPermissionsRoleModule({ role_id, module_id });
    reply.sendSuccess({ message: 'Permissions for role-module fetched', data: result });
  };

  getPermissionsByUser = async (req, reply) => {
    const { user_id } = req.params;
    const result = await PermissionsService.getPermissionsByUser({ user_id });
    reply.sendSuccess({ message: 'Permissions for user fetched', data: result });
  };
}

export default new PermissionsController();
