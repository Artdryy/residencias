import BaseService from "../base/base.service.js";
import { KeywordsRepository } from "../../repositories/index.js";

class KeywordsService extends BaseService {
  constructor() {
    super(KeywordsRepository);
  }
}

export default new KeywordsService();
