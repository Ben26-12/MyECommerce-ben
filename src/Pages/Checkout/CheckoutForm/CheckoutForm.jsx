import classNames from "classnames/bind";
import styles from "./CheckoutForm.module.scss";
import Input from "@/components/Input";
import SelectInput from "@/components/SelectInput";
import { COUNTRY_OPTIONS } from "@/Pages/Checkout/constants";

const cx = classNames.bind(styles);

function CheckoutForm({ formik }) {
  return (
    <div className={cx("billing-details")}>
      <h3 className={cx("title")}>BILLING DETAILS</h3>
      <form>
        <div className={cx("row")}>
          <Input
            label="First Name"
            required
            name="firstName"
            placeholder="First Name"
            {...formik.getFieldProps("firstName")}
            error={formik.errors.firstName}
            touched={formik.touched.firstName}
          />
          <Input
            label="Last Name"
            required
            name="lastName"
            placeholder="Last Name"
            {...formik.getFieldProps("lastName")}
            error={formik.errors.lastName}
            touched={formik.touched.lastName}
          />
        </div>

        <Input
          label="Company Name (optional)"
          name="companyName"
          placeholder="Company Name"
          {...formik.getFieldProps("companyName")}
        />

        <div className={cx("input-group")}>
          <label className={cx("label")}>Country / Region *</label>
          <SelectInput
            className={cx("country-input")}
            options={COUNTRY_OPTIONS}
            defaultValue={formik.values.country}
            getValue={(val) => formik.setFieldValue("country", val)}
          />
        </div>

        <Input
          label="Street address"
          required
          name="address1"
          placeholder="House number and street name"
          {...formik.getFieldProps("address1")}
          error={formik.errors.address1}
          touched={formik.touched.address1}
        />
        <Input
          name="address2"
          {...formik.getFieldProps("address2")}
          placeholder="Apartment, suite, unit, etc. (optional)"
        />

        <Input
          label="Town / City"
          required
          name="city"
          {...formik.getFieldProps("city")}
          error={formik.errors.city}
          touched={formik.touched.city}
        />

        <Input
          label="County (optional)"
          name="county"
          {...formik.getFieldProps("county")}
          error={formik.errors.county}
          touched={formik.touched.county}
        />

        <Input
          label="Phone"
          required
          name="phone"
          placeholder="Phone"
          {...formik.getFieldProps("phone")}
          error={formik.errors.phone}
          touched={formik.touched.phone}
        />

        <Input
          label="Postcode"
          required
          name="postcode"
          {...formik.getFieldProps("postcode")}
          error={formik.errors.postcode}
          touched={formik.touched.postcode}
        />

        <Input
          label="Email Address"
          required
          name="email"
          type="email"
          placeholder="Email Address"
          {...formik.getFieldProps("email")}
          error={formik.errors.email}
          touched={formik.touched.email}
        />

        <h3 className={cx("title")}>ADDITIONAL INFORMATION</h3>
        <Input
          label="Order Notes (optional)"
          type="textarea"
          name="notes"
          className={cx("note-input")}
          placeholder="Notes about your order, e.g. special notes for delivery."
          {...formik.getFieldProps("notes")}
        />
      </form>
    </div>
  );
}

export default CheckoutForm;
