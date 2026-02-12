import styles from "../Contact.module.scss";
import classNames from "classnames/bind";

import Input from "@/components/Input";
import BoxIcon from "@/components/Header/BoxIcon";
import { SOCIAL_DATA } from "@/components/Header/Constants";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);
function ContactBox() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please fill out this field."),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please fill out this field."),
      message: Yup.string().required("Please fill out this field."),
    }),
    onSubmit: (values) => {
      toast.success("Form has been submited, Thank you " + values.name + " !");
    },
  });
  return (
    <div className={cx("container")}>
      {/* Cột trái: Information */}
      <div className={cx("info-column")}>
        <h2 className={cx("heading")}>Information</h2>

        <div className={cx("info-group")}>
          <span className={cx("info-label")}>Address</span>
          <p className={cx("info-text")}>Ha Noi, Viet Nam</p>
        </div>

        <div className={cx("info-group")}>
          <span className={cx("info-label")}>Phones</span>
          <p className={cx("info-text")}>0358427745</p>
          <p className={cx("info-text")}>nguyenkhacly2612@gmail.com</p>
        </div>

        <div className={cx("info-group")}>
          <span className={cx("info-label")}>We're Open</span>
          <p className={cx("info-text")}>Every single day</p>
        </div>
        <div className={cx("social-box")}>
          {SOCIAL_DATA.map((item, index) => {
            return <BoxIcon key={index} item={item} />;
          })}
        </div>
      </div>

      {/* Cột phải: Form Contact */}
      <div className={cx("contact-column")}>
        <h2 className={cx("heading")}>Contact Us</h2>
        <p className={cx("sub-heading")}>
          If you’ve got great products your looking to work with us then drop us
          a line.
        </p>

        <form onSubmit={formik.handleSubmit} className={cx("form")}>
          <div className={cx("row")}>
            <Input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.errors.name}
              touched={formik.touched.name}
              placeholder="Name"
              name="name"
            />
            <Input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors.email}
              touched={formik.touched.email}
              placeholder="Email"
              name="email"
              type="email"
            />
          </div>

          <div className={cx("textarea-group")}>
            <Input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.message}
              error={formik.errors.message}
              touched={formik.touched.message}
              className={cx("textarea")}
              type={"textarea"}
              placeholder="Message"
              name="message"
            ></Input>
          </div>

          <button type="submit" className={cx("submit-btn")}>
            Send Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactBox;
