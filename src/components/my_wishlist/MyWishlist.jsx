import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import WishlistItem from "../wishlist_item/WishlistItem";
import EmptyWishlist from "../empty_wishlist/EmptyWishlist";

import { useWishlist } from "../../hooks/useWishlist";
import MyWishlistSkeleton from "../../skeleton/MyWishlistSkeleton";
import PageMetaData from "../page_meta_data/PageMetaData";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function MyWishlist() {
  const { wishlistProducts, isLoading } = useWishlist();
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
  const { t } = useTranslation();

  if (isLoading) return <MyWishlistSkeleton />;

  return (
    <>
      <PageMetaData
        title={t("wishlist_page.pageTitle")}
        description={t("wishlist_page.pageTitle")}
      />
      <div className=" py-5">
        {!wishlistProducts.length && <EmptyWishlist />}

        {wishlistProducts &&
          wishlistProducts.map((product) => (
            <div key={product._id}>
              <WishlistItem productInfo={product} />
            </div>
          ))}
        {wishlistProducts.length > 0 && (
          <div className="flex justify-center items-center mt-10">
            <ul className="flex gap-x-3">
              <li className="cursor-pointer font-semibold text-sm size-7 border border-gray-300 flex justify-center items-center text-gray-600 rounded-md">
                {lang === "en" ? (
                  <FontAwesomeIcon icon={faChevronLeft} />
                ) : (
                  <FontAwesomeIcon icon={faChevronRight} />
                )}{" "}
              </li>
              <li className="cursor-pointer font-semibold text-sm size-7 bg-primary-600 flex justify-center items-center text-white rounded-md">
                1
              </li>
              <li className="cursor-pointer font-semibold text-sm size-7  border border-gray-300 flex justify-center items-center text-gray-600 rounded-md">
                2
              </li>
              <li className="cursor-pointer font-semibold text-sm size-7  border border-gray-300 flex justify-center items-center text-gray-600 rounded-md">
                3
              </li>
              <li className="cursor-pointer font-semibold text-sm size-7 border border-gray-300 flex justify-center items-center text-gray-600 rounded-md">
                {lang === "en" ? (
                  <FontAwesomeIcon icon={faChevronRight} className="ms-2" />
                ) : (
                  <FontAwesomeIcon icon={faChevronLeft} className="ms-2" />
                )}{" "}
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
