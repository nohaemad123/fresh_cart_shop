import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { getAllProductsApi } from "../../services/products-service";

import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../product_card/ProductCard";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useFilteredProducts } from "../../hooks/useFilteredProducts";
import RelatedProductsSkeleton from "../../skeleton/RelatedProductsSkeleton";

export default function RelatedProducts({ productDetails }) {
  const { category } = productDetails;

  const { filteredProducts, isLoading } = useFilteredProducts({
    category: category._id,
  });

  if (isLoading) {
    return <RelatedProductsSkeleton />;
  }

  return (
    <>
      <div className="my-10">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold">You may also like</h3>
          <div className="buttons flex gap-x-2">
            <button className="related_prev_btn bg-gray-200/40 cursor-pointer size-10 rounded-full flex flex-col text-center justify-center items-center">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className=" text-sm text-primary-600 "
              />
            </button>
            <button className="related_next_btn bg-gray-200/40 cursor-pointer size-10 rounded-full flex flex-col text-center justify-center items-center">
              <FontAwesomeIcon
                icon={faChevronRight}
                className=" text-sm text-primary-600 "
              />
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
