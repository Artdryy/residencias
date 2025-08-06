import BaseMiddleware from "../base/base.middleware.js";
import { ModulesValidator } from "../../validators/index.js";

class ModulesMiddleware extends BaseMiddleware {
  constructor() {
    super(ModulesValidator);
  }
}

export default new ModulesMiddleware();
