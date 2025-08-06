import BaseController from "../base/base.controller.js";
import { RolesService } from "../../services/index.js"; // Import directo, evitando el index

class RolesController extends BaseController {
  constructor() {
    super(RolesService, "Role");
  }
}

export default new RolesController();
