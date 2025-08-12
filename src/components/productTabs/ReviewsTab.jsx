import React from "react";
import ProductRating from "../product_rating/ProductRating";
import { useTranslation } from "react-i18next";

export default function ReviewsTab({ ratingsAverage, ratingsQuantity }) {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-lg font-semibold">{t("customer_reviews")}</h3>
        <button className="bg-primary-600 text-white cursor-pointer px-3 py-2 text-sm font-semibold rounded-md">
          {t("write_review")}
        </button>
      </div>
      <div className="mb-5">
        <div className="flex justify-between items-center mb-2">
          <div className="flex gap-x-3">
            <ProductRating rating={ratingsAverage} />
            <span className="font-medium">
              {ratingsAverage} {t("out_5")}
            </span>
          </div>
        </div>
        <p>
          {t("based_on")} {ratingsQuantity} {t("reviews")}
        </p>
      </div>
      <div className="mb-5">
        <div className="flex justify-between items-center mb-2">
          <div className="flex flex-col md:flex-row gap-x-3">
            <ProductRating rating={5} />
            <span className="font-medium">John D.</span>
          </div>
          <span>{t("review1_date")}</span>
        </div>
        <p>"{t("review1")}"</p>
      </div>
      <div>
        <div className="flex justify-between items-center mb-2">
          <div className="flex flex-col md:flex-row gap-x-3">
            <ProductRating rating={4} />
            <span className="font-medium">Sarah m.</span>
          </div>
          <span>{t("review2_date")}</span>
        </div>
        <p>"{t("review2")}"</p>
      </div>
    </>
  );
}
