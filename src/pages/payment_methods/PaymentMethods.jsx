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
      <h3 className="text-xl font-bold">{t("paymentMethods")}</h3>
      <div className="flex flex-col mt-5">
        <div className="flex gap-x-4 items-center border-b border-gray-300 pb-5 mb-5">
          <img
            src={cash_image}
            className="size-20 rounded-full border-3 border-gray-200"
          />
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold">{t("cashOnDelivery")}</h3>
            <p className="text-gray-500 text-sm">{t("payWhenArrives")}</p>
          </div>
        </div>
        <div className="flex gap-x-4 items-center">
          <img
            src={mastercardimg}
            className="size-20 rounded-full border-3 border-gray-200 object-content"
          />
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold">{t("onlinePayment")}</h3>
            <p className="text-gray-500 text-sm">{t("paySecurely")}</p>
          </div>
        </div>
      </div>
    </>
  );
}
