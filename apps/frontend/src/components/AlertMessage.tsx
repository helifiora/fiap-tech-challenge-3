import classes from "./AlertMessage.module.scss";
import IconTimes from "./icons/IconTimes";

type Props = { message?: string | null; onClose?: () => void };

export default function AlertMessage(props: Props) {
  if (!props.message) {
    return null;
  }

  return (
    <div className={classes["alert-message"]}>
      {props.message}
      {props.onClose && (
        <button className={classes["close"]} onClick={props.onClose}>
          <IconTimes size={16} />
        </button>
      )}
    </div>
  );
}
