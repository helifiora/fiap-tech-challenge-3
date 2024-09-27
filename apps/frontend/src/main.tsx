import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./theme/theme.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostPage from "./pages/PostPage.tsx";
import PostDetailPage from "./pages/PostDetailPage.tsx";
import SignInPage from "./pages/SignInPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import PostEditPage from "./pages/PostEditPage.tsx";
import postItemLoader from "./loaders/postItemLoader.ts";
import postsLoader from "./loaders/postsLoader.ts";
import AdminPage from "./pages/AdminPage.tsx";
import postsAdminLoader from "./loaders/postsAdminLoader.ts";
import { Provider } from "react-redux";
import { store } from "./store.ts";

const $root = document.getElementById("root")!;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/signin", element: <SignInPage /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/admin", element: <AdminPage />, loader: postsAdminLoader },
      {
        path: "/admin/:id/edit",
        element: <PostEditPage />,
        loader: postItemLoader,
      },
      { path: "/admin/create", element: <PostEditPage /> },
      {
        path: "/",
        element: <PostPage />,
        loader: postsLoader,
      },
      {
        path: "/:id",
        element: <PostDetailPage />,
        loader: postItemLoader,
      },
    ],
  },
]);

createRoot($root).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
