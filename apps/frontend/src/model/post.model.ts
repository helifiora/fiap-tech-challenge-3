import * as v from "valibot";
import { idSchema } from "../schema.utils";

export const PostSchema = v.object({
  id: idSchema,
  title: v.pipe(v.string(), v.nonEmpty("Titulo está vazio")),
  content: v.pipe(v.string(), v.nonEmpty("Conteúdo está vazio")),
  publishedAt: v.pipe(
    v.string(),
    v.transform((v) => new Date(v)),
    v.date("Data de publicação deve ser uma data válida"),
  ),
  author: v.object({
    id: idSchema,
    name: v.pipe(v.string(), v.nonEmpty("Nome está vazio")),
  }),
});

export const PostArraySchema = v.array(PostSchema);

export type PostModelApi = v.InferInput<typeof PostSchema>;

export type PostModel = v.InferOutput<typeof PostSchema>;
