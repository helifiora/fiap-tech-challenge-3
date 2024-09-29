import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "./layouts/root/RootLayout";
import postItemLoader from "./loaders/postItemLoader";
import postsAdminLoader from "./loaders/postsAdminLoader";
import postsLoader from "./loaders/postsLoader";
import AdminPage from "./pages/admin/AdminPage";
import NotFoundPage from "./pages/NotFoundPage";
import PostDetailPage from "./pages/postDetail/PostDetailPage";
import PostEditPage from "./pages/postEdit/PostEditPage";
import PostPage from "./pages/post/PostPage";
import SignInPage from "./pages/signIn/SignInPage";
import SignUpPage from "./pages/signUp/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <Navigate to="/posts" replace /> },
      { path: "/signin", element: <SignInPage /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/admin", element: <AdminPage />, loader: postsAdminLoader },
      { path: "/posts", element: <PostPage />, loader: postsLoader },
      {
        path: "/posts/:id/edit",
        element: <PostEditPage />,
        loader: postItemLoader,
      },
      { path: "/posts/create", element: <PostEditPage /> },
      {
        path: "/posts/:id",
        element: <PostDetailPage />,
        loader: postItemLoader,
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
