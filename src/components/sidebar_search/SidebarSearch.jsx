import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useCategories } from "../../hooks/useCategories";
import { useBrands } from "../../hooks/useBrands";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { useSearchParams } from "react-router";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import ProductRating from "../product_rating/ProductRating";

export default function SidebarSearch() {
  const { categories } = useCategories();
  const { brands } = useBrands();
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();

  function filterProducts(values) {
    const query = {};
    if (values.category) query.category = values.category;
    if (values.brand) query.brand = values.brand;
    if (values.priceRange) {
      query.priceGreaterThan = values.priceRange[0];
      query.priceLessThan = values.priceRange[1];
    }

    setSearchParams(query);
    queryClient.invalidateQueries(["filteredProducts", query]);
  }

  const formik = useFormik({
    initialValues: {
      category: "",
      brand: "",
      priceRange: [0, 10000],
    },
    onSubmit: filterProducts,
  });

  useEffect(() => {
    const category = searchParams.get("category") || "";
    const brand = searchParams.get("brand") || "";
    const priceGreaterThan = Number(searchParams.get("priceGreaterThan")) || 0;
    const priceLessThan = Number(searchParams.get("priceLessThan")) || 10000;

    formik.setValues({
      category,
      brand,
      priceRange: [priceGreaterThan, priceLessThan],
    });
  }, [searchParams]);

  function resetFilters() {
    formik.setValues({
      category: "",
      brand: "",
      priceRange: [0, 10000],
    });
    setSearchParams({});
    queryClient.invalidateQueries(["filteredProducts", {}]);
  }

  return (
    <div className="bg-white dark:bg-gray-900 p-5 rounded-md shadow-sm">
      <form onSubmit={formik.handleSubmit}>
        {/* التصنيفات */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
            {t("categories")}
          </h3>
          {categories?.map((cat) => (
            <label
              key={cat._id}
              className="flex items-center space-x-2 mb-2 text-gray-700 dark:text-gray-300"
            >
              <input
                type="checkbox"
                checked={formik.values.category === cat._id}
                onChange={() =>
                  formik.setFieldValue(
                    "category",
                    formik.values.category === cat._id ? "" : cat._id
                  )
                }
              />
              <span>{cat.name}</span>
            </label>
          ))}
        </div>

        {/* السعر */}
        <div className="mt-2 border-t border-gray-300 dark:border-gray-700 pt-2">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
            {t("price_range")}
          </h3>
          <Slider
            range
            min={0}
            max={10000}
            value={formik.values.priceRange}
            onChange={(value) => formik.setFieldValue("priceRange", value)}
            trackStyle={[{ backgroundColor: "#16a34a", height: 6 }]}
            handleStyle={[
              {
                borderColor: "#aaa",
                height: 18,
                width: 18,
                opacity: 1,
              },
              {
                borderColor: "#aaa",
                height: 18,
                width: 18,
                opacity: 1,
              },
            ]}
            railStyle={{ backgroundColor: "#e5e7eb", height: 6 }}
          />
          <div className="flex justify-between text-sm mt-2 text-gray-700 dark:text-gray-300">
            <span>{formik.values.priceRange[0]} EGP</span>
            <span>{formik.values.priceRange[1]} EGP</span>
          </div>
        </div>

        <div className="mt-2 border-t border-gray-300 dark:border-gray-700 pt-2">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
            {t("brands")}
          </h3>
          {brands?.map((brand) => (
            <label
              key={brand._id}
              className="flex items-center space-x-2 mb-2 text-gray-700 dark:text-gray-300"
            >
              <input
                type="checkbox"
                checked={formik.values.brand === brand._id}
                onChange={() =>
                  formik.setFieldValue(
                    "brand",
                    formik.values.brand === brand._id ? "" : brand._id
                  )
                }
              />
              <span>{brand.name}</span>
            </label>
          ))}
        </div>

        <div className="mt-2 border-t border-gray-300 dark:border-gray-700 pt-2">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
            {t("ratings")}
          </h3>
          <label className="flex items-center space-x-2 mb-2 text-gray-700 dark:text-gray-300">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary-600"
            />
            <span className="text-md flex gap-x-2">
              <ProductRating rating={5} /> (42)
            </span>
          </label>
        </div>

        <div className="mt-2 border-t border-gray-300 dark:border-gray-700 pt-2">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
            {t("availability")}
          </h3>
          <label className="flex items-center space-x-2 mb-2 text-gray-700 dark:text-gray-300">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary-600"
            />
            <span className="text-md flex gap-x-2">{t("in_stock")} (42)</span>
          </label>
        </div>

        <div className="mt-2 border-t border-gray-300 dark:border-gray-700 pt-2">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
            {t("dietary_preferences")}
          </h3>
          <label className="flex items-center space-x-2 mb-2 text-gray-700 dark:text-gray-300">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary-600"
            />
            <span className="text-md flex gap-x-2">100% organic (42)</span>
          </label>
        </div>

        <div className="grid grid-cols-2 gap-x-3 mt-4">
          <button
            type="submit"
            className="py-2 cursor-pointer px-3 bg-primary-600 text-white rounded-md"
          >
            {t("apply_filter")}
          </button>
          <button
            type="button"
            onClick={resetFilters}
            className="py-2 cursor-pointer px-3 border border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 rounded-md"
          >
            {t("reset")}
          </button>
        </div>
      </form>
    </div>
  );
}
