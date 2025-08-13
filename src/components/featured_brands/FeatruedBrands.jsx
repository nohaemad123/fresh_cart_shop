import { useEffect, useState } from "react";

import { Link } from "react-router";
import FeaturedBrandCard from "../featured_brand_card/FeaturedBrandCard";
import { useBrands } from "../../hooks/useBrands";
import FeaturedBrandsSkeleton from "../../skeleton/FeaturedBrandsSkeleton";
import { useTranslation } from "react-i18next";

export default function FeaturedBrands() {
  const { brands, isLoading } = useBrands({ limit: 3 });
  const { t } = useTranslation();

  if (isLoading) return <FeaturedBrandsSkeleton />;

  return (
    <>
      <div className="">
        <h3 className="text-2xl font-bold">{t("featured_brands")}</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-x-10 gap-y-5 mt-5">
          {brands &&
            brands.map((brand) => (
              <div className="rounded-md" key={brand._id}>
                <FeaturedBrandCard brandInfo={brand} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
