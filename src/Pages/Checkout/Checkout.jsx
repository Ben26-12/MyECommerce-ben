import classNames from "classnames/bind";
import styles from "./Checkout.module.scss";
import CheckoutForm from "@/Pages/Checkout/CheckoutForm";
import CheckoutSummary from "@/Pages/Checkout/CheckoutSummary";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import config from "@/config";
import { useContext, useMemo } from "react";
import { slideBarContext } from "@/contexts/SlideBarProvider";
import Stepper from "@/components/Stepper";

const cx = classNames.bind(styles);

function Checkout() {
  const { listProductCart } = useContext(slideBarContext);
  const location = useLocation();
  const displayProducts = useMemo(() => {
    if (location.state && location.state.length > 0) {
      return location.state;
    } else {
      return listProductCart;
    }
  }, [listProductCart, location.state]);

  const navigate = useNavigate();
  const total = useMemo(() => {
    return displayProducts
      .reduce((acc, product) => {
        return acc + Number(product.total) || 0;
      }, 0)
      .toFixed(2);
  }, [displayProducts]);

  const initialValues = {
    firstName: "",
    lastName: "",
    companyName: "", // Optional
    country: "UK", // Mặc định hoặc lấy từ SelectInput
    address1: "",
    apartment: "", // Optional
    city: "",
    county: "", // Optional
    phone: "",
    postcode: "",
    email: "",
    notes: "", // Optional
    paymentMethod: "check",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Please fill out this field."),
    lastName: Yup.string().required("Please fill out this field."),
    country: Yup.string().required("Please select a country."),
    address1: Yup.string().required("Please fill out this field."),
    city: Yup.string().required("Please fill out this field."),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Phone number is too short")
      .required("Please fill out this field."),
    postcode: Yup.string().required("Please fill out this field."),
    email: Yup.string()
      .email("Invalid email address")
      .required("Please fill out this field."),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: (values) => {
      const orderData = {
        ...values,
        products: displayProducts,
        totalAmount: total,
        orderDate: new Date().toISOString(),
      };
      console.log("Order Data:", orderData);
      toast.success("Order is successfully placed", {
        autoClose: 2000,
        onClose: () => navigate(config.routes.thankyou),
      });
    },
  });
  return (
    <div className={cx("page-wrapper")}>
      <div className={cx("stepper-container")}>
        <Stepper currentStep={2} />
      </div>
      <div className={cx("wrapper")}>
        <div className={cx("coupon-section")}>
          Have a coupon? <span className={cx("link")}>Click here to enter</span>
        </div>
        <div className={cx("container")}>
          <div className={cx("left-section")}>
            <CheckoutForm formik={formik} />
          </div>
          <div className={cx("right-section")}>
            <CheckoutSummary
              displayProducts={displayProducts}
              total={total}
              formik={formik}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
