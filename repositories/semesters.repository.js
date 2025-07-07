import { sequelize } from "../config/database.js";
import { QueryTypes } from "sequelize";

class SemestersRepository {
    async getSemesters(){
        const rows = await sequelize.query(
            'call residencias.get_semesters();',
            { type: QueryTypes.SELECT}
        );
        return rows;
    }
}

export default new SemestersRepository();