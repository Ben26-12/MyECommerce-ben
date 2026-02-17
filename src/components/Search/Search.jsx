import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Search.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { SearchContext } from "@/contexts/SearchProvider";
import config from "@/config";
import Button from "@/components/Button";
import { getProduct } from "@/apiServices/productService";
import useDebounce from "@/components/Search/useDebounce";
import ProductCard from "@/components/ProductCard";
const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [totalProducts, setTotalProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const { isOpenSearch, closeSearch } = useContext(SearchContext);
  const navigate = useNavigate();
  const handleManualSearch = () => {
    setLoading(true);
    const data = totalProducts.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
    setDisplayProducts(data);
    setLoading(false);
  };
  const debounceValue = useDebounce(searchValue, 1000);
  useEffect(() => {
    //chặn cuộn khi searchOpen
    if (isOpenSearch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpenSearch]);
  useEffect(() => {
    //gọi api lấy mảng products
    //chỉ gọi api lần đầu
    if (isOpenSearch) {
      getProduct({
        sortType: 1,
        page: 1,
        limit: 14,
      })
        .then((res) => {
          setTotalProducts(res.data.contents ?? res);
          console.log(res.data.contents);
        })
        .catch((err) => console.log(err));
    }
  }, [isOpenSearch]);
  //debounce value thay đổi thì filter để lấy các product cuối cùng
  useEffect(() => {
    if (debounceValue === "") {
      setDisplayProducts([]);
    } else {
      const data = totalProducts.filter((product) =>
        product.name.toLowerCase().includes(debounceValue.toLowerCase()),
      );
      setDisplayProducts(data);
    }
    setLoading(false);
  }, [debounceValue, totalProducts]);

  const handleViewAll = () => {
    closeSearch();
    navigate(config.routes.shop);
  };

  return (
    <div
      className={cx("wrapper", {
        active: isOpenSearch,
      })}
    >
      <div className={cx("overlay")} onClick={closeSearch} />

      <div className={cx("content-wrapper")}>
        <div className={cx("content")}>
          <button className={cx("close-main-btn")} onClick={closeSearch}>
            <FontAwesomeIcon icon={faXmark} />
          </button>

          <div className={cx("header")}>
            <h2 className={cx("title")}>What Are You Looking For?</h2>
          </div>
          <div className={cx("search-box")}>
            <div className={cx("input-wrapper")}>
              <input
                type="text"
                placeholder="Search for products..."
                value={searchValue}
                onChange={(e) => {
                  if (e.target.value.startsWith(" ")) {
                    setSearchValue("");
                  } else {
                    setSearchValue(e.target.value);
                    if (e.target.value.trim() === debounceValue) {
                      setLoading(false);
                    } else {
                      setLoading(true);
                    }
                  }
                }}
                autoFocus
              />
              {loading ? (
                <FontAwesomeIcon
                  icon={faSpinner}
                  className={cx("loading-icon")}
                  spin
                />
              ) : (
                searchValue && (
                  <button
                    className={cx("clear-btn")}
                    onClick={() => setSearchValue("")}
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                )
              )}
            </div>
            <Button onClick={handleManualSearch} className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <span className={cx("search-text")}>SEARCH</span>
            </Button>
          </div>
        </div>
        <div className={cx("search-products")}>
          {displayProducts.map((product) => (
            <div key={product._id} className={cx("product-item")}>
              <ProductCard item={product} />
            </div>
          ))}

          {searchValue && displayProducts.length === 0 && !loading && (
            <div className={cx("no-result")}>
              No products found for "{searchValue}"
            </div>
          )}
        </div>
        <div className={cx("footer")}>
          <button className={cx("view-all-btn")} onClick={handleViewAll}>
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
