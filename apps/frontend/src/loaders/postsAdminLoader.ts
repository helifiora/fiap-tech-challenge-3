import { redirect, useLoaderData } from "react-router-dom";
import { postGateway } from "../gateway";
import { PostModel } from "../model/post.model";

export default async function postsAdminLoader() {
  try {
    return await postGateway.getManyByAuthor();
  } catch {
    return redirect("/signin");
  }
}

export function usePostsAdminLoaderData(): PostModel[] {
  return useLoaderData() as PostModel[];
}
