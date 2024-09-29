import { useNavigate } from "react-router-dom";
import IconArrowLeft from "./icons/IconArrowLeft";
import { HTMLAttributes } from "react";
import classes from "./BackButton.module.scss";

type Props = HTMLAttributes<HTMLButtonElement> & {
  fallback: string;
  to?: string;
};

const BackButton = (props: Props) => {
  const navigate = useNavigate();
  const { fallback, className, ...others } = props;

  const onClick = () => {
    if (props.to) {
      navigate(props.to);
    } else if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate(fallback);
    }
  };

  return (
    <button
      onClick={onClick}
      className={`${className} ${classes["back-button"]}`}
      {...others}
    >
      <IconArrowLeft size={16} /> Voltar
    </button>
  );
};

export default BackButton;
