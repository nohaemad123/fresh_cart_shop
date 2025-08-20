import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../product_card/ProductCard";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useFilteredProducts } from "../../hooks/useFilteredProducts";
import RelatedProductsSkeleton from "../../skeleton/RelatedProductsSkeleton";
import { useTranslation } from "react-i18next";

export default function RelatedProducts({ productDetails }) {
  const { category } = productDetails;
  const { t } = useTranslation();
  const [lang] = useState(localStorage.getItem("lang") || "en");

  const { filteredProducts, isLoading } = useFilteredProducts({
    category: category._id,
  });

  if (isLoading) {
    return <RelatedProductsSkeleton />;
  }

  return (
    <>
      <div className="my-10 ">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {t("related_products")}
          </h3>
          <div className="buttons flex gap-x-2">
            <button className="related_prev_btn bg-gray-200/60 dark:bg-gray-700 cursor-pointer size-10 rounded-full flex flex-col text-center justify-center items-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              {lang === "en" ? (
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="ms-2 text-gray-700 dark:text-gray-200"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="ms-2 text-gray-700 dark:text-gray-200"
                />
              )}
            </button>
            <button className="related_next_btn bg-gray-200/60 dark:bg-gray-700 cursor-pointer size-10 rounded-full flex flex-col text-center justify-center items-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              {lang === "en" ? (
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="ms-2 text-gray-700 dark:text-gray-200"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="ms-2 text-gray-700 dark:text-gray-200"
                />
              )}
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          slidesPerView={4}
          className="mt-5"
          loop={true}
          navigation={{
            nextEl: ".related_next_btn",
            prevEl: ".related_prev_btn",
          }}
          spaceBetween={20}
        >
          {filteredProducts.map((product) => {
            return (
              <SwiperSlide key={product._id}>
                <ProductCard productInfo={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
