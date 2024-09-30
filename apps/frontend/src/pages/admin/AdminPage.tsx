import { Link, useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";
import TitleText from "../../components/TitleText";
import { usePostsAdminLoaderData } from "../../loaders/postsAdminLoader";
import classes from "./AdminPage.module.scss";
import AdminPosts from "./AdminPosts";
import IconLogout from "../../components/icons/IconLogout";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { clearAuthor } from "../../store/authReducer";

export default function AdminPage() {
  const posts = usePostsAdminLoaderData();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(clearAuthor());
    navigate("/posts");
  }, [navigate, dispatch]);

  return (
    <div className={`transition-content ${classes["admin-page"]}`}>
      <div className={`${classes["hero"]} mb-4`}>
        <BackButton to="/" fallback="/" />

        <button
          className="button -square -link"
          onClick={onLogout}
          title="Sair"
        >
          <IconLogout size={20} />
        </button>
      </div>

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
