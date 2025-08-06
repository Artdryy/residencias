// En index se exportan todos los servicios de entidades
// para que puedan ser importados fácilmente en otros archivos.

import CompaniesService from "./entities/companies.service.js";
import KeywordsService from "./entities/keywords.service.js";
import ModulesService from "./entities/modules.service.js";
import PermissionsService from "./entities/permissions.service.js";
import ReportsService from "./entities/reports.service.js";
import RolesService from "./entities/roles.service.js";
import SemestersService from "./entities/semesters.service.js";
import UsersService from "./entities/users.service.js";

export {
  CompaniesService,
  KeywordsService,
  ModulesService,
  PermissionsService,
  ReportsService,
  RolesService,
  SemestersService,
  UsersService,
};
