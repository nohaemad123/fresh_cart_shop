import { useTranslation } from "react-i18next";

export default function ShippingTab() {
  const { t } = useTranslation();

  return (
    <>
      <div className="">
        <h3 className="text-lg font-semibold mb-3"> {t("shipping_returns")}</h3>
        <div className="grid  grid-cols-1 md:grid-cols-2">
          <div>
            <h4 className="mb-3 font-small">{t("shipping_information")}</h4>

            <div className="grid grid-cols-1 md:grid-cols-3 mb-2">
              <div className="md:col-span-1">
                <h3>{t("standard")}: </h3>
              </div>
              <div className="md:col-span-2">
                <p>{t("standard_desc")} ($499)</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mb-2">
              <div className="md:col-span-1">
                <h3>{t("express")}: </h3>
              </div>
              <div className="md:col-span-2">
                <p>{t("express_desc")} (9.99 EGP)</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mb-2">
              <div className="md:col-span-1">
                <h3>{t("free_shipping")}: </h3>
              </div>
              <div className="md:col-span-2">
                <p>{t("free_delivery_desc2")}</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-small">{t("return_policy")}</h4>

            <div className="grid grid-cols-1 md:grid-cols-3 mb-2">
              <div className="md:col-span-1">
                <h3>{t("time_limit")}: </h3>
              </div>
              <div className="md:col-span-2">
                <p>{t("time_limit_desc")}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mb-2">
              <div className="md:col-span-1">
                <h3>{t("condition")}: </h3>
              </div>
              <div className="md:col-span-2">
                <p>{t("condition_desc")}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mb-2">
              <div className="md:col-span-1">
                <h3>{t("refund")}: </h3>
              </div>
              <div className="md:col-span-2">
                <p>{t("refund_desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
