import { memo } from "react";

type Props = {
  id: string;
  label: string;
};

const FormTextAreaInput = memo((props: Props) => {
  return (
    <div>
      <label htmlFor={props.id} className="input-label">
        {props.label}
      </label>
      <textarea
        className="textarea"
        id={props.id}
        autoComplete="off"
        autoCapitalize="off"
        rows={12}
      />
    </div>
  );
});

export default FormTextAreaInput;
