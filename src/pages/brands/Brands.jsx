import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import FeaturedBrands from "../../components/featured_brands/FeatruedBrands";
import BrandCard from "../../components/brand_card/BrandCard";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BrandPartner from "../../components/brand_partners/BrandPartner";
import { useBrands } from "../../hooks/useBrands";
import BrandsSkeleton from "../../skeleton/BrandsSkeleton";
import PageMetaData from "../../components/page_meta_data/PageMetaData";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Brands() {
  const { brands, isLoading } = useBrands();
  const { t } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  if (isLoading) return <BrandsSkeleton />;
  return (
    <>
      <PageMetaData
        title={t("brands_title_page")}
        description={t("brands_title_page")}
      />
      <BreadCrumb thirdLink={t("brands")} />
      <div className="py-5">
        <div className="container">
          <div className="text-center flex flex-col space-y-3">
            <h3 className="text-3xl font-bold">{t("brands_title")}</h3>
            <p className="w-[100%] lg:w-[50%] m-auto text-gray-500">
              {t("brands_desc")}
            </p>
          </div>
        </div>
      </div>
      <div className="py-10 bg-mainColor">
        <div className="container">
          <FeaturedBrands />
        </div>
      </div>

      <div className="py-10 bg-mainColor">
        <div className="container">
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 justify-between items-center mb-10">
            <div className="flex">
              <input
                type="text"
                placeholder={t("search_brands")}
                className="form-control min-w-70 bg-white"
              />
            </div>
            <div className="flex items-center gap-x-4">
              <h4>{t("sorted_by")}:</h4>
              <select className="form-control min-w-50 bg-white">
                <option>{t("aphabitical")}</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-5 md:gap-10">
            {brands &&
              brands.map((brand) => (
                <BrandCard key={brand._id} brandInfo={brand} />
              ))}
          </div>
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
        </div>
      </div>

      <BrandPartner />
    </>
  );
}
