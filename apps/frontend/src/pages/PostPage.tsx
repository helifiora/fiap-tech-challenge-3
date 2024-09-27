import { useLoaderData } from "react-router-dom";
import AppPostItem from "../AppPostItem";
import IconSearch from "../components/icons/IconSearch";
import { useState } from "react";
import { PostModel } from "../model/post.model";
import TitleText from "../components/TitleText";

export default function PostPage() {
  const data = useLoaderData() as PostModel[];

  const [filter, setFilter] = useState("");

  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(filter),
  );

  return (
    <main
      className="transition-content"
      style={{ maxWidth: 560, margin: "0 auto", paddingTop: "48px" }}
    >
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

        <div className="input-control">
          <span className="left-slot" tabIndex={-1}>
            <IconSearch size={16} />
          </span>
          <input
            className="input"
            type="text"
            placeholder="Pesquise por título"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>

      <ul className="blog-post-list">
        {filtered.map((item) => (
          <AppPostItem key={item.id} post={item} />
        ))}
      </ul>
    </main>
  );
}
