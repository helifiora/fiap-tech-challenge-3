import * as v from "valibot";
import { idSchema } from "../schema.utils";

const passwordSchema = v.pipe(
  v.string(),
  v.minLength(8, "deve ter no mínimo 8 caracteres"),
  v.regex(/[a-z]/, "deve conter letra minuscula"),
  v.regex(/[A-Z]/, "deve conter letra maiúscula"),
);

const emailSchema = v.pipe(v.string(), v.email("email invalido"));

const nameSchema = v.pipe(v.string(), v.nonEmpty("nome vazio"));

export const SignInModelSchema = v.object({
  email: emailSchema,
  password: passwordSchema,
});

export const SignUpModelSchema = v.pipe(
  v.object({
    email: emailSchema,
    username: nameSchema,
    password: passwordSchema,
    password2: passwordSchema,
  }),
  v.forward(
    v.partialCheck(
      [["password"], ["password2"]],
      (input) => input.password === input.password2,
      "As senhas não coincidem",
    ),
    ["password2"],
  ),
);

export const AuthorSchema = v.object({
  id: idSchema,
  username: nameSchema,
  email: emailSchema,
  token: v.string(),
  refreshToken: v.string(),
});

export type SignUpModel = v.InferOutput<typeof SignUpModelSchema>;

export type SignInModel = v.InferOutput<typeof SignInModelSchema>;
export type AuthorModel = v.InferOutput<typeof AuthorSchema>;
