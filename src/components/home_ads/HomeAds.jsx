import image1 from "../../assets/healthy-vegetables-wooden-table.jpg";
import image2 from "../../assets/Dairy-Products.jpeg";
import { useTranslation } from "react-i18next";

export default function HomeAds() {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-mainColor py-10 dark:bg-gray-800">
        <div className="container">
          <div className="grid grid-cols-1 space-y-5 md:grid-cols-2 lg:space-y-0 gap-x-10">
            <div
              style={{
                backgroundImage: `url('${image1}')`,
                backgroundSize: "cover",
                width: "100%",

                backgroundPosition: "center center",
              }}
              className="rounded-md"
            >
              <div className="overlay inset-0 rounded-md bg-gradient-to-r from-primary-600/80 to-primary-600/30 p-8 ">
                <div className="container flex flex-col space-y-4 text-white">
                  <h2 className="text-2xl font-bold">
                    {t("organic_vegetables")}
                  </h2>
                  <p className="text-lg">{t("organic_vegetables_desc")} </p>
                  <button className="btn dark:bg-gray-900 dark:text-primary-300 max-w-40 bg-white border border-transparent text-primary-600 rounded-lg py-2 px-3 hover:bg-transparent hover:border-white hover:text-white transition-all duration-500">
                    {t("shop_now")}
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url('${image2}')`,
                backgroundSize: "cover",
                width: "100%",
                backgroundPosition: "center center",
              }}
              className="rounded-md"
            >
              <div className="overlay inset-0 rounded-md bg-gradient-to-r from-primary-600/80 to-primary-600/30 p-8 ">
                <div className="container flex flex-col space-y-4 text-white">
                  <h2 className="text-2xl font-bold">{t("fresh_products")}</h2>
                  <p className="text-lg">{t("fresh_products_desc")}</p>
                  <button className="btn max-w-40 dark:bg-gray-900 dark:text-primary-300 bg-white border border-transparent text-primary-600 rounded-lg py-2 px-3 hover:bg-transparent hover:border-white hover:text-white transition-all duration-500">
                    {t("shop_now")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
