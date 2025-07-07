// controllers/reports.controller.js
import fs from 'fs';
import path from 'path';
import ReportsService from '../services/reports.service.js';

class ReportsController {
  createReport = async (req, reply) => {
    const data = await req.file();// { filename, file, ... }
    const body = req.body; // campos normales
    // mueve el stream a disco
    const target = path.join(__dirname, '..', 'reportes', data.filename);
    await pump(data.file, fs.createWriteStream(target));
    await ReportsService.createReport(body, { path: target });
    reply.code(201).sendSuccess({ message: 'Reporte creado correctamente' });
  }

  getReports = async (req, reply) => {
    const rows = await ReportsService.getReports();
    reply.sendSuccess({ message: 'Reportes obtenidos', data: rows });
  }

  updateReport = async (req, reply) => {
    const { report_id } = req.params;
    const file = req.isMultipart ? await req.file() : null;
    if (file) {
      const target = path.join(__dirname, '..', 'reportes', file.filename);
      await pump(file.file, fs.createWriteStream(target));
      file.path = target;
    }
    await ReportsService.updateReport({ ...req.body, report_id }, file);
    reply.sendSuccess({ message: 'Reporte actualizado correctamente' });
  }

  deleteReport = async (req, reply) => {
    const { report_id } = req.params;
    await ReportsService.deleteReport({ report_id });
    reply.sendSuccess({ message: 'Reporte eliminado correctamente' });
  }
}

export default new ReportsController();
