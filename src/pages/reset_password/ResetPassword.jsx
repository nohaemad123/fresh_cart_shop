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
      .oneOf([yup.ref("password")], t("password_match"))
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

  async function SendDataToResetPassword(values) {
    try {
      const response = await resetPassword(values);
      if (response.success) {
        toast.success("password is reseed, please login to continue shopping");
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

  return (
    <>
      <PageMetaData
        title={t("reset_password_page_title")}
        description={t("reset_password_page_title")}
      />
      <div className="bg-mainColor py-10">
        <div className="container">
          <div className="w-full lg:w-[40%] bg-white p-5 lg:p-10 mx-auto border border-gray-300 rounded-lg">
            <div className="flex flex-col space-y-2 items-center justify-center text-center">
              <div className="rounded_icon">
                <FontAwesomeIcon icon={faKey} />
              </div>
              <h3 className="text-2xl font-bold">{t("reset_password")}</h3>
              <p className="text-[16px] text-gray-500">
                {t("reset_password_desc")}
              </p>
            </div>
            <form
              className="mt-5 space-y-2 flex flex-col"
              onSubmit={formik.handleSubmit}
            >
              <label className="">{t("email_address")} </label>
              <div className="relative flex justify-center">
                <input
                  type="email"
                  id="email_input"
                  className="form-control block w-full ps-10 border-gray-400"
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
              <div className="password flex flex-col space-y-1">
                <label htmlFor="password_input">{t("new_password")} </label>

                <div className="relative flex justify-center">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <FontAwesomeIcon icon={faLock} className="text-gray-400" />
                  </div>
                  <input
                    type={isPasswordShow ? "text" : "password"}
                    id="email_input"
                    className="form-control block w-full ps-10"
                    placeholder={t("password_placeholder")}
                    name="newPassword"
                    value={formik.values.newPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <button
                    className="absolute z-30 inset-y-0 end-0 flex cursor-pointer items-center pe-3.5 "
                    onClick={() => setIsPasswordShow(!isPasswordShow)}
                  >
                    {isPasswordShow ? (
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        className="text-gray-400"
                      />
                    ) : (
                      <FontAwesomeIcon icon={faEye} className="text-gray-400" />
                    )}
                  </button>
                </div>
                {formik.touched.newPassword && (
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
                {formik.touched.newPassword && formik.errors.newPassword && (
                  <p className="text-red-600">{formik.errors.newPassword}</p>
                )}

                <div className="flex flex-col space-y-1 text-gray-500">
                  <p>{t("password_must_contain")}</p>
                  <p className="flex items-center gap-x-2">
                    <span className="w-[5px] h-[5px] rounded-full bg-gray-200 p-2 inline-block"></span>
                    {t("password_note_1")}
                  </p>
                  <p className="flex items-center gap-x-2">
                    <span className="w-[5px] h-[5px] rounded-full bg-gray-200 p-2 inline-block"></span>
                    {t("password_note_2")}
                  </p>
                  <p className="flex items-center gap-x-2">
                    <span className="w-[5px] h-[5px] rounded-full bg-gray-200 p-2 inline-block"></span>
                    {t("password_note_3")}
                  </p>
                </div>
              </div>
              <div className="password flex flex-col space-y-1">
                <label htmlFor="password_input">
                  {t("confirm_new_password")}
                </label>

                <div className="relative flex justify-center">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <FontAwesomeIcon icon={faLock} className="text-gray-400" />
                  </div>
                  <input
                    type={isConfirmPasswordShow ? "text" : "password"}
                    id="email_input"
                    className="form-control block w-full ps-10"
                    placeholder={t("confirm_new_password")}
                    name="confirmNewPassword"
                    value={formik.values.confirmNewPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <button
                    className="absolute z-30 inset-y-0 end-0 flex cursor-pointer items-center pe-3.5 "
                    onClick={() =>
                      setIConfirmsPasswordShow(!isConfirmPasswordShow)
                    }
                  >
                    {isConfirmPasswordShow ? (
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        className="text-gray-400"
                      />
                    ) : (
                      <FontAwesomeIcon icon={faEye} className="text-gray-400" />
                    )}
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
                className="py-3 mt-3 bg-primary-600 border-transparent cursor-pointer  text-lg font-semibold text-white text-center rounded-md"
              >
                {t("reset_password")}
              </button>
              <p className="text-center">
                {t("remember_password")}
                <Link to="/login" className="text-primary-600 font-medium ms-2">
                  {t("back_signin")}
                </Link>
              </p>
            </form>
          </div>
          <p className="text-center text-gray-500 mt-5 text-lg">
            {t("need_help")}{" "}
            <span className="text-primary-600 font-medium">
              {t("contact_support")}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
