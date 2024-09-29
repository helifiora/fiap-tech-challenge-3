import { forwardRef, InputHTMLAttributes } from "react";
import classes from "./FormTextAreaInput.module.scss";

type Props = InputHTMLAttributes<HTMLTextAreaElement> & {
  id: string;
  formLabel: string;
  formError?: string;
};

const FormTextAreaInput = forwardRef<HTMLTextAreaElement, Props>(
  (props, ref) => {
    const { formLabel, formError, ...others } = props;
    return (
      <div>
        <label htmlFor={others.id} className={classes["form-textarea-label"]}>
          {formLabel}
        </label>
        <textarea
          className={classes["form-textarea-input"]}
          rows={20}
          ref={ref}
          {...others}
        />
        <div className={classes["form-textarea-error"]}>
          {formError && <span className={classes["message"]}>{formError}</span>}
        </div>
      </div>
    );
  },
);

export default FormTextAreaInput;
