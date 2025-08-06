import BaseRepository from "../base/base.repository.js";

class UsersRepository extends BaseRepository {
  constructor() {
    super("user", "residencias");
  }
}

export default new UsersRepository();
