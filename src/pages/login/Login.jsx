import {
  faClock,
  faLock,
  faStar,
  faTruckFast,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import login_img from "../../assets/login-img.png";
import {
  faCircleQuestion,
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useFormik } from "formik";
import { sendDataToSignIn } from "../../services/auth-service";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useContext, useState } from "react";
import { authContext } from "../../context/Auth.context";
import PageMetaData from "../../components/page_meta_data/PageMetaData";
import { useTranslation } from "react-i18next";

export default function Login() {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { setToken } = useContext(authContext);

  const [isExistError, setIsExistError] = useState(null);
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const location = useLocation();
  const from = location?.state?.from || "/";

  async function SendDataSignIn(values) {
    try {
      const response = await sendDataToSignIn(values);
      if (response.success) {
        toast.success(t("welcome_back"));
        localStorage.setItem(
          "user_details",
          JSON.stringify(response.data.user)
        );
        if (values.rememberMe) {
          sessionStorage.setItem("token", response.data.token);
        } else {
          localStorage.setItem("token", response.data.token);
        }
        setToken(response.data.token);
        setTimeout(() => {
          navigate(from);
        }, 3000);
      } else {
      }
    } catch (error) {
      toast.error(error.message);
      setIsExistError(error.message);
    }
  }

  const validationSchema = yup.object({
    email: yup.string().email(t("invalid_email")).required(t("email_required")),
    password: yup
      .string()
      .min(8, t("password_min_length"))
      .required(t("password_required"))
      .matches(passwordRegex, t("password_regex")),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema,
    onSubmit: SendDataSignIn,
  });

  return (
    <>
      <PageMetaData
        title={t("login_page_title")}
        description={t("login_page_title")}
      />
      <div className="py-15 bg-mainColor dark:bg-gray-900">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 w-full lg:w-[90%] mx-auto">
            {/* left section */}
            <div className="text-center flex flex-col space-y-3">
              <img
                src={login_img}
                alt=""
                className="w-full rounded-xl shadow-lg"
              />
              <h2 className="text-4xl font-bold mt-5 text-gray-900 dark:text-white">
                {t("login_title")}
              </h2>
              <p className="text-lg mt-3 text-gray-600 dark:text-gray-300">
                {t("login_desc")}
              </p>
              <div className="mt-3">
                <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faTruckFast}
                      className="text-primary-600 text-lg"
                    />
                    <span className="text-gray-500 dark:text-gray-300">
                      {t("free_delivery")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faCircleQuestion}
                      className="text-primary-600 text-lg"
                    />
                    <span className="text-gray-500 dark:text-gray-300">
                      {t("secure_payment")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-primary-600 text-lg"
                    />
                    <span className="text-gray-500 dark:text-gray-300">
                      {t("support")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* form */}
            <div className="form bg-white dark:bg-gray-800 p-5 lg:p-10 space-y-8 shadow-xl rounded-xl">
              <div className="flex flex-col justify-center items-center space-y-2">
                <h2 className="text-3xl font-semibold mb-2">
                  <span className="text-primary-600 dark:text-primary-400">
                    Fresh
                  </span>
                  <span className="text-gray-900 dark:text-white">Cart</span>
                </h2>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {t("welcome_back")}
                </h2>
                <p className="text-md text-gray-500 dark:text-gray-300">
                  {t("welcome_desc")}
                </p>
              </div>

              <div className="flex flex-col space-y-4 mt-5 mb-8">
                <button className="cursor-pointer border hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300 transition-all duration-500 border-gray-400 rounded-lg py-2">
                  <FontAwesomeIcon
                    icon={faGoogle}
                    className="me-3 text-red-500"
                  />{" "}
                  {t("google")}
                </button>
                <button className="cursor-pointer border hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300  transition-all duration-500 border-gray-400 rounded-lg py-2">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="me-3 text-blue-500"
                  />
                  {t("facebook")}
                </button>
              </div>

              <div className="h-0.5 w-full bg-gray-300/30 relative">
                <span className="absolute px-4 text-nowrap bg-white dark:bg-gray-800 dark:text-gray-300  left-1/2 top-1/2 -translate-1/2 uppercase">
                  {t("login_continue")}
                </span>
              </div>

              <form
                className="mt-3 flex flex-col space-y-5"
                onSubmit={formik.handleSubmit}
              >
                <div className="password flex flex-col space-y-2">
                  <label
                    htmlFor="email_input"
                    className="text-gray-700 dark:text-gray-300"
                  >
                    {t("email_address")}
                  </label>
                  <div className="relative flex justify-center">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-gray-300"
                      />
                    </div>
                    <input
                      type="email"
                      id="email_input"
                      className="form-control block w-full  ps-10 bg-white dark:bg-gray-700 dark:text-gray-200"
                      placeholder={t("email_placeholder")}
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>

                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-600 dark:text-red-400">
                      {formik.errors.email}
                    </p>
                  )}

                  {isExistError && (
                    <p className="text-red-600 dark:text-red-400 ">
                      {isExistError}
                    </p>
                  )}
                </div>

                <div className="password flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="password_input"
                      className="text-gray-700 dark:text-gray-300"
                    >
                      {t("password")}
                    </label>
                    <Link
                      to={"/forget-password"}
                      className="text-primary-600 dark:text-primary-400"
                    >
                      {t("forget_password?")}
                    </Link>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <FontAwesomeIcon
                        icon={faLock}
                        className="text-gray-300"
                      />
                    </div>
                    <input
                      type={isPasswordShow ? "text" : "password"}
                      id="password_input"
                      className="form-control block w-full ps-10 bg-white dark:bg-gray-700 dark:text-gray-200"
                      placeholder={t("password_placeholder")}
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <button
                      type="button"
                      className="absolute z-30 inset-y-0 end-0 flex cursor-pointer items-center pe-3.5 "
                      onClick={() => setIsPasswordShow(!isPasswordShow)}
                    >
                      {isPasswordShow ? (
                        <FontAwesomeIcon
                          icon={faEyeSlash}
                          className="text-gray-300"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-gray-300"
                        />
                      )}
                    </button>
                  </div>

                  {formik.touched.password && formik.errors.password && (
                    <p className="text-red-600 dark:text-red-400">
                      {formik.errors.password}
                    </p>
                  )}
                </div>

                <div className="terms flex gap-2 items-center flex-wrap">
                  <input
                    type="checkbox"
                    className="accent-primary-600 size-4 dark:accent-primary-400"
                    name="rememberMe"
                    value={formik.values.rememberMe}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label className="text-gray-700 dark:text-gray-300">
                    {t("keep_me_signed_in")}
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn flex gap-2 items-center text-center rounded-md py-2 justify-center bg-primary-600 dark:text-gray-900 dark:bg-primary-400 text-white hover:bg-primary-700 transition-colors duration-500"
                >
                  <span>{t("login_button")}</span>
                </button>
              </form>

              <p className="border-t-2 border-gray-300/30 mt-2 pt-4 text-center text-gray-700 dark:text-gray-300">
                {t("new_fresh_card")}{" "}
                <Link
                  to="/signup"
                  className="text-primary-600 underline dark:text-primary-400"
                >
                  {t("create_account")}
                </Link>
              </p>

              <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faLock}
                    className="text-gray-300 text-sm"
                  />
                  <span className="text-gray-500 dark:text-gray-300">
                    {t("ssl_secure")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="text-gray-300 text-sm"
                  />
                  <span className="text-gray-500 dark:text-gray-300">
                    {t("login_user")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-gray-300 text-sm"
                  />
                  <span className="text-gray-500 dark:text-gray-300">
                    {t("login_rating")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
