import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useRef } from "react";
import {
  faArrowRight,
  faEnvelopeOpenText,
  faHeadphones,
  faHeadset,
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
import { verifyEmail, forgotPassword } from "../../services/auth-service";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import PageMetaData from "../../components/page_meta_data/PageMetaData";
import { useTranslation } from "react-i18next";

export default function VerifyEmail() {
  const navigate = useNavigate();
  const [isExistError, setIsExistError] = useState(null);
  const email = localStorage.getItem("registered_email");
  const { t } = useTranslation();

  async function SendDataVerifyEmail(values) {
    const code =
      values.digit1 +
      values.digit2 +
      values.digit3 +
      values.digit4 +
      values.digit5 +
      values.digit6;
    try {
      const response = await verifyEmail(code);
      if (response.success) {
        toast.success(t("verify_email_msg"));
        setTimeout(() => {
          navigate("/reset-password");
        }, 3000);
      } else {
      }
    } catch (error) {
      toast.error(error.message);
      setIsExistError(error.message);
    }
  }

  const validationSchema = yup.object({
    digit1: yup.string().required("digit 1 is required"),
    digit2: yup.string().required("digit 2 is required"),
    digit3: yup.string().required("digit 3 is required"),
    digit4: yup.string().required("digit 4 is required"),
    digit5: yup.string().required("digit 5 is required"),
    digit6: yup.string().required("digit 6 is required"),
  });

  const formik = useFormik({
    initialValues: {
      digit1: "",
      digit2: "",
      digit3: "",
      digit4: "",
      digit5: "",
      digit6: "",
    },
    validationSchema,
    onSubmit: SendDataVerifyEmail,
  });

  const initialMinutes = 3;
  const initialSeconds = 3;
  const initialTimeInSeconds = initialMinutes * 60 + initialSeconds;

  const [time, setTime] = useState(initialTimeInSeconds);
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const input5 = useRef();
  const input6 = useRef();

  const handleChange = (e, nextRef) => {
    if (e.target.value.length === 1 && nextRef) {
      nextRef.current.focus();
    }
  };

  useEffect(() => {
    if (time <= 0) return;
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  async function sendCodeToEmail() {
    try {
      const response = await forgotPassword(email);
      if (response.success) {
        toast.success(t("verify_email_msg"));
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
        title={t("verify_email_page_title")}
        description={t("verify_email_page_title")}
      />
      <div className="bg-gray-50 dark:bg-gray-900 py-10 min-h-screen">
        <div className="container">
          <div className="w-full lg:w-[40%] bg-white dark:bg-gray-800 p-5 lg:p-10 mx-auto border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="flex flex-col space-y-2 items-center justify-center text-center">
              <div className="rounded_icon bg-primary-100 dark:bg-primary-400 text-primary-600 dark:text-primary-800 p-3">
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                {t("verify_your_email")}
              </h3>
              <p className="text-[16px] text-gray-500 dark:text-gray-400">
                {t("verify_email_desc")}
              </p>
              <p className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                {email}
              </p>
            </div>
            <form
              className="mt-5 space-y-2 flex flex-col"
              onSubmit={formik.handleSubmit}
            >
              <label className="text-lg text-center text-gray-700 dark:text-gray-200">
                {t("enter_6_digits")}
              </label>
              <div className="grid grid-cols-6 gap-x-5 justify-center items-center text-center">
                {[input1, input2, input3, input4, input5, input6].map(
                  (ref, index) => (
                    <input
                      key={index}
                      type="text"
                      className="form-control text-center border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md"
                      name={`digit${index + 1}`}
                      ref={ref}
                      maxLength={1}
                      value={formik.values[`digit${index + 1}`]}
                      onChange={(e) => {
                        formik.handleChange(e);
                        handleChange(
                          e,
                          index < 5
                            ? [input1, input2, input3, input4, input5, input6][
                                index + 1
                              ]
                            : null
                        );
                      }}
                      onBlur={formik.handleBlur}
                    />
                  )
                )}
              </div>
              <p className="text-center my-3 text-gray-700 dark:text-gray-200">
                {t("code_expire")}
                <span className="text-lg font-semibold text-primary-600 dark:text-primary-400 ms-2">
                  {formatTime(time)}
                </span>
              </p>
              <button
                type="submit"
                className="py-3 mt-3 bg-primary-600 dark:bg-primary-500 hover:bg-primary-700 dark:hover:bg-primary-600 text-lg font-semibold text-white rounded-md"
              >
                {t("verify_email")}
              </button>
              <div className="flex flex-col space-y-3 justify-center items-center mt-3 text-gray-700 dark:text-gray-200">
                <p>{t("ditnt_receive_code")}</p>
                <button
                  onClick={() => sendCodeToEmail()}
                  className="text-primary-600 dark:text-primary-400 font-medium text-lg"
                >
                  {t("resend_code")}
                </button>
                <Link
                  to="/login"
                  className="text-primary-600 dark:text-primary-400 font-medium"
                >
                  {t("back_signin")}
                </Link>
              </div>
            </form>
          </div>
          <p className="text-center mt-5 text-lg text-gray-500 dark:text-gray-400">
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
