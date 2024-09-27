import type { AuthorUseCaseFactory } from "#application/usecase/author/_factory.ts";
import {
  type Controller,
  type EndpointFn,
  ControllerResponse,
  mapPost,
} from "#controller/controller.ts";
import { AuthorSchema } from "./author_controller_schema.ts";

type Params = {
  useCases: AuthorUseCaseFactory;
};

export function authorController(params: Params): Controller {
  const { useCases } = params;

  const signIn: EndpointFn = async (ctx) => {
    const body = ctx.body(AuthorSchema.signIn);
    const useCase = useCases.getAuthor();
    const result = await useCase.handle(body);
    return ControllerResponse.ok(result);
  };

  const signUp: EndpointFn = async (ctx) => {
    const body = ctx.body(AuthorSchema.signUp);
    const useCase = useCases.createAuthor();
    const result = await useCase.handle(body);
    return ControllerResponse.created(result);
  };

  const refresh: EndpointFn = async (ctx) => {
    const body = ctx.body(AuthorSchema.refresh);
    const useCase = useCases.refreshToken();
    const result = await useCase.handle(body);
    return ControllerResponse.ok(result);
  };

  return {
    route: "/authors",
    endpoints: [
      mapPost("/refresh", refresh, { anonymous: true }),
      mapPost("/signin", signIn, { anonymous: true }),
      mapPost("/signup", signUp, { anonymous: true }),
    ],
  };
}
