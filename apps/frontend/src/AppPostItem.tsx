import { Link } from "react-router-dom";
import { formatPostDate } from "./util";
import IconUser from "./components/icons/IconUser";
import IconCalendar from "./components/icons/IconCalendar";
import { PostModel } from "./model/post.model";

type Props = { post: PostModel };

export default function AppPostItem({ post }: Props) {
  const date = formatPostDate(post.publishedAt);

  let clampContent = post.content.slice(0, 60);
  if (clampContent !== post.content) {
    clampContent += "...";
  }

  return (
    <li className="blog-post">
      <p className="user">
        <IconUser size={12} />
        <span>{post.author.name}</span>
      </p>
      <h3 className="title">
        <Link to={post.id}>{post.title}</Link>
      </h3>
      <p className="description">{clampContent}</p>
      <p className="info">
        <IconCalendar size={16} />
        <span>{date}</span>
      </p>
    </li>
  );
}
