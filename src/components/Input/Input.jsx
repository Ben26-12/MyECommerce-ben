import styles from "./Input.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function Input({ label, type, name, error, touched, ...restProps }) {
  console.log(error, touched);

  let Component = "input";
  if (type === "textarea") {
    Component = "textarea";
  }
  return (
    <div className={cx("wrapper")}>
      {label && (
        <label className={cx("label")} htmlFor={name}>
          {label}
        </label>
      )}
      <Component
        className={cx("input")}
        type={type}
        id={name}
        name={name}
        {...restProps}
      ></Component>
      {touched && error && <span className={cx("error-message")}>{error}</span>}
    </div>
  );
}

export default Input;
