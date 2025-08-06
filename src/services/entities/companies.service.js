import BaseService from "../base/base.service.js";
import { CompaniesRepository } from "../../repositories/index.js";

class CompaniesService extends BaseService {
  constructor() {
    super(CompaniesRepository);
  }
}

export default new CompaniesService();
