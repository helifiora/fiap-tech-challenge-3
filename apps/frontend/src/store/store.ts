import { configureStore } from "@reduxjs/toolkit";
import authReducer, { listenerMiddleware } from "./authReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (p) => p().prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
