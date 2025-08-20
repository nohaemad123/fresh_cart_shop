import { Link } from "react-router";
import empty_cart from "../../assets/undraw_empty-cart_574u.svg";
import { useTranslation } from "react-i18next";

export default function EmptyCart() {
  const { t } = useTranslation();

  return (
    <>
      <div className="p-5 mt-5">
        <div className="flex flex-col justify-center items-center space-y-5">
          <img src={empty_cart} alt="" className="w-80" />
          <h3 className="text-2xl text-primary-600 dark:text-primary-400 font-bold">
            {t("empty_cart_title")}
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            {t("empty_cart_desc")}
          </p>
          <Link
            to="/"
            className="py-2 px-3 border border-primary-600 dark:border-primary-400 
              bg-primary-600 dark:bg-primary-400 
              text-lg text-white dark:text-gray-900 
              font-semibold text-center rounded-md transition-colors duration-300 hover:opacity-90"
          >
            {t("continue_shopping")}
          </Link>
        </div>
      </div>
    </>
  );
}
