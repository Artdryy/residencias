import BaseMiddleware from "../base/base.middleware.js";
import { RolesValidator } from "../../validators/index.js";

class RolesMiddleware extends BaseMiddleware {
  constructor() {
    super(RolesValidator);
  }
}

export default new RolesMiddleware();
