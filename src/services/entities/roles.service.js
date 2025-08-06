import BaseService from "../base/base.service.js";
import { RolesRepository } from "../../repositories/index.js";

class RolesService extends BaseService {
  constructor() {
    super(RolesRepository);
  }
}

export default new RolesService();
