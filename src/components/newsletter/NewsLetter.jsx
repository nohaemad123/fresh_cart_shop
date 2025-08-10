import { useTranslation } from "react-i18next";

export default function NewsLetter() {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-primary-100/50 py-20">
        <div className="container">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-semibold">{t("newsletter_title")}</h2>
            <p className="text-gray-400">{t("newsletter_desc")}</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:w-50 m-auto mt-5 justify-center lg:space-y-0">
            <input
              type="text"
              className="form-control md:h-10 bg-white md:min-w-100 ltr:rounded-tr-none ltr:rounded-br-none rtl:rounded-tl-none rtl:rounded-bl-none"
            />
            <button className="bg-primary-600 px-4 md:h-10 text-white text-lg border-transparent ltr:rounded-tr-md ltr:rounded-br-md rtl:rounded-tl-md rtl:rounded-bl-md font-medium">
              {t("subscribe")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
