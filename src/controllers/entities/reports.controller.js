import BaseController from "../base/base.controller.js";
import { ReportsService } from "../../services/index.js"; // Import directo, evitando el index

class ReportsController extends BaseController {
  constructor() {
    super(ReportsService, "Report");
  }
}

export default new ReportsController();
