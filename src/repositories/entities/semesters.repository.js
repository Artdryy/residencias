import BaseRepository from "../base/base.repository.js";

class SemestersRepository extends BaseRepository {
  constructor() {
    super("semester", "residencias");
  }
}

export default new SemestersRepository();
