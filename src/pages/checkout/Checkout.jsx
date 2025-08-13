import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import {
  faArrowLeft,
  faArrowRight,
  faChevronLeft,
  faChevronRight,
  faCreditCard,
  faInfoCircle,
  faLock,
  faMoneyBill1Wave,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router";
import americanimg from "../../assets/American-Express-Color.png";
import mastercardimg from "../../assets/mastercard.webp";
import paypalimg from "../../assets/paypal.png";
import { useCart } from "../../hooks/useCart";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

import { paymentCheckout } from "../../services/payment-service";
import { useQueryClient } from "@tanstack/react-query";
import CheckoutSkeleton from "../../skeleton/CheckoutSkeleton";
import PageMetaData from "../../components/page_meta_data/PageMetaData";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Checkout() {
  const { cartProducts, cartId, isLoading, totalCartPrice } = useCart();
  const phoneRegex = /^01[0-2,5]{1}[0-9]{8}$/;
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  async function handleCreateOrder(values) {
    try {
      const response = await paymentCheckout({
        cartId,
        shippingAddress: values.shippingAddress,
        paymentMethod: values.paymentMethod,
      });

      if (response.success) {
        if (response.data.session) {
          toast.loading(t("online_payment_done"));
          setTimeout(() => {
            location.href = response.data.session.url;
          }, 3000);
        } else {
          toast.success(t("cash_done"));
          setTimeout(() => {
            navigate("/account/orders");
          }, 3000);
          queryClient.invalidateQueries(["cartProducts"]);
        }
      }
    } catch (error) {
      toast.error(error.message);
      setIsExistError(error.message);
    }
  }
  const validationSchema = yup.object({
    paymentMethod: yup.string().required(t("payment_method_msg")),
    shippingAddress: yup.object({
      city: yup.string().required(t("city_required")),
      details: yup.string().required(t("details_required")),
      phone: yup
        .string()
        .matches(phoneRegex, t("phone_invalid"))
        .required(t("phone_required")),
    }),
  });
  const formik = useFormik({
    initialValues: {
      paymentMethod: "online",
      shippingAddress: {
        details: "",
        phone: "",
        city: "",
      },
    },
    validationSchema,
    onSubmit: handleCreateOrder,
  });

  function handlePaymentChange(event) {
    formik.setFieldValue("paymentMethod", event);
  }

  if (isLoading) return <CheckoutSkeleton />;
  return (
    <>
      <PageMetaData
        title={t("checkout_title")}
        description={t("checkout_title")}
      />
      <BreadCrumb thirdLink={t("checkout")} />
      <div className="bg-mainColor py-10">
        <div className="container m-auto">
          <h3 className="text-xl font-bold">{t("checkout")} </h3>
          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-12 mb-2 gap-x-5 mt-5">
              <div className="md:col-span-8 ">
                <div className="bg-white p-5 rounded-lg mb-10 shadow-sm">
                  <h3 className="text-xl font-bold mb-5">
                    {t("payment_methods")}{" "}
                  </h3>

                  <div className="flex flex-col mb-5">
                    <label
                      htmlFor="cash"
                      className={`${
                        formik.values.paymentMethod == "cod"
                          ? " bg-green-50/80"
                          : ""
                      } border flex gap-4 border-green-300  hover:border-primary-500 w-full rounded-md p-4 cursor-pointer transition-all duration-200`}
                    >
                      <input
                        type="radio"
                        id="cash"
                        name="paymentMethod"
                        value={"cod"}
                        checked={formik.values.paymentMethod === "cod"}
                        className="accent-blue-500 size-4"
                        onChange={(e) => handlePaymentChange(e.target.value)}
                      />
                      <div className="w-full">
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex gap-6">
                            <FontAwesomeIcon
                              icon={faMoneyBill1Wave}
                              className="text-green-600 text-2xl"
                            />
                            <div>
                              <h3 className="text-md font-semibold">
                                {t("cash_delivery")}
                              </h3>
                              <p className="text-gray-500 text-sm mt-1">
                                {t("cash_delivery_desc")}
                              </p>
                            </div>
                          </div>
                          <span className="text-green-600 font-medium text-sm">
                            {t("extra_changes")}
                          </span>
                        </div>
                        {formik.values.paymentMethod == "cod" && (
                          <div className="border bg-primary-100 border-primary-600/50 items-center text-green-800 p-2 rounded-md mt-3 text-[15px] flex gap-2">
                            <FontAwesomeIcon
                              icon={faInfoCircle}
                              className="text-primary-600"
                            />
                            <p>{t("cash_delivery_note")}</p>
                          </div>
                        )}
                      </div>
                    </label>
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="online"
                      className={`${
                        formik.values.paymentMethod == "online"
                          ? " bg-green-50/80"
                          : ""
                      } border flex gap-4 border-green-300  hover:border-primary-500 w-full rounded-md p-4 cursor-pointer transition-all duration-200`}
                    >
                      <input
                        type="radio"
                        id="online"
                        name="paymentMethod"
                        onChange={(e) => handlePaymentChange(e.target.value)}
                        value={"online"}
                        checked={formik.values.paymentMethod === "online"}
                        className="accent-blue-500 size-4"
                      />
                      <div className="w-full">
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex gap-6">
                            <FontAwesomeIcon
                              icon={faCreditCard}
                              className="text-green-600 text-2xl"
                            />
                            <div>
                              <h3 className="text-md font-semibold">
                                {t("online_payment")}
                              </h3>
                              <p className="text-gray-500 text-sm mt-1">
                                {t("online_payment_desc")}
                              </p>
                            </div>
                          </div>
                          <span className="text-green-600 font-medium text-sm">
                            {t("recommended")}
                          </span>
                        </div>
                        {formik.values.paymentMethod == "online" && (
                          <div className="bg-blue-100/50 items-center text-blue-800  p-2 rounded-md mt-3 text-[15px] flex gap-2">
                            <FontAwesomeIcon
                              icon={faInfoCircle}
                              className="text-blue-600"
                            />
                            <p>{t("online_payment_note")}</p>
                          </div>
                        )}
                      </div>
                    </label>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm ">
                  <h3 className="text-xl font-bold mb-5">
                    {t("shipping_address")}{" "}
                  </h3>
                  <div className="flex flex-col space-y-2 mb-5">
                    <label>{t("address_details")}:</label>
                    <textarea
                      className="form-control w-full border border-gray-400"
                      name="shippingAddress.details"
                      value={formik.values.shippingAddress.details}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></textarea>
                    {formik.touched.shippingAddress?.details &&
                      formik.errors.shippingAddress?.details && (
                        <p className="text-red-600">
                          {formik.errors.shippingAddress.details}
                        </p>
                      )}
                  </div>

                  <div className="grid lg:grid-cols-2 space-y-5 lg:space-x-5">
                    <div className="flex flex-col space-y-2">
                      <label>{t("city")}:</label>
                      <input
                        type="text"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        name="shippingAddress.city"
                        value={formik.values.shippingAddress.city}
                        className="form-control w-full border border-gray-400"
                      />
                      {formik.touched.shippingAddress?.city &&
                        formik.errors.shippingAddress?.city && (
                          <p className="text-red-600">
                            {formik.errors.shippingAddress.city}
                          </p>
                        )}
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label>{t("phone")}:</label>
                      <input
                        type="tel"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        name="shippingAddress.phone"
                        value={formik.values.shippingAddress.phone}
                        className="form-control w-full border border-gray-400"
                      />
                      {formik.touched.shippingAddress?.phone &&
                        formik.errors.shippingAddress?.phone && (
                          <p className="text-red-600">
                            {formik.errors.shippingAddress.phone}
                          </p>
                        )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4">
                <div className="bg-white p-5 rounded-md sticky top-10">
                  <h3 className="text-xl font-bold mb-5">
                    {t("order_summary")}{" "}
                  </h3>
                  <div className="flex flex-col space-y-2 max-h-50 overflow-auto">
                    {cartProducts?.products.map((product) => (
                      <>
                        <div className="flex justify-between items-center gap-x-3 mb-3 px-2 ">
                          <div className="flex items-center gap-x-3 ">
                            <Link
                              to={`/product-details/${product.product._id}`}
                            >
                              <img
                                src={product.product.imageCover}
                                className="w-12 h-12 min-w-[50px] min-h-[50px] object-cover rounded-lg border border-gray-200 p-1"
                              />
                            </Link>
                            <div className="flex flex-col">
                              <Link
                                to={`/product-details/${product.product._id}`}
                              >
                                <h3 className="text-[14px] font-semibold">
                                  {product.product.title}
                                </h3>
                              </Link>
                              <span className="text-sm text-gray-500">
                                {t("quantity2")}: {product.count}
                              </span>
                            </div>
                          </div>

                          <h3 className="text-sm font-bold whitespace-nowrap">
                            {product.price} {t("egp")}
                          </h3>
                        </div>
                      </>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mb-3 mt-5 border-t pt-3 border-gray-300">
                    <h4 className="text-lg text-gray-600">{t("subtotal")}</h4>
                    <span className="text-sm text-[16px] font-semibold">
                      {totalCartPrice} {t("egp")}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-lg text-gray-600">{t("shipping")}</h4>
                    <span className="text-sm text-[16px] font-semibold text-primary-600">
                      70 {t("egp")}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-lg text-gray-600">{t("tax")}</h4>
                    <span className="text-sm text-[16px] font-semibold">
                      {Math.trunc(totalCartPrice * 0.14)} {t("egp")}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-3 border-t py-3 border-gray-300">
                    <h4 className="text-lg font-bold">{t("total")}</h4>
                    <span className="text-lg text-[18px] font-bold">
                      {Math.trunc(totalCartPrice + 70 + totalCartPrice * 0.14)}{" "}
                      {t("egp")}
                    </span>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <button
                      type="submit"
                      disabled={!(formik.isValid && formik.dirty)}
                      className={`py-3 text-lg font-semibold text-white text-center rounded-md transition-all duration-300 ${
                        formik.isValid && formik.dirty
                          ? "bg-primary-600 cursor-pointer"
                          : "bg-primary-700 cursor-not-allowed"
                      }`}
                    >
                      {t("proceed_payment")}
                      {lang === "en" ? (
                        <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
                      ) : (
                        <FontAwesomeIcon icon={faArrowLeft} className="ms-3" />
                      )}
                    </button>
                    <Link
                      to="/cart"
                      className="py-3 border mb-5 border-primary-600  text-lg text-primary-600 font-semibold text-center rounded-md"
                    >
                      {lang === "en" ? (
                        <FontAwesomeIcon
                          icon={faChevronLeft}
                          className="me-3"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="me-3"
                        />
                      )}
                      {t("return_cart")}
                    </Link>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t("secure_checkout")}
                  </h3>
                  <p className="text-[17px] text-gray-500">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="text-primary-600 me-3"
                    />
                    {t("secure_checkout_desc")}
                  </p>
                  <div className="flex mt-2 gap-x-4">
                    <img src={americanimg} className="w-12" />
                    <img src={mastercardimg} className="w-12" />
                    <img src={paypalimg} className="w-12" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
