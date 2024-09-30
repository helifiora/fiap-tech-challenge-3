import { Link, useNavigate } from "react-router-dom";
import FormTextInput from "../../components/FormTextInput.tsx";
import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { SignInModelSchema, SignInModel } from "../../model/author.model.ts";
import { authorGateway } from "../../gateway.ts";
import AlertMessage from "../../components/AlertMessage.tsx";
import TitleText from "../../components/TitleText.tsx";
import { useDispatch } from "react-redux";
import { defineAuthor } from "../../store/authReducer.ts";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInModel>({
    defaultValues: { email: "", password: "" },
    resolver: valibotResolver(SignInModelSchema),
  });

  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = useCallback((data: SignInModel) => {
    authorGateway
      .signIn(data)
      .then((result) => {
        dispatch(defineAuthor(result));
        navigate("/admin");
      })
      .catch((e) => setSubmitError(e.error ?? "Erro desconhecido!"));
  }, []);

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="transition-content"
      style={{
        paddingTop: 48,
        maxWidth: 400,
        margin: "0 auto",
        display: "flex",
        gap: 24,
        flexDirection: "column",
      }}
    >
      <TitleText>Login</TitleText>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <FormTextInput
          id="form-email"
          formLabel="Email"
          type="email"
          {...register("email")}
          formError={errors.email?.message}
          autoFocus
        />

        <FormTextInput
          id="form-password"
          formLabel="Senha"
          type="password"
          {...register("password")}
          formError={errors.password?.message}
        />
      </div>

      <button className="button -primary" type="submit">
        Entrar
      </button>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to={"/signup"} className="link-button">
          Não possui conta? Cadastre aqui!
        </Link>
      </div>

      <AlertMessage
        message={submitError}
        onClose={() => setSubmitError(null)}
      />
    </form>
  );
}
