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
      <h3 className="text-2xl font-bold">{t("change_password")}</h3>
      <form
        className="flex flex-col space-y-2 mt-4"
        onSubmit={formik.handleSubmit}
      >
        <div className="password flex flex-col space-y-2">
          <label htmlFor="password_input">{t("current_password")} </label>

          <div className="relative flex justify-center">
            <input
              type={isCurrentPasswordShow ? "text" : "password"}
              id="email_input"
              className="form-control block w-full pe-10"
              placeholder={t("current_password_placeholder")}
              name="currentPassword"
              value={formik.values.currentPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <button
              className="absolute z-30 inset-y-0 end-0 flex cursor-pointer items-center pe-3.5 "
              onClick={() => setIsCurrentPasswordShow(!isCurrentPasswordShow)}
            >
              {isCurrentPasswordShow ? (
                <FontAwesomeIcon icon={faEyeSlash} className="text-gray-400" />
              ) : (
                <FontAwesomeIcon icon={faEye} className="text-gray-400" />
              )}
            </button>
          </div>
        </div>
        {formik.touched.currentPassword && formik.errors.currentPassword && (
          <p className="text-red-600">{formik.errors.currentPassword}</p>
        )}
        <div className="password flex flex-col space-y-2">
          <label htmlFor="password_input">{t("new_password")} </label>

          <div className="relative flex justify-center">
            <input
              type={isNewPasswordShow ? "text" : "password"}
              id="email_input"
              className="form-control block w-full pe-10"
              placeholder={t("new_password_placeholder")}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <button
              className="absolute z-30 inset-y-0 end-0 flex cursor-pointer items-center pe-3.5 "
              onClick={() => setIsNewPasswordShow(!isNewPasswordShow)}
            >
              {isNewPasswordShow ? (
                <FontAwesomeIcon icon={faEyeSlash} className="text-gray-400" />
              ) : (
                <FontAwesomeIcon icon={faEye} className="text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {formik.touched.password && (
          <div className="password_strength mt-2 flex flex-nowrap gap-2 items-center">
            <div className="bar w-full h-2 bg-gray-200  rounded-xl">
              <div
                className={`progress ${new_password_strength.width} rounded-xl ${new_password_strength.background} h-full overflow-hidden`}
              ></div>
            </div>
            <span className="text-nowrap text-center">
              {new_password_strength.text}
            </span>
          </div>
        )}
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-600">{formik.errors.password}</p>
        )}

        <div className="password flex flex-col space-y-2">
          <label htmlFor="password_input">{t("confirm_new_password")} </label>

          <div className="relative flex justify-center">
            <input
              type={isReNewPasswordShow ? "text" : "password"}
              id="email_input"
              className="form-control block w-full pe-10"
              placeholder={t("confirm_new_password_placeholder")}
              name="rePassword"
              value={formik.values.rePassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <button
              className="absolute z-30 inset-y-0 end-0 flex cursor-pointer items-center pe-3.5 "
              onClick={() => setIsReNewPasswordShow(!isReNewPasswordShow)}
            >
              {isReNewPasswordShow ? (
                <FontAwesomeIcon icon={faEyeSlash} className="text-gray-400" />
              ) : (
                <FontAwesomeIcon icon={faEye} className="text-gray-400" />
              )}
            </button>
          </div>
        </div>
        {formik.touched.rePassword && formik.errors.rePassword && (
          <p className="text-red-600">{formik.errors.rePassword}</p>
        )}
        <div className="flex items-center gap-x-3 mt-3">
          <button
            type="submit"
            className=" py-2 px-3 bg-primary-600 border-transparent cursor-pointer  text-lg font-semibold text-white text-center rounded-md"
          >
            {t("change_my_password")}
          </button>
          <Link
            to="/"
            className="py-2 px-3 border cursor-pointer border-primary-600  text-sm text-primary-600 font-semibold text-center rounded-md"
          >
            {t("cancel")}
          </Link>
        </div>
      </form>
    </>
  );
}
