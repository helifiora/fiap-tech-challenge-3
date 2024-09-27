import { useLoaderData } from "react-router-dom";
import { postGateway } from "../gateway";
import { PostModel } from "../model/post.model";

export default async function postsLoader() {
  return await postGateway.getMany();
}

export function usePostsLoaderData(): PostModel[] {
  return useLoaderData() as PostModel[];
}
