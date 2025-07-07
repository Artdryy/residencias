import { sequelize } from "../config/database.js";
import { QueryTypes } from "sequelize";

class ModulesRepository {
    async getModules(){
        const rows = await sequelize.query(
            'call residencias.get_modules();',
            { type: QueryTypes.SELECT }
        );
        return rows;
    }

    async getModulesByRole({ role_id }){
        const rows = await sequelize.query(
            'call residencias.get_modules_by_role(?);',
            { replacements: [role_id], type: QueryTypes.SELECT }
        );
        return rows;    
    }

    async assignModuleToRole({ role_id, module_id, is_visible }) {
        await sequelize.query(
            'call residencias.assign_module_role(?,?,?);',
            { replacements: [role_id, module_id, is_visible] }
        );
    }
}

export default new ModulesRepository();
