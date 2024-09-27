import { parse } from "valibot";
import { PostArraySchema, PostModel, PostSchema } from "../model/post.model";
import { AxiosInstance } from "axios";

export class PostGateway {
  #url = "/posts";
  #axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.#axios = axios;
  }

  async getMany(): Promise<PostModel[]> {
    const { status, data } = await this.#axios.get(this.#url);
    if (status === 204) {
      return [];
    }

    return parse(PostArraySchema, data);
  }

  async getManyByAuthor(): Promise<PostModel[]> {
    const { status, data } = await this.#axios.get(`${this.#url}/admin`);
    if (status === 204) {
      return [];
    }

    return parse(PostArraySchema, data);
  }

  async getOne(id: string): Promise<PostModel | null> {
    const { status, data } = await this.#axios(`${this.#url}/${id}`);
    if (status === 204) {
      return null;
    }

    return parse(PostSchema, data);
  }
}
