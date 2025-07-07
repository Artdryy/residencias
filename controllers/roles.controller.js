import RolesService from '../services/roles.service.js';

class RolesController {
  createRole = async (req, reply) => {
    const { role_name, description } = req.body
    const result = await RolesService.createRole({ role_name, description })
    reply.code(201).sendSuccess({ message: 'Role created', data: result })
  }

  getRoles = async (req, reply) => {
    const result = await RolesService.getRoles()
    reply.sendSuccess({ message: 'Roles fetched', data: result })
  }

  updateRole = async (req, reply) => {
    const { role_id, role_name, description } = req.body
    const result = await RolesService.updateRole({ role_id, role_name, description })
    reply.sendSuccess({ message: 'Role updated', data: result })
  }

  deleteRole = async (req, reply) => {
    const { role_id } = req.params
    const result = await RolesService.deleteRole({ role_id })
    reply.code(204).sendSuccess({message: 'Role deleted', data: result})
  }
}


export default new RolesController();