import { useForm } from "react-hook-form";
import FormTextInput from "../../components/FormTextInput";
import { SignUpModel, SignUpModelSchema } from "../../model/author.model";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useCallback, useState } from "react";
import { authorGateway } from "../../gateway";
import { useNavigate } from "react-router-dom";
import AlertMessage from "../../components/AlertMessage";
import TitleText from "../../components/TitleText";
import { useDispatch } from "react-redux";
import { defineAuthor } from "../../store/authReducer";

export default function SignUpPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpModel>({
    defaultValues: { email: "", password: "", username: "", password2: "" },
    resolver: valibotResolver(SignUpModelSchema),
  });

  const [submitError, setSubmitError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback((data: SignUpModel) => {
    setLoading(true);
    authorGateway
      .signUp(data)
      .then((data) => {
        dispatch(defineAuthor(data));
        navigate("/admin");
      })
      .catch((e) => {
        setSubmitError(e.error || `${e}`);
        setLoading(false);
      });
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="transition-content"
      style={{
        paddingTop: 24,
        maxWidth: 400,
        margin: "0 auto",
        display: "flex",
        gap: 24,
        flexDirection: "column",
      }}
    >
      <TitleText>Crie sua conta</TitleText>

      <FormTextInput
        id="form-name"
        formLabel="Nome"
        type="text"
        {...register("username")}
        formError={errors.username?.message}
        autoFocus
      />

      <FormTextInput
        id="form-email"
        formLabel="Email"
        type="email"
        {...register("email")}
        formError={errors.email?.message}
      />

      <FormTextInput
        id="form-password"
        formLabel="Senha"
        type="password"
        {...register("password")}
        formError={errors.password?.message}
      />

      <FormTextInput
        id="form-password-2"
        formLabel="Repita a senha"
        type="password"
        {...register("password2")}
        formError={errors.password2?.message}
      />

      <button className="button -primary" type="submit" disabled={loading}>
        {loading ? "Cadastrando..." : "Cadastrar"}
      </button>

      <AlertMessage
        message={submitError}
        onClose={() => setSubmitError(null)}
      />
    </form>
  );
}
