import type { DaoFactory } from "#application/dao/_factory.ts";
import type { PostDao } from "#application/dao/post_dao.ts";
import type { KyselyDatabase } from "#infrastructure/kysely_db.ts";
import { KyselyPostDao } from "./kysely_post_dao.ts";

export class KyselyDaoFactory implements DaoFactory {
  #postDao: KyselyPostDao;

  constructor(db: KyselyDatabase) {
    this.#postDao = new KyselyPostDao(db);
  }

  postDao(): PostDao {
    return this.#postDao;
  }
}
