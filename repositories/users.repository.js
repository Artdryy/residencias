import { QueryTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

class UsersRepository {
  async createUser({ user_name, password, email, role_id }) {
    await sequelize.query(
      'call residencias.create_user(?,?,?,?);',
      { replacements: [user_name, password, email, role_id] }
    );
    return { user_name, password, email, role_id };
  }

  async getUsers() {
    const rows = await sequelize.query(
      'call residencias.get_users();',
      { type: QueryTypes.SELECT }
    );
    return rows;
  }

  async updateUser({ user_id, user_name, password, email, role_id, is_active }) {
    await sequelize.query(
      'call residencias.update_user(?,?,?,?,?,?);',
      { replacements: [user_id, user_name, password, email, role_id, is_active] }
    );
    return { user_id, user_name, password, email, role_id, is_active };
  }

  async deleteUser({ user_id }) {
    await sequelize.query(
      'call residencias.delete_user(?);',
      { replacements: [user_id] }
    );
    return { user_id };
  }

  async updateStatus({user_id, is_active}){
    await sequelize.query(
        'call residencias.update_user_status(?,?);',
        { replacements: [user_id, is_active]}
    );
    return {user_id, is_active};
  }

  async updatePassword({user_id, password}){
    await sequelize.query(
        'call residencias.update_user_password(?,?);',
        { replacements: [user_id, password]}
    );
    return {user_id, password};
  }
}

export default new UsersRepository();
