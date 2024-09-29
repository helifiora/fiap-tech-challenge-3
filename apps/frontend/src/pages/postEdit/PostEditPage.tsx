import { Link, useLoaderData, useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";
import FormTextInput from "../../components/FormTextInput";
import TitleText from "../../components/TitleText";
import classes from "./PostEditPage.module.scss";
import { EditPostSchema, PostModel } from "../../model/post.model";
import { useForm } from "react-hook-form";
import FormTextAreaInput from "../../components/FormTextAreaInput";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useCallback } from "react";
import { postGateway } from "../../gateway";

type EditPost = Omit<PostModel, "author" | "id" | "publishedAt">;

export default function PostEditPage() {
  const postOrNull = (useLoaderData() ?? null) as PostModel | null;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditPost>({
    defaultValues: {
      content: postOrNull?.content ?? "",
      title: postOrNull?.title ?? "",
    },
    resolver: valibotResolver(EditPostSchema),
  });

  const onSubmit = useCallback(
    (data: EditPost) => {
      console.log(postOrNull);
      if (postOrNull !== null) {
        postGateway.update(data, postOrNull.id).then(() => navigate("/admin"));
      } else {
        postGateway.create(data).then(() => navigate("/admin"));
      }
    },
    [postOrNull, navigate],
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`transition-content ${classes["post-edit-page"]}`}
    >
      <BackButton to="/admin" fallback="/admin" />

      <TitleText>{postOrNull === null ? "Nova" : " Editar"} Postagem</TitleText>

      <FormTextInput
        id="title"
        type="text"
        formLabel="Título"
        formError={errors.title?.message}
        {...register("title")}
      />

      <FormTextAreaInput
        id="content"
        formLabel="Postagem"
        formError={errors.content?.message}
        {...register("content")}
      />

      <div style={{ display: "flex", gap: 8 }}>
        <button type="submit" className="button -primary">
          Salvar
        </button>
        <Link className="button" to="/admin">
          Cancelar
        </Link>
      </div>
    </form>
  );
}
