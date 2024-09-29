import { Link } from "react-router-dom";
import classes from "./RootHeader.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function RootHeader() {
  const author = useSelector((state: RootState) => state.auth.author);

  return (
    <header className={classes["app-header"]}>
      <h1 className={classes["title"]}>
        <Link to="/posts">TechBlog</Link>
      </h1>

      {author ? (
        <Link to="/admin" className="button -primary -small">
          {author.username}
        </Link>
      ) : (
        <Link to="/signin">Login</Link>
      )}
    </header>
  );
}
