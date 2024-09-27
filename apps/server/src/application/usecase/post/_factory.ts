import type { PostRepo } from "#application/repo/post_repo.ts";
import type { PostDao } from "#application/dao/post_dao.ts";

import { GetPosts } from "./get_posts.ts";
import { CreatePost } from "./create_post.ts";
import { DeletePost } from "./delete_post.ts";
import { GetPostById } from "./get_post_by_id.ts";
import { UpdatePost } from "./update_post.ts";

export class PostUseCaseFactory {
  #postRepo: PostRepo;
  #postDao: PostDao;

  constructor(postRepo: PostRepo, postDao: PostDao) {
    this.#postRepo = postRepo;
    this.#postDao = postDao;
  }

  createPost(): CreatePost {
    return new CreatePost(this.#postRepo);
  }

  deletePost(): DeletePost {
    return new DeletePost(this.#postRepo);
  }

  getPosts(): GetPosts {
    return new GetPosts(this.#postDao);
  }

  getPostById(): GetPostById {
    return new GetPostById(this.#postDao);
  }

  updatePost(): UpdatePost {
    return new UpdatePost(this.#postRepo);
  }
}
