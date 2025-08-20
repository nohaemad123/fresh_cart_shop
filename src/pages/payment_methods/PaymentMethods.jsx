import { useTranslation } from "react-i18next";
import cash_image from "../../assets/images.jpg";
import mastercardimg from "../../assets/mastercard.webp";
import PageMetaData from "../../components/page_meta_data/PageMetaData";

export default function PaymentMethods() {
  const { t } = useTranslation();

  return (
    <>
      <PageMetaData
        title={t("payment_methods_title_page")}
        description={t("payment_methods_title_page")}
      />
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
        {t("paymentMethods")}
      </h3>
      <div className="flex flex-col mt-5">
        {/* Cash on delivery */}
        <div className="flex gap-x-4 items-center border-b border-gray-300 dark:border-gray-700 pb-5 mb-5">
          <img
            src={cash_image}
            className="size-20 rounded-full border-3 border-gray-200 dark:border-gray-600"
          />
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {t("cashOnDelivery")}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {t("payWhenArrives")}
            </p>
          </div>
        </div>
        {/* Online payment */}
        <div className="flex gap-x-4 items-center">
          <img
            src={mastercardimg}
            className="size-20 rounded-full border-3 border-gray-200 dark:border-gray-600 object-content"
          />
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {t("onlinePayment")}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {t("paySecurely")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
