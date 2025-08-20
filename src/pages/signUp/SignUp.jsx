import {
  faClockRotateLeft,
  faShieldHalved,
  faStar,
  faTag,
  faTruckFast,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import author_image from "../../assets/review-author.png";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import { sendDataToSignUp } from "../../services/auth-service";
import { calcPasswordStrength } from "../../utils/password.utils";
import { toast } from "react-toastify";
import { useState } from "react";
import PageMetaData from "../../components/page_meta_data/PageMetaData";
import { useTranslation } from "react-i18next";

export default function SignUp() {
  const phoneRegex = /^01[0-2,5]{1}[0-9]{8}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const [isExistError, setIsExistError] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const validationSchema = yup.object({
    name: yup
      .string()
      .required(t("name_required"))
      .min(4, t("name_min"))
      .max(20, t("name_max")),
    email: yup.string().email(t("invalid_email")).required(t("email_required")),
    password: yup
      .string()
      .min(8, t("password_min_length"))
      .required(t("password_required"))
      .matches(passwordRegex, t("password_regex")),
    rePassword: yup
      .string()
      .oneOf([yup.ref("password")], t("password_match"))
      .required(t("confirm_password_required")),
    phone: yup
      .string()
      .matches(phoneRegex, t("phone_invalid"))
      .required(t("phone_required")),
    terms: yup.boolean().oneOf([true], t("terms_required")),
  });

  async function SendDataSignUp(values) {
    try {
      const response = await sendDataToSignUp(values);

      if (response.success) {
        toast.success(t("signup_done"));
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
      }
    } catch (error) {
      toast.error(error.message);
      setIsExistError(error.message);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      terms: false,
    },
    validationSchema,
    onSubmit: SendDataSignUp,
  });

  const password_strength = calcPasswordStrength(formik.values.password);

  return (
    <>
      <PageMetaData
        title={t("signup_page_title")}
        description={t("signup_page_title")}
      />
      <div className="py-10 bg-mainColor dark:bg-gray-900">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Section */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                {t("welcome_to")}{" "}
                <span className="text-primary-600">FreshCart</span>
              </h2>
              <p className="text-lg mt-3 text-gray-700 dark:text-gray-300">
                {t("signup_desc")}
              </p>

              {/* Features */}
              <div className="mt-5 flex gap-3">
                <div className="rounded_icon ">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {t("premium_quality")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t("premium_quality_desc")}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex gap-3">
                <div className="rounded_icon ">
                  <FontAwesomeIcon icon={faTruckFast} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {t("free_delivery")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t("free_delivery_desc")}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex gap-3">
                <div className="rounded_icon ">
                  <FontAwesomeIcon icon={faShieldHalved} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {t("secure_shopping")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t("secure_shopping_desc")}
                  </p>
                </div>
              </div>

              {/* Review */}
              <div className="mt-5 p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md">
                <div className="flex gap-3">
                  <img src={author_image} alt="" className="size-12" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {t("sara_johnson")}
                    </h3>
                    <div className="flex *:text-yellow-400 gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote>
                  <p className="text-gray-600 dark:text-gray-400 mt-3 italic">
                    "{t("sara_johnson_desc")}"
                  </p>
                </blockquote>
              </div>
            </div>

            {/* Right Section (Form) */}
            <div className="form bg-white dark:bg-gray-800 p-5 lg:p-10 space-y-8 shadow-xl rounded-xl">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                  {t("create_account")}
                </h2>
                <p className="text-md text-gray-500 dark:text-gray-400">
                  {t("signup_subtitle")}
                </p>
              </div>

              {/* Social Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-5 mb-10">
                <button className="cursor-pointer border hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-500 border-gray-400 rounded-lg py-2 text-gray-900 dark:text-white">
                  <FontAwesomeIcon
                    icon={faGoogle}
                    className="me-3 text-red-500"
                  />{" "}
                  {t("google")}
                </button>
                <button className="cursor-pointer border hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-500 border-gray-400 rounded-lg py-2 text-gray-900 dark:text-white">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="me-3 text-blue-500"
                  />
                  {t("facebook")}
                </button>
              </div>

              <div className="h-0.5 w-full bg-gray-300/30 relative">
                <span className="absolute px-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 left-1/2 top-1/2 -translate-1/2">
                  {t("or")}
                </span>
              </div>

              {/* Form */}
              <form
                className="mt-3 flex flex-col space-y-5"
                onSubmit={formik.handleSubmit}
              >
                {/* Name */}
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="name"
                    className="text-gray-900 dark:text-gray-200"
                  >
                    {t("name_input")} *
                  </label>
                  <input
                    type="text"
                    className="form-control block w-full dark:bg-gray-700 dark:text-white"
                    placeholder="Ali"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red-600">{formik.errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="email_input"
                    className="text-gray-900 dark:text-gray-200"
                  >
                    {t("email_address")} *
                  </label>
                  <input
                    type="email"
                    id="email_input"
                    className="form-control block w-full dark:bg-gray-700 dark:text-white"
                    placeholder="john.doe@example.com"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-600">{formik.errors.email}</p>
                  )}
                  {isExistError && (
                    <p className="text-red-600">{isExistError}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="phone_input"
                    className="text-gray-900 dark:text-gray-200"
                  >
                    {t("phone")} *
                  </label>
                  <input
                    type="tel"
                    id="phone_input"
                    className="form-control block w-full dark:bg-gray-700 dark:text-white"
                    placeholder="+1 (800) 123-4567"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="text-red-600">{formik.errors.phone}</p>
                  )}
                </div>

                {/* Password */}
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="password_input"
                    className="text-gray-900 dark:text-gray-200"
                  >
                    {t("password")} *
                  </label>
                  <input
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="password"
                    id="password_input"
                    className="form-control block w-full dark:bg-gray-700 dark:text-white"
                  />
                  {formik.touched.password && (
                    <div className="password_strength mt-2 flex gap-2 items-center">
                      <div className="bar w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-xl">
                        <div
                          className={`progress ${password_strength.width} rounded-xl ${password_strength.background} h-full`}
                        ></div>
                      </div>
                      <span className="text-nowrap text-gray-800 dark:text-gray-200">
                        {password_strength.text}
                      </span>
                    </div>
                  )}
                  {formik.touched.password && formik.errors.password && (
                    <p className="text-red-600">{formik.errors.password}</p>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="repassword_input"
                    className="text-gray-900 dark:text-gray-200"
                  >
                    {t("confirm_password")} *
                  </label>
                  <input
                    type="password"
                    name="rePassword"
                    id="repassword_input"
                    className="form-control block w-full dark:bg-gray-700 dark:text-white"
                    value={formik.values.rePassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.rePassword && formik.errors.rePassword && (
                    <p className="text-red-600">{formik.errors.rePassword}</p>
                  )}
                </div>

                {/* Terms */}
                <div className="terms flex gap-2 items-center flex-wrap">
                  <input
                    value={formik.values.terms}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="checkbox"
                    name="terms"
                    className="accent-primary-600 size-4"
                  />
                  <label className="text-gray-900 dark:text-gray-300">
                    {t("i_agree")}{" "}
                    <Link
                      to="/terms"
                      className="text-primary-600 underline dark:text-primary-400"
                    >
                      {t("terms_of_service")}
                    </Link>{" "}
                    {t("and")}{" "}
                    <Link
                      to="/privacy"
                      className="text-primary-600 underline dark:text-primary-400"
                    >
                      {t("privacy_policy")}
                    </Link>
                  </label>
                  {formik.touched.terms && formik.errors.terms && (
                    <p className="text-red-600 block">{formik.errors.terms}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn flex gap-2 items-center justify-center rounded-md py-2 bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-500"
                >
                  <FontAwesomeIcon icon={faUserPlus} />
                  <span>{t("create_account")}</span>
                </button>
                <p className="border-t-2 border-gray-300/30 mt-2 pt-4 text-gray-800 dark:text-gray-300">
                  {t("have_account")}{" "}
                  <Link
                    to="/login"
                    className="text-primary-600 underline dark:text-primary-400"
                  >
                    {t("login")}
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Why Account */}
      <div className="py-10 text-center dark:bg-gray-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {t("why_account")}
          </h2>
          <div className="grid lg:grid-cols-3 mt-8 lg:w-[85%] mx-auto gap-10 lg:gap-20">
            <div className="flex flex-col justify-center items-center space-y-3">
              <div className="rounded_icon">
                <FontAwesomeIcon icon={faTruckFast} />
              </div>
              <h3 className="font-semibold text-2xl text-gray-900 dark:text-white">
                {t("faster_checkout")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {t("faster_checkout_desc")}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center space-y-3">
              <div className="rounded_icon">
                <FontAwesomeIcon icon={faTag} />
              </div>
              <h3 className="font-semibold text-2xl text-gray-900 dark:text-white">
                {t("exclusive_deals")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {t("exclusive_deals_desc")}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center space-y-3">
              <div className="rounded_icon">
                <FontAwesomeIcon icon={faClockRotateLeft} />
              </div>
              <h3 className="font-semibold text-2xl text-gray-900 dark:text-white">
                {t("order_history")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {t("order_history_desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
