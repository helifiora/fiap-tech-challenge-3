import { LoaderFunctionArgs, redirect, useLoaderData } from "react-router-dom";
import { postGateway } from "../gateway";
import { PostModel } from "../model/post.model";

export default async function postItemLoader(args: LoaderFunctionArgs) {
  const id = args.params.id ?? "";
  const result = await postGateway.getOne(id);
  if (result === null) {
    return redirect("/");
  }

  return result;
}

export function usePostDetailLoaderData(): PostModel {
  return useLoaderData() as PostModel;
}
