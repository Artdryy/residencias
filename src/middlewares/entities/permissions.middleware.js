import BaseMiddleware from "../base/base.middleware.js";
import { PermissionsValidator } from "../../validators/index.js";

class PermissionsMiddleware extends BaseMiddleware {
  constructor() {
    super(PermissionsValidator);
  }
}

export default new PermissionsMiddleware();
