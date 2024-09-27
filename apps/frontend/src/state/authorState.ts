import { createStore, select, withProps } from "@ngneat/elf";
import { AuthorModel } from "../model/author.model.ts";

const store = createStore(
  { name: "author" },
  withProps<{ author: AuthorModel | null }>({ author: null }),
);

export const author$ = store.pipe(select((state) => state.author));

export function getAuthor(): AuthorModel | null {
  return store.value.author ?? null;
}

export function defineAuthor(model: AuthorModel): void {
  return store.update(() => ({ author: model }));
}
