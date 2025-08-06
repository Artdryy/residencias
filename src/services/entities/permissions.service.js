import BaseService from "../base/base.service.js";
import { PermissionsRepository } from "../../repositories/index.js";

class PermissionsService extends BaseService {
  constructor() {
    super(PermissionsRepository);
  }
}

export default new PermissionsService();
