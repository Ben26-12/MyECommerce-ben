import classNames from "classnames/bind";
import styles from "./Stepper.module.scss";
const cx = classNames.bind(styles);
function Stepper({ currentStep }) {
  const steps = [
    { id: 1, name: "SHOPPING CART" },
    { id: 2, name: "CHECKOUT" },
    { id: 3, name: "ORDER STATUS" },
  ];

  return (
    <div className={cx("stepper-container")}>
      {steps.map((step) => (
        <div
          key={step.id}
          className={cx("step-item", { active: step.id <= currentStep })}
        >
          <span className={cx("step-number")}>{step.id}</span>
          <span className={cx("step-name")}>{step.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Stepper;
