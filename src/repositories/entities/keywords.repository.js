import BaseRepository from "../base/base.repository.js";

class KeywordsRepository extends BaseRepository {
  constructor() {
    super("keyword", "residencias");
  }
}

export default new KeywordsRepository();
