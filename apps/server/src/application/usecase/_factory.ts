import { DaoFactory } from "#application/dao/_factory.ts";
import type { JwtService } from "#application/jwt_service.ts";
import type { RepoFactory } from "#application/repo/_factory.ts";

import { AuthorUseCaseFactory } from "./author/_factory.ts";
import { PostUseCaseFactory } from "./post/_factory.ts";

class ConcreteDaoFactory implements DaoFactory {
  postDao(): PostDao {
    return new PostDao();
  }
}

export class UseCaseFactory {
  authorFac: AuthorUseCaseFactory;
  postFac: PostUseCaseFactory;

  constructor(
    repoFac: RepoFactory,
    daoFactory: DaoFactory,
    jwtService: JwtService,
  ) {
    this.authorFac = new AuthorUseCaseFactory(repoFac.authorRepo(), jwtService);
    this.postFac = new PostUseCaseFactory(
      repoFac.postRepo(),
      daoFactory.postDao(),
    );
  }
}
