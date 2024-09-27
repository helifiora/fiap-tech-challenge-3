import { useLoaderData } from "react-router-dom";
import { postGateway } from "../gateway";
import { PostModel } from "../model/post.model";

export default async function postsAdminLoader() {
  // const author = getAuthor(); // TODO: Terminar
  // if (!author) {
  //   throw "Autor não existe";
  // }

  return await postGateway.getManyByAuthor();
}

export function usePostsAdminLoaderData(): PostModel[] {
  return useLoaderData() as PostModel[];
}
