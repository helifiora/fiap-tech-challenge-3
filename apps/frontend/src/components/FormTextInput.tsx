import { forwardRef, InputHTMLAttributes } from "react";
import classes from "./FormTextInput.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  formLabel: string;
  formError?: string;
};

const FormTextInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { formLabel, formError, ...others } = props;
  return (
    <div>
      <label htmlFor={props.id} className={classes["form-text-label"]}>
        {formLabel}
      </label>
      <input ref={ref} className={classes["form-text-input"]} {...others} />
      <div className={classes["form-text-error"]}>
        {formError && <span className={classes["message"]}>{formError}</span>}
      </div>
    </div>
  );
});

export default FormTextInput;
