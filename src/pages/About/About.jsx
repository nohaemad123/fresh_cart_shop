import { useTranslation } from "react-i18next";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import PageMetaData from "../../components/page_meta_data/PageMetaData";

import featured_image from "../../assets/about-img.jpg";
import about_image1 from "../../assets/about-icons-1.svg";
import about_image2 from "../../assets/about-icons-2.svg";
import about_image3 from "../../assets/about-icons-3.svg";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <PageMetaData
        title={t("about_us_page_title")}
        description={t("about_us_page_desc")}
      />

      <BreadCrumb thirdLink={t("about_us")} bg_gray="bg-mainColor" />

      {/* Future of Grocery Section */}
      <section className="py-20 w-[75%] mx-auto">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="rounded-tl-md rounded-bl-md h-full flex items-center">
                <div className="flex flex-col justify-center items-stretch space-y-3">
                  <h2 className="text-3xl font-bold">
                    {t("future_of_grocery")}
                  </h2>
                  <p className="text-gray-500">{t("future_of_grocery_desc")}</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              <img
                src={featured_image}
                className="w-full rounded-tr-md rounded-br-md h-full object-cover"
                alt="About us"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Get Started Section */}
      <section className="py-10 w-[80%] mx-auto">
        <div className="container">
          <h2 className="text-2xl font-bold">{t("ready_to_get_started")}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 mt-5">
            {/* Card 1 */}
            <div className="bg-gray-200 rounded-lg p-10 flex flex-col space-y-2">
              <img src={about_image1} className="size-30" alt="" />
              <h2 className="text-xl font-semibold">
                {t("ready_to_get_started")}
              </h2>
              <p className="text-gray-600">{t("ready_to_get_started_desc")}</p>
              <button className="w-fit bg-black py-2 px-3 rounded-md text-white">
                {t("freshcart_platform")}
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-200 rounded-lg p-10 flex flex-col space-y-2">
              <img src={about_image2} className="size-30" alt="" />
              <h2 className="text-xl font-semibold">
                {t("advertise_my_brand")}
              </h2>
              <p className="text-gray-600">{t("ready_to_get_started_desc")}</p>
              <button className="w-fit bg-black py-2 px-3 rounded-md text-white">
                {t("freshcart_ads")}
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-200 rounded-lg p-10 flex flex-col space-y-2">
              <img src={about_image3} className="size-30" alt="" />
              <h2 className="text-xl font-semibold">
                {t("learn_more_about_freshcart")}
              </h2>
              <p className="text-gray-600">{t("ready_to_get_started_desc")}</p>
              <button className="w-fit bg-black py-2 px-3 rounded-md text-white">
                {t("freshcart_platform")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Retailers Section */}
      <section className="py-20 bg-primary-700 text-white">
        <div className="container">
          <div className="flex flex-col space-y-3">
            <h3 className="text-2xl font-bold whitespace-pre-line">
              {t("trusted_by_retailers")}
            </h3>
            <p>{t("trusted_desc")}</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-5 mt-10">
            <div className="flex flex-col">
              <h3 className="text-5xl font-extrabold">500k</h3>
              <p>{t("shoppers")}</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-5xl font-extrabold">4,500+</h3>
              <p>{t("cities")}</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-5xl font-extrabold">40+</h3>
              <p>{t("stores")}</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-5xl font-extrabold">650+</h3>
              <p>{t("retail_brands")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
