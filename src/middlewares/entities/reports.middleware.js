import BaseMiddleware from "../base/base.middleware.js";
import { ReportsValidator } from "../../validators/index.js";

class ReportsMiddleware extends BaseMiddleware {
  constructor() {
    super(ReportsValidator);
  }
}

export default new ReportsMiddleware();
