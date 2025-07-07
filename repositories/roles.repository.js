import { sequelize } from '../config/database.js';
import { QueryTypes } from 'sequelize';

class RolesRepository {
  // Crea un nuevo rol. Si el stored procedure falla, lanza excepción; si no, devolvemos los datos pasados.
  async createRole({ role_name, description }) {
    await sequelize.query(
      'call residencias.create_role(?, ?);',
      { replacements: [role_name, description] }
    );
    return { role_name, description };
  }

  // Devuelve un array con todos los roles.
  async getRoles() {
    // usando QueryTypes.SELECT nos aseguramos de recibir directamente un array de filas
    const rows = await sequelize.query(
      'call residencias.get_roles();',
      { type: QueryTypes.SELECT }
    );
    return rows;
  }

  // Actualiza un rol existente. El SP lanza error si id no existe o validaciones fallan.
  async updateRole({ role_id, role_name, description }) {
    await sequelize.query(
      'call residencias.update_role(?, ?, ?);',
      { replacements: [role_id, role_name, description] }
    );
    return { role_id, role_name, description };
  }

  // Elimina un rol por su ID. El SP lanza error si no lo encuentra.
  async deleteRole({ role_id }) {
    await sequelize.query(
      'call residencias.delete_role(?);',
      { replacements: [role_id] }
    );
    return { role_id };
  } 
}

export default new RolesRepository();
