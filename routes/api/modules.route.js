import { createRoutes } from "../base/route.factory.js";
import { ModulesController } from "../../src/controllers/index.js";

export default createRoutes({
  controller: ModulesController,
  middleware: "modulesMiddleware",
  entityName: "module",
  routes: {}, // Sin rutas custom - solo CRUD
});