import { assert, test } from "vitest";
import * as module from "#apps/server/src/controller/mod.ts";

test("should define modules", () => {
  assert.isDefined(module.PostController);
  assert.isDefined(module.AuthorController);
});
