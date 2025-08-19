import {
  faHeadset,
  faRotateLeft,
  faShieldHalved,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

export default function HomeService() {
  const { t } = useTranslation();

  return (
    <>
      <section className="py-15">
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-x-6 space-y-3 lg:space-y-0">
            <div className="flex gap-x-3 rounded-lg border border-gray-200 p-4 dark:border-gray-400">
              <div className="rounded_icon ">
                <FontAwesomeIcon icon={faTruckFast} />
              </div>
              <div className="flex flex-col justify-center space-y-2">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  {t("free_delivery")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("free_delivery_desc2")}
                </p>
              </div>
            </div>
            <div className="flex gap-x-3 rounded-lg border border-gray-200 p-4 dark:border-gray-400">
              <div className="rounded_icon ">
                <FontAwesomeIcon icon={faRotateLeft} />
              </div>
              <div className="flex flex-col justify-center space-y-2">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  {t("days_return")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("days_return_desc")}
                </p>
              </div>
            </div>
            <div className="flex gap-x-3 rounded-lg border border-gray-200 p-4 dark:border-gray-400">
              <div className="rounded_icon ">
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>
              <div className="flex flex-col justify-center space-y-2">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  {t("secure_payment")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("secure_payment_desc")}
                </p>
              </div>
            </div>
            <div className="flex gap-x-3 rounded-lg border border-gray-200 p-4 dark:border-gray-400">
              <div className="rounded_icon ">
                <FontAwesomeIcon icon={faHeadset} />
              </div>
              <div className="flex flex-col justify-center space-y-2">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  {t("support")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("support_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
