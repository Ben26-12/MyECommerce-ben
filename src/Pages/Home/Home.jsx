import classNames from "classnames/bind";

import Banner from "@/components/Banner";
import SectionInfo from "@/Pages/Home/SectionInfo";
import FeatureProducts from "@/Pages/Home/FeaturedProducts";
import images from "@/assets/Images";
import styles from "./Home.module.scss";
import SaleSection from "@/Pages/Home/SaleSection";

const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={cx("wrapper")}>
      {/* Banner */}
      <Banner
        className={cx("home-banner")}
        backgroundURL={images.banner}
        title="Let's take a little trip"
        description="Make yours celebrations even more special this years with beautiful."
        buttonTitle="Go to shop"
      />
      {/* section infomation */}
      <SectionInfo />
      {/* Feature products  */}
      <FeatureProducts />
      {/* Sales of the years*/}
      <SaleSection />
    </div>
  );
}

export default Home;
