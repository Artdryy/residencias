import BaseRepository from "../base/base.repository.js";

class ModulesRepository extends BaseRepository {
  constructor() {
    super("module", "residencias");
  }
}

export default new ModulesRepository();
