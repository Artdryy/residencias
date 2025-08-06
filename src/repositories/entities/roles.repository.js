import BaseRepository from "../base/base.repository.js";

class RolesRepository extends BaseRepository {
  constructor() {
    super("role", "residencias");
  }
}

export default new RolesRepository();
