import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import ProductCard from "../product_card/ProductCard";
import { useProduct } from "../../hooks/useProduct";
import HomeFeaturedProductsSkeleton from "../../skeleton/HomeFeaturedProductsSkeleton";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function HomeFeaturedProducts() {
  const { products, isLoading } = useProduct();
  const { t } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  if (isLoading) {
    return <HomeFeaturedProductsSkeleton />;
  }
  return (
    <>
      <div className="py-10 ">
        <div className="container">
          <div className="flex flex-col space-y-2 md:flex-row justify-between items-center text-center">
            <h2 className="text-2xl font-bold dark:text-gray-200">
              {t("featured_products")}
            </h2>
            <Link
              to=""
              className="flex items-center dark:text-primary-300 text-primary-600"
            >
              {t("view_products")}{" "}
              {lang === "en" ? (
                <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
              ) : (
                <FontAwesomeIcon icon={faArrowLeft} className="ms-2" />
              )}{" "}
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
            {products &&
              products.map((product) => (
                <ProductCard productInfo={product} key={product._id} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
