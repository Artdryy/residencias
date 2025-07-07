import { sequelize } from '../config/database.js';
import { QueryTypes } from 'sequelize';

class KeywordsRepository {
    async createKeyword({keyword}){
        await sequelize.query(
            'call residencias.create_keyword(?);',
            { replacements: [keyword]}
        );
    return {keyword};
    }

    async getKeywords(){
        const rows = await sequelize.query(
            'call residencias.get_keywords();',
            {type: QueryTypes.SELECT}
        );
        return rows;
    }

    async deleteKeywords({keyword_id}){
        await sequelize.query(
            'call residencias.delete_keyword(?);',
            {replacements: [keyword_id]}
        );
        return {keyword_id};
    }
}

export default new KeywordsRepository();