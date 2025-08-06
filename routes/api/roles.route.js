import { createRoutes } from "../base/route.factory.js";
import { RolesController } from "../../src/controllers/index.js";

export default createRoutes({
  controller: RolesController,
  middleware: "rolesMiddleware",
  entityName: "role",
  routes: {}, // Sin rutas custom - solo CRUD
});
