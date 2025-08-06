import { createRoutes } from "../base/route.factory.js";
import { CompaniesController } from "../../src/controllers/index.js";

export default createRoutes({
  controller: CompaniesController,
  middleware: "companiesMiddleware",
  entityName: "company",
  routes: {}, // Sin rutas custom - solo CRUD
});