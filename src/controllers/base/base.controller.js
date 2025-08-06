class BaseController {
  constructor(service, entityName) {
    this.service = service;
    this.entityName = entityName;
  }

  create = async (req, reply) => {
    try {
      const result = await this.service.create(req.body);
      reply.code(201).sendSuccess({
        message: `${this.entityName} created successfully`,
        data: result,
      });
    } catch (error) {
      reply.code(500).send({
        status: false,
        message: error.message,
      });
    }
  };

  getAll = async (req, reply) => {
    try {
      const result = await this.service.getAll(req.query);
      reply.sendSuccess({
        message: `${this.entityName}s fetched successfully`,
        data: result,
      });
    } catch (error) {
      reply.code(500).send({
        status: false,
        message: error.message,
      });
    }
  };

  update = async (req, reply) => {
    try {
      const result = await this.service.update(req.body);
      reply.sendSuccess({
        message: `${this.entityName} updated successfully`,
        data: result,
      });
    } catch (error) {
      reply.code(500).send({
        status: false,
        message: error.message,
      });
    }
  };

  delete = async (req, reply) => {
    try {
      const result = await this.service.delete(req.params);
      reply.sendSuccess({
        message: `${this.entityName} deleted successfully`,
        data: result,
      });
    } catch (error) {
      reply.code(500).send({
        status: false,
        message: error.message,
      });
    }
  };
}

export default BaseController;
