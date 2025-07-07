import { sequelize } from '../config/database.js';
import { QueryTypes } from 'sequelize';

class CompaniesRepository {
    async createCompany({company_name, description, address, phonenumber, email}){
        await sequelize.query(
            'call residencias.create_company(?,?,?,?,?);',
            { replacements: [company_name, description, address, phonenumber, email]}
        );
        return {company_name, description, address, phonenumber, email};
    }

    async getCompanies(){
        const rows = await sequelize.query(
            'call residencias.get_companies();',
            { type: QueryTypes.SELECT }
        );
        return rows;
    }

    async updateCompany({company_id, company_name, description, address, phonenumber, email}){
        await sequelize.query(
            'call residencias.update_company(?,?,?,?,?,?);',
            { replacements: [company_id, company_name, description, address, phonenumber, email]}
        );
        return { company_id, company_name, description, address, phonenumber, email};
    }

    async deleteCompany({company_id}){
        await sequelize.query(
            'call residencias.delete_company(?);',
            { replacements: [company_id]}
        );
        return {company_id};
    }

}

export default new CompaniesRepository();