import Joi from 'joi';

class ReportsValidator {
  createReport() {
    return Joi.object({
      student_name:    Joi.string().trim().required(),
      ctrlnumber:      Joi.string().trim().required(),
      major:           Joi.string().allow(null, '').optional(),
      report_title:    Joi.string().allow(null, '').optional(),
      company_id:      Joi.number().integer().required(),
      semestre:        Joi.number().integer().required(),
      palabras_clave:  Joi.array().items(Joi.string()).optional()
    });
  }

  getReports() {
    return Joi.object({});
  }

  updateReport() {
    return Joi.object({
      report_id:       Joi.number().integer().required(),
      student_name:    Joi.string().trim().required(),
      ctrlnumber:      Joi.string().trim().required(),
      major:           Joi.string().allow(null, '').optional(),
      report_title:    Joi.string().allow(null, '').optional(),
      company_id:      Joi.number().integer().required(),
      pdf_route:       Joi.string().optional(),
      semestre:        Joi.number().integer().required(),
      palabras_clave:  Joi.array().items(Joi.string()).optional()
    });
  }

  deleteReport() {
    return Joi.object({
      report_id: Joi.number().integer().required(),
    });
  }
}

export default new ReportsValidator();
