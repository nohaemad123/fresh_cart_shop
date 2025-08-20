import { useFormik } from "formik";
import * as yup from "yup";
import { changePassword } from "../../services/auth-service";
import { useContext, useState } from "react";
import { authContext } from "../../context/Auth.context";
import { Link, useNavigate } from "react-router";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { calcPasswordStrength } from "../../utils/password.utils";
import { toast } from "react-toastify";
import PageMetaData from "../../components/page_meta_data/PageMetaData";
import { useTranslation } from "react-i18next";

export default function ChangePassword() {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const [isExistError, setIsExistError] = useState(false);
  const [isCurrentPasswordShow, setIsCurrentPasswordShow] = useState(false);
  const [isNewPasswordShow, setIsNewPasswordShow] = useState(false);
  const [isReNewPasswordShow, setIsReNewPasswordShow] = useState(false);
  const { t } = useTranslation();

  const navigate = useNavigate();

  const { logout } = useContext(authContext);

  const validationSchema = yup.object({
    currentPassword: yup
      .string()
      .required(t("current_password_required"))
      .matches(passwordRegex, t("password_regex")),
    password: yup
      .string()
      .min(8, t("password_min_length"))
      .required(t("password_required"))
      .matches(passwordRegex, t("password_regex")),
    rePassword: yup
      .string()
      .oneOf([yup.ref("password")], t("password_match"))
      .required(t("confirm_password_required")),
  });

  async function SendDataToChangePassword(values) {
    try {
      const response = await changePassword(values);
      if (response.success) {
        toast.success(t("change_password_done"));
        setTimeout(() => {
          logout();
          setTimeout(() => {
            navigate("/login");
          }, 3000);
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
      currentPassword: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: SendDataToChangePassword,
  });

  const new_password_strength = calcPasswordStrength(formik.values.password);

  return (
    <>
      <PageMetaData
        title={t("change_password_title_page")}
        description={t("change_password_title_page")}
      />
      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        {t("change_password")}
      </h3>
      <form
        className="flex flex-col space-y-2 mt-4"
        onSubmit={formik.handleSubmit}
      >
        {/* Current Password */}
        <div className="password flex flex-col space-y-2">
          <label className="text-gray-800 dark:text-gray-200">
            {t("current_password")}
          </label>
          <div className="relative flex justify-center">
            <input
              type={isCurrentPasswordShow ? "text" : "password"}
              className="form-control block w-full pe-10 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-md"
              placeholder={t("current_password_placeholder")}
              name="currentPassword"
              value={formik.values.currentPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <button
              type="button"
              className="absolute z-30 inset-y-0 end-0 flex cursor-pointer items-center pe-3.5"
              onClick={() => setIsCurrentPasswordShow(!isCurrentPasswordShow)}
            >
              <FontAwesomeIcon
                icon={isCurrentPasswordShow ? faEyeSlash : faEye}
                className="text-gray-400 dark:text-gray-300"
              />
            </button>
          </div>
        </div>
        {formik.touched.currentPassword && formik.errors.currentPassword && (
          <p className="text-red-600">{formik.errors.currentPassword}</p>
        )}

        {/* New Password */}
        <div className="password flex flex-col space-y-2">
          <label className="text-gray-800 dark:text-gray-200">
            {t("new_password")}
          </label>
          <div className="relative flex justify-center">
            <input
              type={isNewPasswordShow ? "text" : "password"}
              className="form-control block w-full pe-10 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-md"
              placeholder={t("new_password_placeholder")}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <button
              type="button"
              className="absolute z-30 inset-y-0 end-0 flex cursor-pointer items-center pe-3.5"
              onClick={() => setIsNewPasswordShow(!isNewPasswordShow)}
            >
              <FontAwesomeIcon
                icon={isNewPasswordShow ? faEyeSlash : faEye}
                className="text-gray-400 dark:text-gray-300"
              />
            </button>
          </div>
        </div>
        {formik.touched.password && (
          <div className="password_strength mt-2 flex flex-nowrap gap-2 items-center">
            <div className="bar w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-xl">
              <div
                className={`progress ${new_password_strength.width} rounded-xl ${new_password_strength.background} h-full overflow-hidden`}
              ></div>
            </div>
            <span className="text-nowrap text-center text-gray-800 dark:text-gray-200">
              {new_password_strength.text}
            </span>
          </div>
        )}
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-600">{formik.errors.password}</p>
        )}

        {/* Confirm New Password */}
        <div className="password flex flex-col space-y-2">
          <label className="text-gray-800 dark:text-gray-200">
            {t("confirm_new_password")}
          </label>
          <div className="relative flex justify-center">
            <input
              type={isReNewPasswordShow ? "text" : "password"}
              className="form-control block w-full pe-10 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-md"
              placeholder={t("confirm_new_password_placeholder")}
              name="rePassword"
              value={formik.values.rePassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <button
              type="button"
              className="absolute z-30 inset-y-0 end-0 flex cursor-pointer items-center pe-3.5"
              onClick={() => setIsReNewPasswordShow(!isReNewPasswordShow)}
            >
              <FontAwesomeIcon
                icon={isReNewPasswordShow ? faEyeSlash : faEye}
                className="text-gray-400 dark:text-gray-300"
              />
            </button>
          </div>
        </div>
        {formik.touched.rePassword && formik.errors.rePassword && (
          <p className="text-red-600">{formik.errors.rePassword}</p>
        )}

        {/* Buttons */}
        <div className="flex items-center gap-x-3 mt-3">
          <button
            type="submit"
            className="py-2 px-3 bg-primary-600 border-transparent cursor-pointer text-lg font-semibold text-white text-center rounded-md"
          >
            {t("change_my_password")}
          </button>
          <Link
            to="/"
            className="py-2 px-3 border cursor-pointer border-primary-600 text-sm text-primary-600 font-semibold text-center rounded-md"
          >
            {t("cancel")}
          </Link>
        </div>
      </form>
    </>
  );
}
