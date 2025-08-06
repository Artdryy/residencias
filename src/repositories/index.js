// En index se exportan todos los repositorios de entidades
// para que puedan ser importados fácilmente en otros archivos.

import CompaniesRepository from "./entities/companies.repository.js";
import KeywordsRepository from "./entities/keywords.repository.js";
import ModulesRepository from "./entities/modules.repository.js";
import PermissionsRepository from "./entities/permissions.repository.js";
import ReportsRepository from "./entities/reports.repository.js";
import RolesRepository from "./entities/roles.repository.js";
import SemestersRepository from "./entities/semesters.repository.js";
import UsersRepository from "./entities/users.repository.js";

export {
  CompaniesRepository,
  KeywordsRepository,
  ModulesRepository,
  PermissionsRepository,
  ReportsRepository,
  RolesRepository,
  SemestersRepository,
  UsersRepository,
};
