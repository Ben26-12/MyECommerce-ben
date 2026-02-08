import styles from "./SelectInput.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function SelectInput({ options, getValue, type, defaultValue }) {
  return (
    <div className={cx("select-wrapper")}>
      <span className={cx("arrow-input")}>
        <FontAwesomeIcon icon={faAngleDown} />
      </span>
      <select
        className={cx("select-input")}
        onChange={(e) => getValue(e.target.value, type)}
        value={defaultValue}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectInput;
