import BaseRepository from "../base/base.repository.js";

class ReportsRepository extends BaseRepository {
  constructor() {
    super("report", "residencias");
  }
}

export default new ReportsRepository();
