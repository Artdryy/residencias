import BaseController from "../base/base.controller.js";
import { CompaniesService } from "../../services/index.js"; // Import directo, evitando el index

class CompaniesController extends BaseController {
  constructor() {
    super(CompaniesService, "Company");
  }
}

export default new CompaniesController();
