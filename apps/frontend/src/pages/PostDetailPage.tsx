import BackButton from "../components/BackButton";
import { formatPostDate } from "../util";
import classes from "./PostDetailPage.module.scss";
import { usePostDetailLoaderData } from "../loaders/postItemLoader";
import TitleText from "../components/TitleText";

export default function PostDetailPage() {
  const post = usePostDetailLoaderData();
  const date = formatPostDate(post.publishedAt);

  return (
    <div className={`transition-content ${classes["post-page"]}`}>
      <BackButton to="/" className="mb-4" />

      <TitleText className="mb-1" variant="secondary">
        {post.title}
      </TitleText>

      <p className={`${classes["post-information"]} mb-4`}>
        Escrito por {post.author.name}, em {date}
      </p>

      <p className={classes["post-content"]}>{post.content}</p>
    </div>
  );
}
