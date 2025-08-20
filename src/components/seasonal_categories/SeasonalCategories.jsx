import React from "react";
import CategoryCard from "../category_card/CategoryCard";
import { useCategories } from "../../hooks/useCategories";
import SeasonalCategoriesSkeleton from "../../skeleton/SeasonalCategoriesSkeleton";
import { useTranslation } from "react-i18next";

export default function SeasonalCategories() {
  const { categories, isLoading } = useCategories({ limit: 3 });
  const { t } = useTranslation();

  if (isLoading) return <SeasonalCategoriesSkeleton />;

  return (
    <div className="py-10 bg-white dark:bg-gray-900">
      <div className="container">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          {t("seasonal_categories")}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 mt-5">
          {categories &&
            categories.map((category) => (
              <div className="rounded-md" key={category._id}>
                <CategoryCard categoryInfo={category} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
