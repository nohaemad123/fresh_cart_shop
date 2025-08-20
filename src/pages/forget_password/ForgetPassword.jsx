import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowLeft,
  faArrowRight,
  faEnvelopeOpenText,
  faHeadset,
  faLock,
  faPaperPlane,
  faQuestionCircle,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { forgotPassword } from "../../services/auth-service";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import PageMetaData from "../../components/page_meta_data/PageMetaData";
import { useTranslation } from "react-i18next";

export default function ForgetPassword() {
  const navigate = useNavigate();
  const [isExistError, setIsExistError] = useState(null);
  const { t } = useTranslation();
  const [lang] = useState(localStorage.getItem("lang") || "en");

  async function SendDataForgetPassword(values) {
    try {
      const response = await forgotPassword(values);
      if (response.success) {
        toast.success(t("forget_password_msg"));
        setTimeout(() => {
          navigate("/verify-email");
        }, 3000);
        localStorage.setItem("registered_email", values.email);
      }
    } catch (error) {
      toast.error(error.message);
      setIsExistError(error.message);
    }
  }

  const validationSchema = yup.object({
    email: yup.string().email(t("invalid_email")).required(t("email_required")),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: SendDataForgetPassword,
  });

  return (
    <>
      <PageMetaData
        title={t("forget_password_page_title")}
        description={t("forget_password_page_title")}
      />
      <div className="bg-mainColor dark:bg-gray-900 py-10">
        <div className="container">
          <div className="w-full lg:w-[40%] bg-white dark:bg-gray-800 p-5 lg:p-10 mx-auto border border-gray-300 dark:border-gray-700 rounded-lg">
            <div className="flex flex-col space-y-2 items-center justify-center text-center">
              <div className="rounded_icon">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t("forget_password?")}
              </h3>
              <p className="text-[16px] text-gray-500 dark:text-gray-400">
                {t("forget_password_desc")}
              </p>
            </div>
            <form
              className="mt-5 space-y-2 flex flex-col"
              onSubmit={formik.handleSubmit}
            >
              <label className="text-lg text-gray-900 dark:text-gray-200">
                {t("email_address")}:
              </label>
              <div className="relative flex justify-center">
                <input
                  type="email"
                  id="email_input"
                  className="form-control block w-full pe-10 border-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  placeholder={t("registered_email_placeholder")}
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-gray-400 dark:text-gray-300"
                  />
                </div>
              </div>
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-600">{formik.errors.email}</p>
              )}

              {isExistError && <p className="text-red-600">{isExistError}</p>}
              <button
                type="submit"
                className="py-3 mt-3 bg-primary-600 border-transparent cursor-pointer  text-lg font-semibold text-white text-center rounded-md"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="me-3" />
                {t("forget_password_button")}
              </button>
              <p className="text-center text-gray-500 dark:text-gray-400 text-[18px] mt-3 rtl:text-[16px]">
                {t("remember_password")}{" "}
                <Link
                  to="/login"
                  className="text-primary-600 dark:text-primary-400 font-medium"
                >
                  {t("login")}
                </Link>
              </p>
            </form>
          </div>
          <div className="w-full lg:w-[40%] m-auto mt-5 bg-mainColor dark:bg-gray-800 p-3 mb-3 rounded-md border border-gray-300 dark:border-gray-700">
            <div className="flex space-x-3 ">
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="text-[16px] text-primary-600 dark:text-primary-400 mt-2"
              />
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t("secure_notice")}
                </span>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  {t("secure_notice_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10  dark:bg-gray-800">
        <div className="container">
          <div className="py-10  dark:bg-gray-800">
            <h3 className="text-center text-xl font-semibold mb-5 text-gray-900 dark:text-white">
              {t("additional_help")}
            </h3>

            <div className="grid lg:grid-cols-3 gap-10">
              <div className="flex space-y-3 flex-col justify-center items-center bg-mainColor dark:bg-gray-800 p-7 border border-gray-300 dark:border-gray-700 rounded-md">
                <div className="rounded_icon">
                  <FontAwesomeIcon
                    icon={faHeadset}
                    className="text-[20px] text-primary-600 dark:text-gray-700 mt-2"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  {t("contact_support")}
                </h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  {t("contact_support_desc")}
                </p>
                <Link
                  to="/contact "
                  className="text-primary-600 dark:text-primary-400 font-semibold text-[16px]"
                >
                  {t("contact_us")}{" "}
                  {lang === "en" ? (
                    <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                  ) : (
                    <FontAwesomeIcon icon={faArrowLeft} className="ms-2" />
                  )}
                </Link>
              </div>
              <div className="flex space-y-3 flex-col justify-center items-center bg-mainColor dark:bg-gray-800 p-7 border border-gray-300 dark:border-gray-700 rounded-md">
                <div className="rounded_icon">
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    className="text-[20px] text-primary-600 dark:text-gray-700 mt-2"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  {t("faqs")}
                </h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  {t("faqs_desc")}{" "}
                </p>
                <Link
                  to="/"
                  className="text-primary-600 dark:text-primary-400 font-semibold text-[16px]"
                >
                  {t("view_faqs")}
                  {lang === "en" ? (
                    <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                  ) : (
                    <FontAwesomeIcon icon={faArrowLeft} className="ms-2" />
                  )}
                </Link>
              </div>
              <div className="flex space-y-3 flex-col justify-center items-center bg-mainColor dark:bg-gray-800 p-7 border border-gray-300 dark:border-gray-700 rounded-md">
                <div className="rounded_icon">
                  <FontAwesomeIcon
                    icon={faEnvelopeOpenText}
                    className="text-[20px] text-primary-600 dark:text-gray-700 mt-2"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {t("email_not_received")}
                </h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  {t("email_not_received_desc")}
                </p>
                <Link
                  to="/"
                  className="text-primary-600 dark:text-primary-400 font-semibold text-[16px]"
                >
                  {t("resend_email")}
                  {lang === "en" ? (
                    <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                  ) : (
                    <FontAwesomeIcon icon={faArrowLeft} className="ms-2" />
                  )}{" "}
                </Link>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
