import styles from "./SlideBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useContext } from "react";
import { slideBarContext } from "@/contexts/SlideBarProvider";
import SlideBarHeader from "@/components/SlideBar/components/SlideBarHeader";
import CartDrawer from "@/components/SlideBar/components/CartDrawer";
import Button from "@/components/Button";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function SlideBar() {
  const { isOpen, setIsOpen, type } = useContext(slideBarContext);

  //dựa vào biến type ở Provider để quyết định render children nào
  const handleRenderChildren = () => {
    switch (type) {
      case "cart":
        return <CartDrawer />;
    }
  };
  //handle đóng slider
  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const slideContainerClasses = cx("slide-container", {
    active: isOpen,
  });
  return (
    <div className={slideContainerClasses}>
      <div className={cx("overlay")} onClick={handleClose}>
        <div
          className={cx("slider")}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {isOpen && (
            <Button onClick={handleClose} className={cx("close-btn")}>
              <FontAwesomeIcon icon={faXmark} />
            </Button>
          )}
          <SlideBarHeader />
          {handleRenderChildren()}
        </div>
      </div>
      ;
    </div>
  );
}

export default SlideBar;
