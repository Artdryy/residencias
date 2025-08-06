import BaseController from "../base/base.controller.js";
import { KeywordsService } from "../../services/index.js"; // Import directo, evitando el index

class KeywordsController extends BaseController {
  constructor() {
    super(KeywordsService, "Keyword");
  }
}

export default new KeywordsController();
