import { useContext, useEffect, useState } from "react";
import styles from "./ProductDetail.module.scss";
import classNames from "classnames/bind";

import PaymentMethods from "@/components/PaymentMethods";
import { addProductToCart } from "@/apiServices/cartService";
import { slideBarContext } from "@/contexts/SlideBarProvider";
import { MOCK_USER_ID } from "@/components/ProductCard/constants";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailProduct } from "@/apiServices/productService";
import config from "@/config";
import ProductDetailSkeleton from "@/Pages/Product/components/ProductDetail/ProductDetailSkeleton";
import LoadingIcon from "@/components/LoadingIcon";
import Button from "@/components/Button";
const cx = classNames.bind(styles);
function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState();
  const { handleGetListProductsCart } = useContext(slideBarContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const handleBuyNow = (productData) => {
    navigate(config.routes.checkout, { state: [productData] });
  };
  const handleAddtoCart = (data) => {
    setIsProcessing(true);
    addProductToCart(data)
      .then((res) => {
        toast.success("Add to cart successfully");
        handleGetListProductsCart(MOCK_USER_ID, "cart");
        setIsProcessing(false);
      })
      .catch((err) => {
        toast.error(
          "Something went wrong, can not add product, try again later",
        );
      });
  };
  useEffect(() => {
    setIsLoading(true);
    getDetailProduct(id).then((data) => {
      setProductInfo(data);
      if (data?.size?.length > 0) {
        setSelectedSize(data?.size[0].name);
      }
      setIsLoading(false);
    });
  }, [id]);
  if (isLoading) return <ProductDetailSkeleton />;
  return (
    <div className={cx("container")}>
      {/* Left: Image Gallery */}
      <div className={cx("image-gallery")}>
        {productInfo?.images?.map((img, index) => (
          <div key={index} className={cx("image-item")}>
            <img
              src={img}
              onError={(e) => e.target.remove()}
              alt={`Product ${index}`}
            />
          </div>
        ))}
      </div>

      {/* Right: Product Info */}
      <div className={cx("product-info")}>
        <h1 className={cx("name")}>{productInfo.name}</h1>
        <p className={cx("price")}>${productInfo?.price?.toFixed(2)}</p>
        <p className={cx("description")}>{productInfo.description}</p>
        <div className={cx("size-selection")}>
          <p className={cx("size-title")}>Size: </p>
          <div className={cx("size-list")}>
            {productInfo?.size?.map((size, index) => (
              <button
                key={index}
                className={cx("size-item", {
                  active: selectedSize === size.name,
                  "out-of-stock": Number(size.amount) <= 0,
                })}
                onClick={() => setSelectedSize(size.name)}
              >
                {size.name}
              </button>
            ))}
          </div>
        </div>
        <div className={cx("actions-wrapper")}>
          <div className={cx("quantity-section")}>
            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
              -
            </button>
            <input
              className={cx("quantity-input")}
              type="number"
              value={quantity}
              readOnly
            />
            <button onClick={() => setQuantity((q) => q + 1)}>+</button>
          </div>
          <Button
            disabled={isProcessing}
            className={cx("add-to-cart")}
            leftIcon={isProcessing && <LoadingIcon />}
            onClick={() => {
              const data = {
                userId: MOCK_USER_ID,
                productId: productInfo._id,
                quantity: Number(quantity),
                size: selectedSize,
                isMultiple: false,
              };
              handleAddtoCart(data);
            }}
          >
            ADD TO CART
          </Button>
        </div>

        <div className={cx("or-separator")}>OR</div>
        <button
          className={cx("buy-now")}
          onClick={() => {
            const productData = {
              ...productInfo,
              userId: MOCK_USER_ID,
              size: selectedSize,
              total: Number(productInfo.price * quantity),
              quantity: Number(quantity),
            };
            handleBuyNow(productData);
          }}
        >
          BUY NOW
        </button>
        <PaymentMethods />
        <div className={cx("meta-data")}>
          <p>
            <strong>SKU:</strong> {productInfo.sku}
          </p>
          <p>
            <strong>Category:</strong> {productInfo.category}
          </p>
        </div>

        <div className={cx("additional-info")}>
          <details className={cx("info-item")} open>
            <summary className={cx("info-header")}>
              ADDITIONAL INFORMATION
            </summary>
            <div className={cx("info-content")}>
              <p>
                Size:{" "}
                {productInfo?.size?.reduce((acc, size, index) => {
                  return (
                    acc +
                    size.name +
                    (index === productInfo.size.length - 1 ? "" : ", ")
                  );
                }, "")}
              </p>
              <p>Material: Jeans, Polyester, Cotton</p>
            </div>
          </details>

          <details className={cx("info-item")}>
            <summary className={cx("info-header")}>REVIEWS (0)</summary>
            <div className={cx("info-content")}>No reviews yet.</div>
          </details>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
