import axios from "axios";
import { AuthorGateway } from "./gateway/author.gateway";
import { PostGateway } from "./gateway/post.gateway";

const httpClient = axios.create({
  baseURL: "http://localhost:3000",
});

httpClient.interceptors.request.use((config) => {
  const tokenLocalStorage = localStorage.getItem("accessToken");
  if (tokenLocalStorage) {
    config.headers["Authorization"] = `Bearer ${tokenLocalStorage}`;
  }

  return config;
});

export const postGateway = new PostGateway(httpClient);

export const authorGateway = new AuthorGateway(httpClient);
