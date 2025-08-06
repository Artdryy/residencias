import BaseService from "../base/base.service.js";
import { ModulesRepository } from "../../repositories/index.js";

class ModulesService extends BaseService {
  constructor() {
    super(ModulesRepository);
  }
}

export default new ModulesService();
