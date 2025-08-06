import BaseRepository from "../base/base.repository.js";

class PermissionsRepository extends BaseRepository {
  constructor() {
    super("permission", "residencias");
  }
}

export default new PermissionsRepository();
