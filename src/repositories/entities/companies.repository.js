import BaseRepository from "../base/base.repository.js";
import { sequelize } from "../../config/database.js"; // Importar en caso de que se necesite sobreescribir métodos que usen sequelize

class CompaniesRepository extends BaseRepository {
  constructor() {
    super("company", "residencias");
  }

  // Sobreescribir getAll para companies
  async getAll(params = {}) {
    const values = Object.values(params);
    const placeholders = values.map(() => "?").join(", ");

    const query =
      values.length > 0
        ? `CALL ${this.schemaName}.get_companies(${placeholders});`
        : `CALL ${this.schemaName}.get_companies();`;

    const rows = await sequelize.query(query, {
      replacements: values,
      type: sequelize.QueryTypes.SELECT,
    });

    return rows;
  }
}



export default new CompaniesRepository();
