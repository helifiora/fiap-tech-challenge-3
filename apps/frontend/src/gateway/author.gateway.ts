import type { AxiosInstance } from "axios";
import { parse } from "valibot";
import {
  AuthorModel,
  AuthorSchema,
  SignInModel,
  SignUpModel,
} from "../model/author.model";

export class AuthorGateway {
  #url = "/authors";
  #axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.#axios = axios;
  }

  async signUp(model: SignUpModel): Promise<AuthorModel> {
    const { data } = await this.#axios.post(`${this.#url}/signup`, model);
    return parse(AuthorSchema, data);
  }

  async signIn(model: SignInModel): Promise<AuthorModel> {
    const { data } = await this.#axios.post(`${this.#url}/signin`, model);
    return parse(AuthorSchema, data);
  }
}
