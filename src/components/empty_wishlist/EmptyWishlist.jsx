import { Link } from "react-router";
import empty_wishlist from "../../assets/c8a48e3c-267e-449b-8e3f-2ffd9a3be408.png";
import { useTranslation } from "react-i18next";

export default function EmptyWishlist() {
  const { t } = useTranslation();

  return (
    <>
      <div className="p-5 mt-5">
        <div className="flex flex-col justify-center items-center space-y-2">
          <img src={empty_wishlist} alt="" className="w-100" />

          <Link
            to="/"
            className="py-2 px-3 border mb-5 bg-primary-600 text-lg text-white font-semibold text-center rounded-md 
                       hover:bg-primary-700 transition-colors 
                       dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
          >
            {t("continue_shopping")}
          </Link>
        </div>
      </div>
    </>
  );
}
