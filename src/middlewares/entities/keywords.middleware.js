import BaseMiddleware from "../base/base.middleware.js";
import { KeywordsValidator } from "../../validators/index.js";

class KeywordsMiddleware extends BaseMiddleware {
  constructor() {
    super(KeywordsValidator);
  }
}

export default new KeywordsMiddleware();
