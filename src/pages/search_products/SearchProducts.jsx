import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import ProductCard from "../../components/product_card/ProductCard";
import ListProductCard from "../../components/list_product_card/ListProductCard";
import SidebarSearch from "../../components/sidebar_search/SidebarSearch";

import NoProducts from "../../components/no_products/NoProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faGrip,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { useFilteredProducts } from "../../hooks/useFilteredProducts";
import { useCategories } from "../../hooks/useCategories";
import { useBrands } from "../../hooks/useBrands";
import SearchProductsSkeleton from "../../skeleton/SearchProductsSkeleton";
import PageMetaData from "../../components/page_meta_data/PageMetaData";
import { useTranslation } from "react-i18next";

export default function SearchProducts() {
  const { categories } = useCategories();
  const { brands } = useBrands();
  const [searchParams, setSearchParams] = useSearchParams();
  const [view, setView] = useState("grid");
  const [categoryName, setCategoryName] = useState("");
  const [brandName, setBrandName] = useState("");
  const query = Object.fromEntries(searchParams.entries());
  const { t } = useTranslation();

  const { filteredProducts, isLoading, results } = useFilteredProducts(query);
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  useEffect(() => {
    if (categories?.length > 0 && searchParams.get("category")) {
      const found = categories.find(
        (c) => c._id === searchParams.get("category")
      );
      setCategoryName(found?.name || "");
    }

    if (brands?.length > 0 && searchParams.get("brand")) {
      const found = brands.find((b) => b._id === searchParams.get("brand"));
      setBrandName(found?.name || "");
    }
  }, [categories, brands, searchParams]);

  useEffect(() => {
    if (!query.page || !query.limit) {
      setSearchParams({
        ...query,
        page: query.page || 1,
        limit: query.limit || 9,
      });
    }
  }, [searchParams, setSearchParams]);

  if (isLoading) return <SearchProductsSkeleton />;

  return (
    <>
      <PageMetaData
        title={searchParams.get("category") ? categoryName : brandName}
        description={`Fresh cart - ${
          searchParams.get("category") ? categoryName : brandName
        }`}
      />
      <BreadCrumb
        secondLink={t("search_products")}
        thirdLink={searchParams.get("category") ? categoryName : brandName}
      />
      <div className="bg-mainColor dark:bg-gray-800 py-10">
        <div className="container">
          <h3 className="text-xl font-semibold flex flex-col space-y-3 lg:flex-row dark:text-gray-100">
            {t("search_results")}
            {searchParams.get("category") && (
              <>
                <p className="ms-2 me-2 mb-3 lg:mb-0 dark:text-gray-300">
                  {t("search_category")}:
                </p>
                <span className="text-primary-600 dark:text-primary-400">
                  {categoryName}
                </span>
              </>
            )}
            {searchParams.get("brand") && (
              <>
                <p className="ms-2 me-2 dark:text-gray-300">
                  {t("and")} {t("search_brand")}:
                </p>
                <span className="text-primary-600 dark:text-primary-400">
                  {brandName}
                </span>
              </>
            )}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            {t("we_found")} {filteredProducts?.length || 0}{" "}
            {t("products_for_you")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 mb-2 gap-x-10 mt-5">
            <div className="md:col-span-5 lg:col-span-3">
              <SidebarSearch />
            </div>
            <div className="md:col-span-7 lg:col-span-9">
              {!filteredProducts.length && searchParams.get("category") && (
                <NoProducts name={categoryName} />
              )}
              {!filteredProducts.length && searchParams.get("brand") && (
                <NoProducts name={brandName} />
              )}
              {filteredProducts.length > 0 && (
                <>
                  <div className="bg-white dark:bg-gray-900 p-5 rounded-md">
                    <div className="flex flex-col space-y-4 lg:flex-row justify-between items-center">
                      <div className="flex items-center gap-x-3">
                        <h3 className="text-lg font-medium dark:text-gray-100">
                          {t("view")}:
                        </h3>
                        <button
                          onClick={() => setView("grid")}
                          className={`${
                            view === "grid"
                              ? "bg-primary-600 text-white"
                              : "bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
                          } w-[35px] h-[40px] text-lg rounded-md cursor-pointer`}
                        >
                          <FontAwesomeIcon icon={faGrip} />
                        </button>
                        <button
                          onClick={() => setView("list")}
                          className={`${
                            view === "list"
                              ? "bg-primary-600 text-white"
                              : "bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
                          } w-[35px] h-[40px] text-lg rounded-md cursor-pointer`}
                        >
                          <FontAwesomeIcon icon={faList} />
                        </button>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <h3 className="text-lg font-medium dark:text-gray-100">
                          {t("sorted_by")}:
                        </h3>
                        <select className="form-control min-w-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">
                          <option>{t("relevance")}</option>
                          <option>{t("price")}</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {view === "grid" ? (
                    <div className="grid lg:grid-cols-3 gap-10 md:gap-5 lg:gap-10 mt-10">
                      {filteredProducts.map((product) => (
                        <ProductCard key={product._id} productInfo={product} />
                      ))}
                    </div>
                  ) : (
                    <div className="mt-5">
                      {filteredProducts.map((product) => (
                        <ListProductCard
                          key={product._id}
                          productInfo={product}
                        />
                      ))}
                    </div>
                  )}

                  <div className="flex justify-center items-center mt-10">
                    <ul className="flex gap-x-3">
                      <li
                        onClick={() => {
                          const current = +searchParams.get("page") || 1;
                          if (current > 1) {
                            setSearchParams({
                              ...Object.fromEntries(searchParams.entries()),
                              page: current - 1,
                            });
                          }
                        }}
                        className="cursor-pointer font-semibold text-sm size-7 border border-gray-300 dark:border-gray-600 flex justify-center items-center text-gray-600 dark:text-gray-300"
                      >
                        {lang === "en" ? (
                          <FontAwesomeIcon icon={faChevronLeft} />
                        ) : (
                          <FontAwesomeIcon icon={faChevronRight} />
                        )}{" "}
                      </li>

                      {Number.isInteger(results?.numberOfPages) &&
                        results.numberOfPages > 0 &&
                        [...Array(results.numberOfPages).keys()].map((i) => {
                          const page = i + 1;
                          return (
                            <li
                              key={page}
                              onClick={() =>
                                setSearchParams({
                                  ...Object.fromEntries(searchParams.entries()),
                                  page,
                                })
                              }
                              className={`cursor-pointer font-semibold text-sm size-7 border border-gray-300 dark:border-gray-600 flex justify-center items-center ${
                                +searchParams.get("page") === page
                                  ? "bg-primary-600 text-white  dark:bg-primary-400 dark:text-gray-900"
                                  : "text-gray-600 dark:text-gray-300"
                              }`}
                            >
                              {page}
                            </li>
                          );
                        })}

                      <li
                        onClick={() => {
                          const current = +searchParams.get("page") || 1;
                          if (current < results?.numberOfPages) {
                            setSearchParams({
                              ...Object.fromEntries(searchParams.entries()),
                              page: current + 1,
                            });
                          }
                        }}
                        className="cursor-pointer font-semibold text-sm size-7 border border-gray-300 dark:border-gray-600 flex justify-center items-center text-gray-600 dark:text-gray-300"
                      >
                        {lang === "en" ? (
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            className="ms-2"
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faChevronLeft}
                            className="ms-2"
                          />
                        )}{" "}
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
