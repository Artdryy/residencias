import { createRoutes } from "../base/route.factory.js";
import { ReportsController } from "../../src/controllers/index.js";

export default createRoutes({
  controller: ReportsController,
  middleware: "reportsMiddleware",
  entityName: "report",
  routes: {}, // Sin rutas custom - solo CRUD
});