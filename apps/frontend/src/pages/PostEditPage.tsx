import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import FormTextInput from "../components/FormTextInput";
import TitleText from "../components/TitleText";
import classes from "./PostEditPage.module.scss";

export default function PostEditPage() {
  return (
    <div className={`transition-content ${classes["post-edit-page"]}`}>
      <BackButton fallback="/admin" />

      <TitleText>Nova Postagem</TitleText>

      <FormTextInput id="title" type="text" formLabel="Título" />

      <div style={{ display: "flex", gap: 8 }}>
        <button className="button -primary">Salvar</button>
        <Link className="button" to="/admin">
          Cancelar
        </Link>
      </div>
    </div>
  );
}
