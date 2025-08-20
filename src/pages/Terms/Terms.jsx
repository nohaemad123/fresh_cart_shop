import React from "react";
import { useTranslation } from "react-i18next";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import PageMetaData from "../../components/page_meta_data/PageMetaData";
import terms_image from "../../assets/undraw_terms_sx63.svg";

export default function Terms() {
  const { t } = useTranslation();

  return (
    <>
      <PageMetaData
        title={t("terms_page_meta_title")}
        description={t("terms_page_meta_title")}
      />
      <BreadCrumb thirdLink={t("privacy_policy")} />

      <div className="py-20 bg-mainColor dark:bg-gray-900">
        <div className="container">
          <div className="w-[80%] mx-auto">
            <img
              src={terms_image}
              className="w-full"
              alt={t("terms_image_alt")}
            />
            <div className="flex flex-col my-10 space-y-2">
              <h3 className="text-primary-600 dark:text-primary-400 text-2xl font-bold">
                {t("terms_of_services_title")}
              </h3>
              <p className="text-gray-500 dark:text-gray-300">
                {t("terms_of_services_desc")}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 space-y-5 lg:space-x-10">
              {/* Acceptance of Terms */}
              <div className="flex flex-col space-y-2 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
                <h3 className="text-primary-600 dark:text-primary-400 text-[18px] font-bold">
                  {t("acceptance_of_terms_title")}
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  {t("acceptance_of_terms_desc")}
                </p>
              </div>

              {/* Products & Pricing */}
              <div className="flex flex-col space-y-2 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
                <h3 className="text-primary-600 dark:text-primary-400 text-[18px] font-bold">
                  {t("products_pricing_title")}
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  {t("products_pricing_desc")}
                </p>
              </div>

              {/* Orders */}
              <div className="flex flex-col space-y-2 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
                <h3 className="text-primary-600 dark:text-primary-400 text-[18px] font-bold">
                  {t("orders_title")}
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  {t("orders_desc")}
                </p>
              </div>

              {/* Payments */}
              <div className="flex flex-col space-y-2 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
                <h3 className="text-primary-600 dark:text-primary-400 text-[18px] font-bold">
                  {t("payments_title")}
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  {t("payments_desc")}
                </p>
              </div>

              {/* Shipping & Delivery */}
              <div className="flex flex-col space-y-2 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
                <h3 className="text-primary-600 dark:text-primary-400 text-[18px] font-bold">
                  {t("shipping_delivery_title")}
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  {t("shipping_delivery_desc")}
                </p>
              </div>

              {/* Returns & Refunds */}
              <div className="flex flex-col space-y-2 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
                <h3 className="text-primary-600 dark:text-primary-400 text-[18px] font-bold">
                  {t("returns_refunds_title")}
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  {t("returns_refunds_desc")}
                </p>
              </div>

              {/* User Responsibilities */}
              <div className="flex flex-col space-y-2 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
                <h3 className="text-primary-600 dark:text-primary-400 text-[18px] font-bold">
                  {t("user_responsibilities_title")}
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  {t("user_responsibilities_desc")}
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="flex flex-col space-y-2 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
                <h3 className="text-primary-600 dark:text-primary-400 text-[18px] font-bold">
                  {t("limitation_liability_title")}
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  {t("limitation_liability_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
