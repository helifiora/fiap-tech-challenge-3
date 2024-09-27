import type { PostUseCaseFactory } from "#application/usecase/post/_factory.ts";
import {
  type Controller,
  ControllerResponse,
  EndpointFn,
  mapDelete,
  mapGet,
  mapPost,
  mapPut,
} from "#controller/controller.ts";
import { PostSchema } from "./post_controller_schema.ts";

type Params = {
  useCases: PostUseCaseFactory;
};

export function postController(params: Params): Controller {
  const { useCases } = params;

  const create: EndpointFn = async (ctx) => {
    const currentAuthorId = ctx.user().id;
    const body = ctx.body(PostSchema.create);
    const useCase = useCases.createPost();
    const result = await useCase.handle({ ...body, currentAuthorId });
    return ControllerResponse.created(result);
  };

  const remove: EndpointFn = async (ctx) => {
    const currentAuthorId = ctx.user().id;
    const id = ctx.param("id");
    const useCase = useCases.deletePost();
    await useCase.handle({ id, currentAuthorId });
    return ControllerResponse.noContent();
  };

  const index: EndpointFn = async (ctx) => {
    const query = ctx.query("q") ?? undefined;
    const useCase = useCases.getPosts();
    const result = await useCase.handle({ query });
    return ControllerResponse.ok(result);
  };

  const show: EndpointFn = async (ctx) => {
    const id = ctx.param("id");
    const useCase = useCases.getPostById();
    const result = await useCase.handle({ id });
    if (result === null) {
      return ControllerResponse.noContent();
    }

    return ControllerResponse.ok(result);
  };

  const indexAdmin: EndpointFn = async (ctx) => {
    const authorId = ctx.user().id;
    const query = ctx.query("q") ?? undefined;
    const useCase = useCases.getPosts();
    const result = await useCase.handle({ query, authorId });
    return ControllerResponse.ok(result);
  };

  const update: EndpointFn = async (ctx) => {
    const currentAuthorId = ctx.user().id;
    const body = ctx.body(PostSchema.update);
    const id = ctx.param("id");
    if (body.id !== id) {
      return ControllerResponse.badRequest({ error: "Id incompatível" });
    }

    const useCase = useCases.updatePost();
    const result = await useCase.handle({ ...body, currentAuthorId });
    return ControllerResponse.ok(result);
  };

  return {
    route: "/posts",
    endpoints: [
      mapGet("/", index, { anonymous: true }),
      mapGet("/search", index, { anonymous: true }),
      mapGet("/admin", indexAdmin),
      mapGet("/:id", show, { anonymous: true }),
      mapPut("/:id", update),
      mapPost("/", create),
      mapDelete("/:id", remove),
    ],
  };
}
