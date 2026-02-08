import styles from "../Shop.module.scss";
import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip, faListUl } from "@fortawesome/free-solid-svg-icons";

import { useContext } from "react";
import { OurShopContext } from "@/contexts/OurShopProvider";
import SelectInput from "@/components/SelectInput/";
import Button from "@/components/Button";
const cx = classNames.bind(styles);
function Filter() {
  const { sortOptions, showOptions, setSortValue, setPerPageValue } =
    useContext(OurShopContext);
  const getValue = (value, type) => {
    if (type === "sort") {
      setSortValue(value);
    } else {
      setPerPageValue(value);
    }
  };
  return (
    <div className={cx("filter")}>
      <div className={cx("options")}>
        <div className={cx("sort")}>
          <div className={cx("text")}>Sort: </div>
          <SelectInput getValue={getValue} type="sort" options={sortOptions} />
        </div>
        <div className={cx("products-per-page")}>
          <div className={cx("text")}>Products per page: </div>
          <SelectInput getValue={getValue} type="show" options={showOptions} />
        </div>
      </div>
    </div>
  );
}

export default Filter;
