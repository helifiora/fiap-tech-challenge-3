import { Link } from "react-router-dom";
import BackButton from "../../components/BackButton";
import TitleText from "../../components/TitleText";
import { usePostsAdminLoaderData } from "../../loaders/postsAdminLoader";
import classes from "./AdminPage.module.scss";
import AdminPosts from "./AdminPosts";

export default function AdminPage() {
  const posts = usePostsAdminLoaderData();

  return (
    <div className={`transition-content ${classes["admin-page"]}`}>
      <BackButton to="/" fallback="/" className="mb-4" />

      <TitleText className="mb-4">Sessão Administrativa</TitleText>

      <div className="mb-4">
        <Link to="/posts/create" className="button -primary">
          Novo Post
        </Link>
      </div>

      <AdminPosts items={posts} />
    </div>
  );
}
