import { useLoaderData } from "react-router-dom";
import PostItem from "./PostItem";
import { useState } from "react";
import { PostModel } from "../../model/post.model";
import TitleText from "../../components/TitleText";
import SearchInput from "../../components/SearchInput";
import classes from "./PostPage.module.scss";

export default function PostPage() {
  const data = useLoaderData() as PostModel[];

  const [filter, setFilter] = useState("");

  const filtered = data.filter((item) =>
    item.title.includes(filter),
  );

  return (
    <main className={`transition-content ${classes["post-page"]}`}>
      <div
        style={{
          paddingBottom: 24,
          borderBottom: "1px solid #dbdbdb",
          marginBottom: 24,
        }}
      >
        <TitleText className="mb-4">
          Grupo 9 <br /> Tech Challenge 3
        </TitleText>

        <SearchInput
          placeholder="Pesquise por título..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <ul className={classes["blog-post-list"]}>
        {filtered.map((item) => (
          <PostItem key={item.id} post={item} />
        ))}
      </ul>
    </main>
  );
}
