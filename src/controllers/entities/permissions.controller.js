import BaseController from "../base/base.controller.js";
import { PermissionsService } from "../../services/index.js"; // Import directo, evitando el index

class PermissionsController extends BaseController {
  constructor() {
    super(PermissionsService, "Permission");
  }
}

export default new PermissionsController();
