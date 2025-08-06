import BaseMiddleware from "../base/base.middleware.js";
import { CompaniesValidator } from "../../validators/index.js";

class CompaniesMiddleware extends BaseMiddleware {
  constructor() {
    super(CompaniesValidator);
  }
}

export default new CompaniesMiddleware();