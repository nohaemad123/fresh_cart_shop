import { useContext } from "react";
import { addressContext } from "../../context/Address.context";
import { useTranslation } from "react-i18next";

export default function AddressCard({ addressInfo }) {
  const { _id, name, city, phone, details } = addressInfo;
  const { DeleteAddress } = useContext(addressContext);
  const { t } = useTranslation();

  return (
    <>
      <div className="border border-gray-300 rounded-lg p-5">
        <div className="flex flex-col space-y-5">
          <div className="flex justify-between">
            <span className="text-lg rtl:text-[16px] text-primary-600 font-bold">
              {t("name_input")}:
            </span>
            <span>{name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg rtl:text-[16px] text-primary-600 font-bold">
              {t("city")}:
            </span>
            <span>{city}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg rtl:text-[16px] text-primary-600 font-bold">
              {t("phone")}:
            </span>
            <span>{phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg rtl:text-[16px] text-primary-600 font-bold">
              {t("details")}:
            </span>
            <span>{details}</span>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => DeleteAddress(_id)}
              className="mt-3 w-fit py-2 px-3 bg-red-600 border-transparent cursor-pointer  text-sm font-semibold text-white text-center rounded-md"
            >
              Delete address
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
