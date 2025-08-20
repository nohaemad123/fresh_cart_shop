import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons";
import { useOrderDetails } from "../../hooks/useOrderDetails";
import OrderDetailsSkeleton from "../../skeleton/OrderDetailsSkeleton";
import PageMetaData from "../../components/page_meta_data/PageMetaData";
import { useTranslation } from "react-i18next";

export default function OrderDetails() {
  let { id } = useParams();
  const { order, isLoading } = useOrderDetails(id);
  const { t } = useTranslation();

  if (isLoading) return <OrderDetailsSkeleton />;
  return (
    <>
      <PageMetaData
        title={`Fresh cart - ${order.id} `}
        description="Fresh cart - my orders page"
      />
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col lg:flex-row gap-x-3 ">
          <h3 className="text-lg font-bold dark:text-gray-200">
            {t("order_id")} #{order.id}
          </h3>
          <span
            className={`${
              order.isDelivered
                ? "bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400"
                : "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"
            } px-2 py-1 rounded-full text-sm font-medium`}
          >
            {order.isDelivered ? t("delivered") : t("processing")}
          </span>
        </div>
        <h4 className="dark:text-gray-300">
          {t("placed_on")}{" "}
          {new Date(order?.createdAt).toLocaleDateString("en-us", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 mb-2 mt-5 gap-x-5">
        <div className="md:col-span-7 ">
          <div className="p-5 rounded-md border border-gray-300/70 dark:border-gray-600 dark:bg-gray-800 mb-3">
            <h3 className="text-lg font-bold dark:text-gray-100">
              {t("order_items")} (
              {order.cartItems.reduce((acc, item) => acc + item.count, 0)}{" "}
              {t("items")})
            </h3>
            {order.cartItems.map((item) => (
              <div key={item.product._id} className="mt-3 ">
                <div className="flex gap-x-3 items-center">
                  <img
                    src={item.product.imageCover}
                    className="w-12 h-12 min-w-[50px] min-h-[50px] object-cover rounded-lg border border-gray-200 dark:border-gray-600 p-1"
                  />
                  <div className="flex flex-col space-y-1">
                    <h4 className="text-primary-500 font-bold">
                      {item.product.category.name}
                    </h4>
                    <h3 className="text-[16px] font-bold dark:text-gray-200">
                      {item.product.title}
                    </h3>
                    <span className="text-gray-500 dark:text-gray-400">
                      {t("quantity")}: {item.count}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-md border border-gray-300/70 dark:border-gray-600 dark:bg-gray-800 mb-3">
            <h3 className="text-lg font-medium dark:text-gray-100">
              {t("order_summary")}
            </h3>
            <div className="flex justify-between mb-3 mt-3 dark:text-gray-300">
              <h3 className="text-[18px] font-medium">{t("subtotal")}</h3>
              <span>
                {order.totalOrderPrice} {t("egp")}
              </span>
            </div>
            <div className="flex justify-between mb-3 dark:text-gray-300">
              <h3 className="text-[18px] font-medium">{t("shipping_price")}</h3>
              <span>70 {t("egp")}</span>
            </div>
            <div className="flex justify-between mb-3 dark:text-gray-300">
              <h3 className="text-[18px] font-medium">{t("tax_price")}</h3>
              <span>
                {Math.trunc(order.totalOrderPrice * 0.14)} {t("egp")}
              </span>
            </div>
            <div className="flex justify-between mb-3 dark:text-gray-300">
              <h3 className="text-[18px] font-medium">{t("total")}</h3>
              <span>
                {Math.trunc(
                  order.totalOrderPrice + 70 + order.totalOrderPrice * 0.14
                )}{" "}
                {t("egp")}
              </span>
            </div>
            <div className="flex justify-between mb-3 dark:text-gray-300">
              <h3 className="text-[18px] font-medium">{t("payment_method")}</h3>
              <span>
                <FontAwesomeIcon
                  icon={faMoneyBill1Wave}
                  className="me-3 text-primary-600"
                />
                {order.paymentMethodType}
              </span>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 ">
          <div className="p-5 rounded-md border border-gray-300/70 dark:border-gray-600 dark:bg-gray-800">
            <h3 className="text-lg font-bold dark:text-gray-100">
              {t("user_details")}
            </h3>
            <div className="flex justify-between mt-3 dark:text-gray-300">
              <h3 className="text-[18px] rtl:text-[16px] font-medium">
                {t("name_input")}
              </h3>
              <span className="text-sm">{order.user.name}</span>
            </div>
            <div className="flex justify-between mt-3 dark:text-gray-300">
              <h3 className="text-[18px] rtl:text-[16px] font-medium">
                {t("email_address")}
              </h3>
              <span className="text-sm">{order.user.email}</span>
            </div>
            <div className="flex justify-between mt-3 dark:text-gray-300">
              <h3 className="text-[18px] rtl:text-[16px] font-medium">
                {t("phone")}
              </h3>
              <span>{order.user.phone}</span>
            </div>
          </div>

          {order?.shippingAddress && (
            <div className="p-5 rounded-md border border-gray-300/70 dark:border-gray-600 dark:bg-gray-800 mt-3">
              <h3 className="text-lg font-bold dark:text-gray-100">
                {t("shipping_address")}
              </h3>
              <div className="flex justify-between mt-3 dark:text-gray-300">
                <h3 className="text-[18px] rtl:text-[16px] font-medium">
                  {t("city")}
                </h3>
                <span className="text-sm">{order.shippingAddress.city}</span>
              </div>
              <div className="flex justify-between mt-3 dark:text-gray-300">
                <h3 className="text-[18px] rtl:text-[16px] font-medium">
                  {t("address")}
                </h3>
                <span className="text-sm">{order.shippingAddress.details}</span>
              </div>
              <div className="flex justify-between mt-3 dark:text-gray-300">
                <h3 className="text-[18px] rtl:text-[16px] font-medium">
                  {t("phone")}
                </h3>
                <span>{order.shippingAddress.phone}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="p-5 rounded-md border border-gray-300/70 dark:border-gray-600 dark:bg-gray-800">
        <h3 className="text-lg font-bold dark:text-gray-100">
          {t("add_notes")}
        </h3>
        <form className="mt-3">
          <textarea
            className="form-control w-full dark:text-gray-200 dark:border-gray-600"
            placeholder={t("add_notes")}
          ></textarea>
          <button
            type="submit"
            className="bg-primary-600 rounded-md px-3 py-2 cursor-pointer text-white font-bold mt-3"
          >
            {t("add_notes")}{" "}
          </button>
        </form>
      </div>
    </>
  );
}
