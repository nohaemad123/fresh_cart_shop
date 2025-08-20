import {
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OrderItem from "../../components/order_item/OrderItem";

import { useOrders } from "../../hooks/useOrders";
import OrdersSkeleton from "../../skeleton/OrdersSkeleton";
import PageMetaData from "../../components/page_meta_data/PageMetaData";
import EmptyOrders from "../../components/empty_orders/EmptyOrders";
import { useTranslation } from "react-i18next";

export default function Orders() {
  const { orders, isLoading } = useOrders();
  const { t } = useTranslation();

  if (isLoading) return <OrdersSkeleton />;
  return (
    <>
      <PageMetaData
        title={t("orders_title_page")}
        description={t("orders_title_page")}
      />
      <div className="flex flex-col lg:flex-row justify-between mb-5 items-center">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {t("my_orders")}
        </h3>
        <div className="flex flex-col lg:flex-row gap-x-5 mt-3">
          <select className="form-control min-w-30 bg-[#f3f4f6] dark:bg-gray-800 dark:text-gray-200 px-3 rounded-md mb-3 lg:mb-0">
            <option>{t("all_orders")} </option>
          </select>
          <div className="relative flex justify-center">
            <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none text-gray-500 dark:text-gray-400">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="form-control min-w-50 bg-[#f3f4f6] dark:bg-gray-800 dark:text-gray-200 rounded-md"
              placeholder={t("search_orders")}
            />
          </div>
        </div>
      </div>
      {!orders.length && <EmptyOrders />}

      {orders?.map((order) => (
        <OrderItem orderInfo={order} key={order._id} />
      ))}

      {orders.length && (
        <div className="flex justify-between items-center">
          <p className="text-gray-700 dark:text-gray-300">
            Showing 1-4 of 12 orders
          </p>
          <div>
            <ul className="flex gap-x-3">
              <li className="cursor-pointer font-semibold text-sm size-7 bg-gray-200/50 dark:bg-gray-700 flex justify-center items-center text-gray-600 dark:text-gray-300">
                <FontAwesomeIcon icon={faChevronLeft} />
              </li>
              <li className="cursor-pointer font-semibold text-sm size-7 bg-primary-600 flex justify-center items-center text-white">
                1
              </li>
              <li className="cursor-pointer font-semibold text-sm size-7 bg-gray-200/50 dark:bg-gray-700 flex justify-center items-center text-gray-600 dark:text-gray-300">
                2
              </li>
              <li className="cursor-pointer font-semibold text-sm size-7 bg-gray-200/50 dark:bg-gray-700 flex justify-center items-center text-gray-600 dark:text-gray-300">
                3
              </li>
              <li className="cursor-pointer font-semibold text-sm size-7 bg-gray-200/50 dark:bg-gray-700 flex justify-center items-center text-gray-600 dark:text-gray-300">
                <FontAwesomeIcon icon={faChevronRight} />
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
