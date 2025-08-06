import { createRoutes } from "../base/route.factory.js";
import { UsersController } from "../../src/controllers/index.js";

export default createRoutes({
  controller: UsersController,
  middleware: "usersMiddleware",
  entityName: "user",
  routes: {}, // Sin rutas custom - solo CRUD
});