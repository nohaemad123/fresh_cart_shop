import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import featured_image from "../../assets/categories_page.svg";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export default function FeaturedCategories() {
  const { t } = useTranslation();

  return (
    <div className="bg-mainColor dark:bg-gray-900 py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="bg-primary-100/50 dark:bg-gray-800 rounded-tl-md rounded-bl-md p-10 h-full flex items-center">
              <div className="flex flex-col justify-center items-stretch space-y-3">
                <h5 className="text-primary-600 font-bold">
                  {t("featuredCategories.title")}
                </h5>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  {t("featuredCategories.subtitle")}
                </h2>
                <p className="text-gray-500 dark:text-gray-300">
                  {t("featuredCategories.description")}
                </p>
                <ul className="*:text-lg *:font-medium flex flex-col space-y-2 text-gray-900 dark:text-gray-100">
                  <li>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-primary-600 me-2"
                    />
                    {t("featuredCategories.features.certified")}
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-primary-600 me-2"
                    />
                    {t("featuredCategories.features.local")}
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-primary-600 me-2"
                    />
                    {t("featuredCategories.features.no_chemicals")}
                  </li>
                </ul>
                <button className="w-fit px-5 py-2 rounded-md cursor-pointer bg-primary-600 text-white text-lg inline-flex items-center">
                  {t("featuredCategories.button")}
                </button>
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <img
              src={featured_image}
              className="w-full ltr:rounded-tr-md ltr:rounded-br-md rtl:rounded-tl-md rtl:rounded-bl-md h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
