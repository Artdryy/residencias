import ModulesService from '../services/modules.service.js';

class ModulesController {
  getModules = async (req, reply) => {
    const result = await ModulesService.getModules();
    reply.sendSuccess({ message: 'Modules fetched', data: result });
  };

  getModulesByRole = async (req, reply) => {
    const { role_id } = req.params;
    const result = await ModulesService.getModulesByRole({ role_id });
    reply.sendSuccess({ message: 'Modules by role fetched', data: result });
  };

  assignModuleToRole = async (req, reply) => {
    const { role_id, module_id, is_visible } = req.body;
    const result = await ModulesService.assignModuleToRole({ role_id, module_id, is_visible });
    reply.code(201).sendSuccess({ message: 'Module assigned to role', data: result });
  };
}

export default new ModulesController();