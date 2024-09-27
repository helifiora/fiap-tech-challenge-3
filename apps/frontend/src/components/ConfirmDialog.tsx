import { memo, useEffect, useRef } from "react";
import classes from "./ConfirmDialog.module.scss";

type Props = {
  isOpen: boolean;
  message: string;
  onClose: (value: boolean) => void;
};

export const ConfirmDialog = memo((props: Props) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (props.isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [props]);

  return (
    <dialog
      className={classes["confirm-dialog"]}
      ref={dialogRef}
      onCancel={() => props.onClose(false)}
    >
      <header className={`${classes["header"]} mb-4`}>
        <h2>Confirmar Exclusão</h2>
      </header>

      <p className="mb-4">{props.message}</p>

      <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
        <button onClick={() => props.onClose(false)} className="button -small">
          Cancelar
        </button>
        <button
          onClick={() => props.onClose(true)}
          className="button -primary -small"
        >
          Confirmar
        </button>
      </div>
    </dialog>
  );
});
