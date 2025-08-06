import BaseMiddleware from "../base/base.middleware.js";
import { SemestersValidator } from "../../validators/index.js";

class SemestersMiddleware extends BaseMiddleware {
  constructor() {
    super(SemestersValidator);
  }
}

export default new SemestersMiddleware();
