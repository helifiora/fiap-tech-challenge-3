import {
  createListenerMiddleware,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { AuthorModel, AuthorSchema } from "./model/author.model";
import { parse } from "valibot";

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
  },
});

export const { defineAuthor, clearAuthor } = authSlice.actions;

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

export default authSlice.reducer;
