import { useTranslation } from "react-i18next";
import MyWishlist from "../../components/my_wishlist/MyWishlist";

export default function AccountWishlist() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between mb-3 items-center">
        <h3 className="text-xl font-bold dark:text-white">
          {t("my_wishlist")}
        </h3>
        <div className="flex flex-col lg:flex-row gap-x-5 mt-3">
          <select className="form-control min-w-30 bg-[#f3f4f6] dark:bg-gray-800 dark:text-gray-200 px-3 rounded-md mb-3 lg:mb-0">
            <option>{t("all_categories")} </option>
          </select>
          <div className="relative flex justify-center">
            <select className="form-control min-w-30 bg-[#f3f4f6] dark:bg-gray-800 dark:text-gray-200 px-3 rounded-md mb-3 lg:mb-0">
              <option>{t("sorted_added")} </option>
            </select>
          </div>
        </div>
      </div>
      <MyWishlist />
    </>
  );
}
