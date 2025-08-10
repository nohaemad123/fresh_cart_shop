import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import ProductCard from "../product_card/ProductCard";
import { calcTimeLeft } from "../../utils/counterDown";
import { useProduct } from "../../hooks/useProduct";
import HomeDealsSkeleton from "../../skeleton/HomeDealsSkeleton";
import { useTranslation } from "react-i18next";

export default function HomeDeals() {
  const { products, isLoading } = useProduct();
  const { t } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  const [timeLeft, setTimeLeft] = useState({
    hour_left: 0,
    minute_left: 0,
    second_left: 0,
  });

  useEffect(() => {
    setInterval(() => {
      const newTimeLeft = calcTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);
  }, []);

  if (isLoading) {
    return <HomeDealsSkeleton />;
  }

  const deals = (products || [])
    .filter((product) => product.priceAfterDiscount)
    .slice(0, 4);

  return (
    <>
      <div className="py-10 ">
        <div className="container">
          <div className="flex flex-col space-y-2 md:flex-row justify-between items-center text-center">
            <h2 className="text-2xl font-bold">{t("deals_days")}</h2>
            <Link
              to=""
              className="flex items-center text-center text-primary-600"
            >
              {t("view_all_deals")}{" "}
              {lang === "en" ? (
                <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
              ) : (
                <FontAwesomeIcon icon={faArrowLeft} className="ms-2" />
              )}
            </Link>
          </div>
          <div className="flex gap-2 mb-5 mt-5 items-center">
            <h2 className="text-sm font-semibold">{t("offers_end")}</h2>
            <div className="counter flex gap-3 *:text-white *:flex *:justify-center *:item-center *:text-lg">
              <div className="size-8 bg-black">
                {String(timeLeft.hour_left).padStart(2, "0")}
              </div>
              :
              <div className="size-8 bg-black">
                {String(timeLeft.minute_left).padStart(2, "0")}
              </div>
              :
              <div className="size-8 bg-black">
                {String(timeLeft.second_left).padStart(2, "0")}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {deals &&
              deals.map((product) => (
                <ProductCard productInfo={product} key={product._id} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
