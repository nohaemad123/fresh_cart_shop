import { useState } from "react";
import ReviewsTab from "./ReviewsTab";
import ShippingTab from "./ShippingTab";
import DescriptionTab from "./DescriptionTab";
import { useTranslation } from "react-i18next";

export default function ProductTabs({ productDetails }) {
  const { ratingsQuantity, description, ratingsAverage } = productDetails;
  const [activeTab, setActiveTab] = useState("details");
  const { t } = useTranslation();

  function getActiveTab() {
    switch (activeTab) {
      case "details":
        return <DescriptionTab description={description} />;
      case "reviews":
        return (
          <ReviewsTab
            ratingsQuantity={ratingsQuantity}
            ratingsAverage={ratingsAverage}
          />
        );
      case "shipping":
        return <ShippingTab />;
      default:
        return <DescriptionTab />;
    }
  }

  return (
    <>
      <div className="bg-white dark:bg-gray-900 rounded-lg my-10">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <div className="flex">
            <button
              onClick={() => setActiveTab("details")}
              className={`px-6 py-4 font-medium cursor-pointer transition-colors ${
                activeTab === "details"
                  ? "text-primary-600 border-b-2 border-primary-600 bg-primary-50 dark:bg-gray-800"
                  : "text-gray-600 dark:text-gray-300 border-b-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {t("product_info")}
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`px-6 py-4 font-medium cursor-pointer transition-colors ${
                activeTab === "reviews"
                  ? "text-primary-600 border-b-2 border-primary-600 bg-primary-50 dark:bg-gray-800"
                  : "text-gray-600 dark:text-gray-300 border-b-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {t("reviews_tabs")} ({ratingsQuantity})
            </button>
            <button
              onClick={() => setActiveTab("shipping")}
              className={`px-6 py-4 font-medium cursor-pointer transition-colors ${
                activeTab === "shipping"
                  ? "text-primary-600 border-b-2 border-primary-600 bg-primary-50 dark:bg-gray-800"
                  : "text-gray-600 dark:text-gray-300 border-b-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {t("shipping_returns")}
            </button>
          </div>
        </div>

        <div className="p-6 text-gray-800 dark:text-gray-200">
          {getActiveTab()}
        </div>
      </div>
    </>
  );
}
