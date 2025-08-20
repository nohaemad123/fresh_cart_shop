import { faGrip, faList } from "@fortawesome/free-solid-svg-icons";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoryCard from "../../components/category_card/CategoryCard";

import ListCategoryCard from "../../components/list_category_card/ListCategoryCard";
import Subcategories from "../../components/subcategories/Subcategories";
import FeaturedCategories from "../../components/featured_categories/FeaturedCategories";
import NewsLetter from "../../components/newsletter/NewsLetter";
import SeasonalCategories from "../../components/seasonal_categories/SeasonalCategories";
import { useCategories } from "../../hooks/useCategories";
import CategoriesSkeleton from "../../skeleton/CategoriesSkeleton";
import PageMetaData from "../../components/page_meta_data/PageMetaData";
import { useTranslation } from "react-i18next";

export default function Categories() {
  const [view, setView] = useState("grid");
  const { categories, isLoading } = useCategories();
  const { t } = useTranslation();

  if (isLoading) return <CategoriesSkeleton />;
  return (
    <>
      <PageMetaData
        title={t("categories_title")}
        description={t("categories_title")}
      />
      <BreadCrumb thirdLink={t("categories")} />
      <div className="p-10 bg-white dark:bg-gray-800">
        <div className="container">
          <div className="flex flex-col space-y-4 lg:flex-row justify-between items-center">
            <div className="flex flex-col space-y-3">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t("shop_category")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t("shop_category_desc")}
              </p>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 justify-between items-center">
              <div className="flex items-center gap-x-5">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {t("sorted_by")}:
                </h3>
                <select className="form-control min-w-40 dark:bg-gray-800 dark:text-white">
                  <option>{t("featured")}</option>
                </select>
              </div>

              <div className="flex gap-x-5">
                <button
                  onClick={() => setView("grid")}
                  className={`${
                    view == "grid"
                      ? "bg-primary-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 dark:text-white"
                  } w-[35px] h-[40px] cursor-pointer text-lg rounded-md`}
                >
                  <FontAwesomeIcon icon={faGrip} />
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`${
                    view == "list"
                      ? "bg-primary-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 dark:text-white"
                  } w-[35px] h-[40px] cursor-pointer text-lg rounded-md`}
                >
                  <FontAwesomeIcon icon={faList} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 bg-mainColor dark:bg-gray-950">
        <div className="container">
          {view === "grid" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5">
              {categories &&
                categories.map((category) => (
                  <div className="rounded-md" key={category._id}>
                    <CategoryCard categoryInfo={category} />
                  </div>
                ))}
            </div>
          ) : (
            <div className="mt-5">
              {categories.map((category) => (
                <ListCategoryCard key={category._id} categoryInfo={category} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Subcategories />
      <FeaturedCategories />
      <SeasonalCategories />
      <NewsLetter />
    </>
  );
}
