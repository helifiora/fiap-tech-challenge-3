import { Link } from "react-router-dom";
import classes from "./AppHeader.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "./store";

export default function AppHeader() {
  const author = useSelector((state: RootState) => state.auth.author);

  return (
    <header className={classes["app-header"]}>
      <h1 className={classes["title"]}>
        <Link to="/">TechBlog</Link>
      </h1>

      {author ? author.username : <Link to="/signin">Login</Link>}
    </header>
  );
}
