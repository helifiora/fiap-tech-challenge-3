import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/theme/theme.scss";
import { RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/store.ts";
import router from "./router.tsx";

const $root = document.getElementById("root")!;

createRoot($root).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
