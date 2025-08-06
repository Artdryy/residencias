import { createRoutes } from "../base/route.factory.js";
import { KeywordsController } from "../../src/controllers/index.js";

export default createRoutes({
  controller: KeywordsController,
  middleware: "keywordsMiddleware",
  entityName: "keyword",
  routes: {}, // Sin rutas custom - solo CRUD
});