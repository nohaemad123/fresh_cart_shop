import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faCreditCard, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function OrderItem({ orderInfo }) {
  const { _id, cartItems, totalOrderPrice, shippingAddress } = orderInfo;
  const { t } = useTranslation();

  return (
    <>
      <div className="border border-gray-300 dark:bg-gray-900 dark:border-gray-700 rounded-lg mb-5">
        <div className="bg-mainColor dark:bg-gray-700 p-3">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col">
              <div className="flex gap-x-3">
                <h3 className="text-gray-900 dark:text-gray-100">
                  {t("order")} #{orderInfo?.id}
                </h3>
                <span
                  className={`${
                    orderInfo.isDelivered
                      ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                      : "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                  } px-2 py-1 rounded-full text-sm font-medium`}
                >
                  {orderInfo.isDelivered ? t("delivered") : t("processing")}
                </span>
              </div>
              <h4 className="text-gray-600 dark:text-gray-400">
                {t("placed_on")}{" "}
                {new Date(orderInfo?.createdAt).toLocaleDateString("en-us", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </h4>
            </div>
            <div className="flex gap-x-2">
              <Link
                to="/"
                className="text-primary-600 dark:text-primary-400 font-medium"
              >
                <FontAwesomeIcon icon={faRotateRight} className="me-1" />
                {t("reorder")}
              </Link>

              <Link
                to={`/account/order-details/${_id}`}
                className="text-gray-600 dark:text-gray-300 font-medium"
              >
                <FontAwesomeIcon icon={faEye} className="me-1" />
                {t("view_details")}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex p-2 flex-col space-y-3 lg:space-y-0 lg:flex-row justify-between gap-x-3">
          <div className="flex max-w-50 overflow-auto gap-y-3 gap-x-3 border-0 lg:border-r md:border-gray-300 rtl:lg:border-l rtl:lg:border-r-0 rtl:pl-5 rtl:pr-0 dark:md:border-gray-700 pr-5 flex-wrap">
            {cartItems.map((item) => (
              <div className="relative rounded-md" key={item.product._id}>
                <img
                  src={item.product.imageCover}
                  className="w-12 h-12 min-w-[50px] min-h-[50px] object-cover rounded-lg border border-gray-200 dark:border-gray-600 p-1"
                />
                <div className="absolute top-0 right-0 size-5 text-white bg-black dark:bg-gray-700 text-xs rounded-tr-md rounded-bl-md flex justify-center items-center">
                  {item.count}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm text-gray-500 dark:text-gray-400">
              {t("items_2")}
            </h3>
            <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
              {orderInfo.cartItems.reduce((acc, item) => acc + item.count, 0)}{" "}
              item
            </span>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm text-gray-500 dark:text-gray-400">
              {t("total_amount")}
            </h3>
            <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
              {totalOrderPrice} {t("egp")}
            </span>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm text-gray-500 dark:text-gray-400">
              {t("delivered_to")}
            </h3>
            <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
              {shippingAddress?.details}
            </span>
          </div>
          <div className="flex items-end flex-col border-0 lg:border-l rtl:lg:border-r rtl:lg:border-l-0 rtl:pr-5 rtl:pl-0 md:border-gray-300 dark:md:border-gray-700 pl-0 md:pl-5 space-y-3">
            <button className="py-2 px-2 bg-orange-600 border-transparent cursor-pointer text-sm font-semibold text-white text-center rounded-md">
              <FontAwesomeIcon icon={faCreditCard} className="me-2" />{" "}
              {t("complete_payment")}
            </button>
            <button className="py-2 px-2 border mb-5 text-white border-primary-600 bg-primary-600 w-fit text-sm font-semibold text-center rounded-md">
              {t("reorder_items")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
