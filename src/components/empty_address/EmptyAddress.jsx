import React from "react";
import empty_address from "../../assets/undraw_delivery-address_409g.svg";
import { useTranslation } from "react-i18next";

export default function EmptyAddress() {
  const { t } = useTranslation();

  return (
    <>
      <div className="mt-5 flex flex-col justify-center items-center space-y-5">
        <img src={empty_address} alt="" className="w-80" />
        <h3 className="text-2xl text-primary-600 font-bold">
          {t("empty_address_title")}
        </h3>
        <p className="text-gray-500">{t("empty_address_desc")}</p>
      </div>
    </>
  );
}
