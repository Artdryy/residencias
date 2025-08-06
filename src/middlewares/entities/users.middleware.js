import BaseMiddleware from "../base/base.middleware.js";
import { UsersValidator } from "../../validators/index.js";

class UsersMiddleware extends BaseMiddleware {
  constructor() {
    super(UsersValidator);
  }
}

export default new UsersMiddleware();
