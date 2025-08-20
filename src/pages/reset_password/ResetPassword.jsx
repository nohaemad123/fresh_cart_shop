import {
  faArrowRight,
  faEnvelope,
  faEnvelopeOpenText,
  faHeadphones,
  faHeadset,
  faKey,
  faLock,
  faPaperPlane,
  faQuestion,
  faQuestionCircle,
  faShield,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { resetPassword, verifyEmail } from "../../services/auth-service";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { calcPasswordStrength } from "../../utils/password.utils";
import PageMetaData from "../../components/page_meta_data/PageMetaData";
import { useTranslation } from "react-i18next";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [isExistError, setIsExistError] = useState(null);
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isConfirmPasswordShow, setIConfirmsPasswordShow] = useState(false);
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const { t } = useTranslation();

  async function SendDataToResetPassword(values) {
    try {
      const response = await resetPassword(values);
      if (response.success) {
        toast.success(t("reset_password_msg"));
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

  const validationSchema = yup.object({
    email: yup.string().email(t("invalid_email")).required(t("email_required")),
    newPassword: yup
      .string()
      .min(8, t("password_min_length"))
      .required(t("password_required"))
      .matches(passwordRegex, t("password_regex")),
    confirmNewPassword: yup
      .string()
      .oneOf([yup.ref("newPassword")], t("password_match"))
      .required(t("confirm_password_required")),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema,
    onSubmit: SendDataToResetPassword,
  });

  const new_password_strength = calcPasswordStrength(formik.values.newPassword);

  return (
    <>
      <PageMetaData
        title={t("reset_password_page_title")}
        description={t("reset_password_page_title")}
      />
      <div className="bg-gray-50 dark:bg-gray-900 py-10 min-h-screen">
        <div className="container">
          <div className="w-full lg:w-[40%] bg-white dark:bg-gray-800 p-5 lg:p-10 mx-auto border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="flex flex-col space-y-2 items-center justify-center text-center">
              <div className="rounded_icon bg-primary-100 dark:bg-primary-400 text-primary-600 dark:text-primary-800 p-3">
                <FontAwesomeIcon icon={faKey} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                {t("reset_password")}
              </h3>
              <p className="text-[16px] text-gray-500 dark:text-gray-400">
                {t("reset_password_desc")}
              </p>
            </div>
            <form
              className="mt-5 space-y-4 flex flex-col"
              onSubmit={formik.handleSubmit}
            >
              <label className="text-gray-700 dark:text-gray-200">
                {t("email_address")}
              </label>
              <div className="relative flex justify-center">
                <input
                  type="email"
                  id="email_input"
                  className="form-control block w-full ps-10 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  placeholder={t("email_placeholder")}
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-gray-400"
                  />
                </div>
              </div>
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-600">{formik.errors.email}</p>
              )}

              {/* New Password */}
              <div className="flex flex-col space-y-1">
                <label className="text-gray-700 dark:text-gray-200">
                  {t("new_password")}
                </label>
                <div className="relative flex justify-center">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <FontAwesomeIcon icon={faLock} className="text-gray-400" />
                  </div>
                  <input
                    type={isPasswordShow ? "text" : "password"}
                    className="form-control block w-full ps-10 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    placeholder={t("password_placeholder")}
                    name="newPassword"
                    value={formik.values.newPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <button
                    type="button"
                    className="absolute z-30 inset-y-0 end-0 flex cursor-pointer items-center pe-3.5"
                    onClick={() => setIsPasswordShow(!isPasswordShow)}
                  >
                    <FontAwesomeIcon
                      icon={isPasswordShow ? faEyeSlash : faEye}
                      className="text-gray-400"
                    />
                  </button>
                </div>

                {formik.touched.newPassword && (
                  <div className="mt-2 flex items-center gap-2">
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-xl overflow-hidden">
                      <div
                        className={`h-full ${new_password_strength.width} ${new_password_strength.background} rounded-xl`}
                      ></div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-200">
                      {new_password_strength.text}
                    </span>
                  </div>
                )}

                {formik.touched.newPassword && formik.errors.newPassword && (
                  <p className="text-red-600">{formik.errors.newPassword}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col space-y-1">
                <label className="text-gray-700 dark:text-gray-200">
                  {t("confirm_new_password")}
                </label>
                <div className="relative flex justify-center">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <FontAwesomeIcon icon={faLock} className="text-gray-400" />
                  </div>
                  <input
                    type={isConfirmPasswordShow ? "text" : "password"}
                    className="form-control block w-full ps-10 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    placeholder={t("confirm_new_password")}
                    name="confirmNewPassword"
                    value={formik.values.confirmNewPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <button
                    type="button"
                    className="absolute z-30 inset-y-0 end-0 flex cursor-pointer items-center pe-3.5"
                    onClick={() =>
                      setIConfirmsPasswordShow(!isConfirmPasswordShow)
                    }
                  >
                    <FontAwesomeIcon
                      icon={isConfirmPasswordShow ? faEyeSlash : faEye}
                      className="text-gray-400"
                    />
                  </button>
                </div>
                {formik.touched.confirmNewPassword &&
                  formik.errors.confirmNewPassword && (
                    <p className="text-red-600">
                      {formik.errors.confirmNewPassword}
                    </p>
                  )}
              </div>

              <button
                type="submit"
                className="py-3 mt-3 bg-primary-600 dark:bg-primary-500 hover:bg-primary-700 dark:hover:bg-primary-600 text-lg font-semibold text-white rounded-md"
              >
                {t("reset_password")}
              </button>

              <p className="text-center text-gray-700 dark:text-gray-200">
                {t("remember_password")}
                <Link
                  to="/login"
                  className="text-primary-600 dark:text-primary-400 font-medium ms-2"
                >
                  {t("back_signin")}
                </Link>
              </p>
            </form>
          </div>

          <p className="text-center text-gray-500 dark:text-gray-400 mt-5 text-lg">
            {t("need_help")}{" "}
            <span className="text-primary-600 dark:text-primary-400 font-medium">
              {t("contact_support")}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
