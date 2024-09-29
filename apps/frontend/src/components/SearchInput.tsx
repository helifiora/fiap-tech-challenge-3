import { forwardRef, InputHTMLAttributes } from "react";
import classes from "./SearchInput.module.scss";
import IconSearch from "./icons/IconSearch";

const SearchInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  const { className, ...others } = props;
  return (
    <div className={classes["search-input-container"]}>
      <input
        ref={ref}
        className={`${className} ${classes["search-input"]}`}
        {...others}
      />
      <span className={classes["search-icon"]}>
        <IconSearch size={16} />
      </span>
    </div>
  );
});

export default SearchInput;
