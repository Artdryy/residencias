import BaseService from "../base/base.service.js";
import { ReportsRepository } from "../../repositories/index.js";

class ReportsService extends BaseService {
  constructor() {
    super(ReportsRepository);
  }
}

export default new ReportsService();
