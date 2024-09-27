import { memo, HTMLAttributes, FC } from "react";
import classes from "./TitleText.module.scss";

type Props = HTMLAttributes<HTMLHeadElement> & {
  variant?: "primary" | "secondary";
};

const TitleText: FC<Props> = memo((props: Props) => {
  const { variant, className, ...other } = props;
  const variantModifier = `-${variant ?? "primary"}`;
  return (
    <h2
      className={`${className} ${classes["title-text"]} ${classes[variantModifier]}`}
      {...other}
    >
      {props.children}
    </h2>
  );
});

export default TitleText;
