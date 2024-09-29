import axios, { AxiosError } from "axios";
import { AuthorGateway } from "./gateway/author.gateway";
import { PostGateway } from "./gateway/post.gateway";
import { clearAuthor, refreshTokens } from "./store/authReducer";
import { store } from "./store/store";

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

httpClient.interceptors.response.use(
  (res) => res,
  async (error: AxiosError) => {
    const response = error.response;

    if (!response || (response.data as any).code !== "token.expired")
      return error;

    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken === null) return error;

    try {
      const value = await axios.post(
        `${error.config?.baseURL}/authors/refresh`,
        { refreshToken },
      );

      const { token, refreshToken: a } = value.data as any;
      store.dispatch(refreshTokens({ token, refresh: a }));
      return axios.request({
        ...error.response!.config,
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch {
      store.dispatch(clearAuthor());
      throw "unauthorized";
    }
  },
);

export const postGateway = new PostGateway(httpClient);

export const authorGateway = new AuthorGateway(httpClient);
