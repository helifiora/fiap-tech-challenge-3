import { env } from "node:process";
import { parseEnv } from "./main_environment.ts";

import { KyselyRepoFactory } from "#infrastructure/repo_adapter/_factory.ts";
import { JsonwebtokenJwtService } from "#infrastructure/jsonwebtoken_jwt_service.ts";
import { ExpressServer } from "#infrastructure/server_adapter/express_server.ts";

import { UseCaseFactory } from "#application/usecase/_factory.ts";
import { applyMigration } from "./main_migration.ts";

import { postController, authorController } from "#controller/mod.ts";
import { KyselyDaoFactory } from "#infrastructure/dao_adapter/_factory.ts";

import dotenv from 'dotenv';

dotenv.config(); 

const environment = parseEnv(env);

const jwtService = new JsonwebtokenJwtService(environment.secret);

const repoFac = new KyselyRepoFactory(environment.database);
const daoFac = new KyselyDaoFactory(repoFac.connection);
await applyMigration(repoFac.connection);

const useCases = new UseCaseFactory(repoFac, daoFac, jwtService);

const server = new ExpressServer(jwtService);
server.addController(postController({ useCases: useCases.postFac }));
server.addController(authorController({ useCases: useCases.authorFac }));
server.listen(environment.port);
