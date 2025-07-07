import { sequelize } from "../config/database.js";
import { QueryTypes } from "sequelize";

class PermissionsRepository {
    async getPermissions() {
        const rows = await sequelize.query(
            'call residencias.get_permissions();',
            { type: QueryTypes.SELECT }
        );
        return rows;
    }

    async assignPermissions({role_id, module_id, permission_id, is_granted}){
        await sequelize.query(
            'call residencias.assign_permission_role_module(?,?,?,?);',
            { replacements: [role_id, module_id, permission_id, is_granted]}
        );
    }

    async getPermissionsRoleModule ({role_id, module_id}){
        const rows = await sequelize.query(
            'call residencias.get_permissions_by_rolemodule(?,?);',
            {replacements: [role_id, module_id], type: QueryTypes.SELECT }
        );
        return rows;
    }

    async getPermissionsByUser ({user_id}){
        const rows = await sequelize.query(
            'call residencias.get_permissions_by_user(?);',
            {replacements: [user_id], type: QueryTypes.SELECT}
        );
        return rows;
    }

}

export default new PermissionsRepository();