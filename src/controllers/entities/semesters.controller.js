import BaseController from "../base/base.controller.js";
import { SemestersService } from "../../services/index.js"; // Import directo, evitando el index

class SemestersController extends BaseController {
  constructor() {
    super(SemestersService, "Semester");
  }
}

export default new SemestersController();
