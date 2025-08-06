import { sequelize } from "../../config/database.js";

class BaseRepository {
  constructor(entityName, schemaName = "residencias") {
    this.entityName = entityName;
    this.schemaName = schemaName;
  }

  async create(data) {
    const fields = Object.keys(data);
    const values = Object.values(data);
    const placeholders = values.map(() => "?").join(", ");

    await sequelize.query(
      `CALL ${this.schemaName}.create_${this.entityName}(${placeholders});`,
      {
        replacements: values,
        type: sequelize.QueryTypes.RAW,
      }
    );
    return data;
  }

  async getAll(params = {}) {
    const values = Object.values(params);
    const placeholders = values.map(() => "?").join(", ");

    const query =
      values.length > 0
        ? `CALL ${this.schemaName}.get_${this.entityName}s(${placeholders});`
        : `CALL ${this.schemaName}.get_${this.entityName}s();`;

    const rows = await sequelize.query(query, {
      replacements: values,
      type: sequelize.QueryTypes.SELECT,
    });

    return rows;
  }

  async update(data) {
    const values = Object.values(data);
    const placeholders = values.map(() => "?").join(", ");

    await sequelize.query(
      `CALL ${this.schemaName}.update_${this.entityName}(${placeholders});`,
      {
        replacements: values,
        type: sequelize.QueryTypes.RAW,
      }
    );
    return data;
  }

  async delete(data) {
    const values = Object.values(data);
    const placeholders = values.map(() => "?").join(", ");

    await sequelize.query(
      `CALL ${this.schemaName}.delete_${this.entityName}(${placeholders});`,
      {
        replacements: values,
        type: sequelize.QueryTypes.RAW,
      }
    );
    return data;
  }
}

export default BaseRepository;
