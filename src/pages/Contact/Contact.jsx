import React from "react";
import { useTranslation } from "react-i18next";
import PageMetaData from "../../components/page_meta_data/PageMetaData";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <PageMetaData
        title={t("contact_page_meta_title")}
        description={t("contact_page_meta_title")}
      />
      <BreadCrumb thirdLink={t("contact_us")} bg_gray={"bg-mainColor"} />

      <section className="py-10 w-[60%] mx-auto">
        <div className="container">
          <h2 className="text-xl font-semibold mb-2">
            {t("retailer_inquiries")}
          </h2>
          <p>{t("retailer_inquiries_desc")}</p>

          <form className="mt-5">
            <div className="grid lg:grid-cols-2 space-y-5 lg:space-x-10">
              <div className="flex flex-col space-y-2">
                <label>
                  {t("first_name")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder={t("first_name_placeholder")}
                  className="form-control w-full border border-gray-300"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label>
                  {t("last_name")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder={t("last_name_placeholder")}
                  className="form-control w-full border border-gray-300"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2 mb-5">
              <label>
                {t("company")} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder={t("company_placeholder")}
                className="form-control w-full border border-gray-300"
              />
            </div>

            <div className="flex flex-col space-y-2 mb-5">
              <label>{t("title")}</label>
              <input
                type="text"
                placeholder={t("title_placeholder")}
                className="form-control w-full border border-gray-300"
              />
            </div>

            <div className="grid lg:grid-cols-2 space-y-5 lg:space-x-10">
              <div className="flex flex-col space-y-2">
                <label>
                  {t("email")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder={t("email_placeholder")}
                  className="form-control w-full border border-gray-300"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label>
                  {t("phone")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder={t("phone_placeholder")}
                  className="form-control w-full border border-gray-300"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2 mb-5">
              <label>{t("write_message")}</label>
              <textarea
                placeholder={t("additional_comments")}
                rows="5"
                className="form-control w-full border border-gray-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn flex gap-2 items-center text-center rounded-md py-2 px-3 justify-center bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-500"
            >
              {t("submit")}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
