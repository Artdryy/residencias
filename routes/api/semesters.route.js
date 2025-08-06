import { createRoutes } from "../base/route.factory.js";
import { SemestersController } from "../../src/controllers/index.js";

export default createRoutes({
  controller: SemestersController,
  middleware: "semestersMiddleware",
  entityName: "semester",
  routes: {}, // Sin rutas custom - solo CRUD
});