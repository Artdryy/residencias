import BaseController from "../base/base.controller.js";
import { ModulesService } from "../../services/index.js"; // Import directo, evitando el index

class ModulesController extends BaseController {
  constructor() {
    super(ModulesService, "Module");
  }
}

export default new ModulesController();
