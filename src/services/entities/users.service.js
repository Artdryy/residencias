import BaseService from "../base/base.service.js";
import { UsersRepository } from "../../repositories/index.js";

class UsersService extends BaseService {
  constructor() {
    super(UsersRepository);
  }
}

export default new UsersService();
