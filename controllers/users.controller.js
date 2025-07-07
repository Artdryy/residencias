import UsersService from '../services/users.service.js';

class UsersController {
  createUser = async (req, reply) => {
    const { user_name, password, email, role_id } = req.body;
    const result = await UsersService.createUser({ user_name, password, email, role_id });
    reply.code(201).sendSuccess({ message: 'User created', data: result });
  };

  getUsers = async (req, reply) => {
    const result = await UsersService.getUsers();
    reply.sendSuccess({ message: 'Users fetched', data: result });
  };

  updateUser = async (req, reply) => {
    const { user_id, user_name, password, email, role_id, is_active } = req.body;
    const result = await UsersService.updateUser({ user_id, user_name, password, email, role_id, is_active });
    reply.sendSuccess({ message: 'User updated', data: result });
  };

  deleteUser = async (req, reply) => {
    const { user_id } = req.params;
    const result = await UsersService.deleteUser({ user_id });
    reply.code(204).sendSuccess({ message: 'User deleted', data: result });
  };

  updateStatus = async (req, reply) => {
    const {user_id, is_active} = req.body;
    const result = await UsersService.updateStatus({user_id, is_active});
    reply.sendSuccess({message: 'User status updated', data: result});
  }

  updatePassword = async (req, reply) => {
    const {user_id, password} = req.body;
    const result = await UsersService.updatePassword({user_id, password});
    reply.sendSuccess({message: 'Password updated successfuly', data: result});
  }
}

export default new UsersController();
