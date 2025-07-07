import ReportsRepository from '../repositories/reports.repository.js';
import KeywordsRepository from '../repositories/keywords.repository.js';
import { catchError } from '../helpers/catch.error.js';
import { sequelize } from '../config/database.js';

class ReportsService {
  async createReport(data, file) {
    return await sequelize.transaction(async (tx) => {
      const pdf_route = file.path.replace(/^.*reportes/, 'reportes'); 
      const [report_id, err1] = await catchError(
        ReportsRepository.createReport({ ...data, pdf_route }), tx
      );
      if (err1) throw err1;

      for (const palabra of data.palabras_clave || []) {
        let [rows] = await tx.query(
          'select palabra_id from residencias.palabras_clave where palabra = ?',
          { replacements: [palabra], type: QueryTypes.SELECT }
        );
        let palabra_id = rows.length ? rows[0].palabra_id
          : (await tx.query(
              'insert into residencias.palabras_clave(palabra) values(?)',
              { replacements: [palabra] }
            )).insertId;
        await tx.query(
          'insert into residencias.reporte_palabras(proyecto_id, palabra_id) values(?,?)',
          { replacements: [report_id, palabra_id] }
        );
      }
      return report_id;
    });
  }

  async getReports() {
    const [rows, error] = await catchError(ReportsRepository.getReports());
    if (error) throw error;
    return rows;
  }

  async updateReport(data, file) {
    return await sequelize.transaction(async (tx) => {
      const pdf_route = file ? file.path.replace(/^.*reportes/, 'reportes') : data.pdf_route;
      const [, err2] = await catchError(
        ReportsRepository.updateReport({ ...data, pdf_route }), tx
      );
      if (err2) throw err2;
      await tx.query(
        'delete from residencias.reporte_palabras where proyecto_id = ?',
        { replacements: [data.report_id] }
      );
      for (const palabra of data.palabras_clave || []) {
      }
    });
  }

  async deleteReport({ report_id }) {
    const [, error] = await catchError(ReportsRepository.deleteReport({ report_id }));
    if (error) throw error;
  }
}

export default new ReportsService();
