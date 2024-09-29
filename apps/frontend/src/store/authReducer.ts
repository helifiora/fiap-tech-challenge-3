import {
  createListenerMiddleware,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { parse } from "valibot";
import { AuthorModel, AuthorSchema } from "../model/author.model";

export type AuthSlice = { author: AuthorModel | null };

let initialState: AuthSlice;
const localStorageData = localStorage.getItem("author");
if (localStorageData) {
  initialState = { author: parse(AuthorSchema, JSON.parse(localStorageData)) };
} else {
  initialState = { author: null };
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    defineAuthor: (state, action: PayloadAction<AuthorModel>) => {
      state.author = action.payload;
    },
    clearAuthor: (state) => {
      state.author = null;
    },
    refreshTokens: (
      state,
      action: PayloadAction<{ token: string; refresh: string }>,
    ) => {
      if (state.author) {
        state.author.token = action.payload.token;
        state.author.refreshToken = action.payload.refresh;
      }
    },
  },
});

export const { defineAuthor, clearAuthor, refreshTokens } = authSlice.actions;

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: defineAuthor,
  effect: async (action) => {
    const author = action.payload;
    localStorage.setItem("accessToken", author.token);
    localStorage.setItem("refreshToken", author.refreshToken);
    localStorage.setItem("author", JSON.stringify(author));
  },
});

listenerMiddleware.startListening({
  actionCreator: refreshTokens,
  effect: async (action) => {
    const author = action.payload;
    localStorage.setItem("accessToken", author.token);
    localStorage.setItem("refreshToken", author.refresh);
  },
});

listenerMiddleware.startListening({
  actionCreator: clearAuthor,
  effect: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  },
});

export default authSlice.reducer;
