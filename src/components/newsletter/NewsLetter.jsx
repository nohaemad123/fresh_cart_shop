import { useTranslation } from "react-i18next";

export default function NewsLetter() {
  const { t } = useTranslation();

  return (
    <div className="bg-primary-100/50 dark:bg-gray-800 py-20">
      <div className="container">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            {t("newsletter_title")}
          </h2>
          <p className="text-gray-500 dark:text-gray-300">
            {t("newsletter_desc")}
          </p>
        </div>

        <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 max-w-md m-auto mt-6">
          <label htmlFor="newsletter-email" className="sr-only">
            {t("newsletter_email")}
          </label>
          <input
            id="newsletter-email"
            type="email"
            className="form-control md:h-10 bg-white dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 md:min-w-0 flex-1 ltr:rounded-tr-none ltr:rounded-br-none rtl:rounded-tl-none rtl:rounded-bl-none"
          />
          <button
            type="submit"
            className="bg-primary-600 dark:bg-primary-300 hover:bg-primary-700 px-6 md:h-10 text-white dark:text-gray-700 text-lg border-transparent ltr:rounded-tr-md ltr:rounded-br-md rtl:rounded-tl-md rtl:rounded-bl-md font-medium transition-colors"
          >
            {t("subscribe")}
          </button>
        </form>
      </div>
    </div>
  );
}
