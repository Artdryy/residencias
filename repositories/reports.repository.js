import { sequelize } from '../config/database.js';
import { QueryTypes } from 'sequelize';

class ReportsRepository {
  async createReport({ student_name, ctrlnumber, major, report_title, company_id, pdf_route, semester }) {
    const [rows] = await sequelize.query(
      'call residencias.create_report(?,?,?,?,?,?,?);',
      {
        replacements: [student_name, ctrlnumber, major, report_title, company_id, pdf_route, semester],
        type: QueryTypes.SELECT
      }
    );
    return rows[0].report_id;
  }

  async getReports() {
    const rows = await sequelize.query(
      'call residencias.get_reports();',
      { type: QueryTypes.SELECT }
    );
    return rows;
  }

  async updateReport({ report_id, student_name, ctrlnumber, major, report_title, company_id, pdf_route, semester }) {
    await sequelize.query(
      'call residencias.update_report(?,?,?,?,?,?,?,?);',
      {
        replacements: [report_id, student_name, ctrlnumber, major, report_title, company_id, pdf_route, semester]
      }
    );
  }

  async deleteReport({ report_id }) {
    await sequelize.query(
      'call residencias.delete_report(?);',
      { replacements: [report_id] }
    );
  }
}

export default new ReportsRepository();
