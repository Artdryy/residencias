import BaseService from "../base/base.service.js";
import { SemestersRepository } from "../../repositories/index.js";

class SemestersService extends BaseService {
  constructor() {
    super(SemestersRepository);
  }
}

export default new SemestersService();
