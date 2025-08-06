import BaseController from "../base/base.controller.js";
import { UsersService } from "../../services/index.js"; // Import directo, evitando el index

class UsersController extends BaseController {
  constructor() {
    super(UsersService, "User");
  }
}

export default new UsersController();
