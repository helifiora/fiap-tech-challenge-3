import { PostDao } from "./post_dao.ts";

export interface DaoFactory {
  postDao(): PostDao;
}
