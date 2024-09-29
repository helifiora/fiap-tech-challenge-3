import { Link } from "react-router-dom";
import IconCalendar from "../../components/icons/IconCalendar";
import IconUser from "../../components/icons/IconUser";
import { PostModel } from "../../model/post.model";
import { formatPostDate } from "../../util";
import classes from "./PostItem.module.scss";
import Markdown from "react-markdown";

type Props = { post: PostModel };

export default function PostItem({ post }: Props) {
  const date = formatPostDate(post.publishedAt);

  let clampContent = post.content.slice(0, 60);
  if (clampContent !== post.content) {
    clampContent += "...";
  }

  return (
    <li className={classes["blog-post"]}>
      <p className={classes["user"]}>
        <IconUser size={12} />
        <span>{post.author.name}</span>
      </p>
      <h3 className={classes["title"]}>
        <Link to={post.id}>
          <Markdown>{post.title}</Markdown>
        </Link>
      </h3>
      <p className={classes["description"]}>
        <Markdown>{clampContent}</Markdown>
      </p>
      <p className={classes["info"]}>
        <IconCalendar size={16} />
        <span>{date}</span>
      </p>
    </li>
  );
}
