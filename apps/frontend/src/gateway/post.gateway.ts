import { parse } from "valibot";
import {
  EditPost,
  PostArraySchema,
  PostModel,
  PostSchema,
} from "../model/post.model";
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
    const s = await this.#axios.get(`${this.#url}/admin`);
    if (s.status === 204) {
      return [];
    }

    return parse(PostArraySchema, s.data);
  }

  async getOne(id: string): Promise<PostModel | null> {
    const { status, data } = await this.#axios(`${this.#url}/${id}`);
    if (status === 204) {
      return null;
    }

    return parse(PostSchema, data);
  }

  async create(editPost: EditPost): Promise<void> {
    await this.#axios.post(this.#url, editPost);
  }

  async update(editPost: EditPost, id: string): Promise<void> {
    await this.#axios.put(`${this.#url}/${id}`, { ...editPost, id });
  }

  async delete(id: string): Promise<void> {
    await this.#axios.delete(`${this.#url}/${id}`);
  }
}
