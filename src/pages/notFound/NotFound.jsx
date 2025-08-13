import React, { useContext, useEffect, useState } from "react";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import {
  faComment,
  faEnvelope,
  faHome,
  faMagnifyingGlass,
  faMessage,
  faPhone,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewsLetter from "../../components/newsletter/NewsLetter";
import { Link } from "react-router";
import { getAllCategoriesApi } from "../../services/categories-service";

import error_404 from "../../assets/undraw_page-not-found_6wni.svg";
import { useCategories } from "../../hooks/useCategories";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <BreadCrumb thirdLink={t("not_found")} bg_gray={"bg-gray-300/30"} />
      <div className="bg-mainColor py-15">
        <div className="container">
          <div className="flex flex-col justify-center items-center space-y-5">
            <img src={error_404} alt="" className="w-80" />

            <h3 className="text-3xl font-bold ">{t("not_found_title")}</h3>
            <p className="text-gray-700 text-center ">
              {t("not_found_subtitle")} <br />
              <span className="text-gray-400 ">{t("not_found_desc")}</span>
            </p>
            <div className="flex gap-x-4">
              <Link
                to="/"
                className="bg-primary-600 py-3 px-8 text-white text-lg font-semilight rounded-lg border border-transparent"
              >
                <FontAwesomeIcon icon={faHome} className="me-2" />{" "}
                {t("back_home")}
              </Link>
              <Link
                to="/"
                className="py-3 px-8 text-primary-600 text-lg font-semilight rounded-lg border border-primary-600"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} className="me-2" />{" "}
                {t("search_for_products")}
              </Link>
            </div>

            <div className="bg-primary-100/50 py-5 px-10 flex flex-col space-y-3 justify-center items-center mt-3">
              <h3 className="text-2xl font-medium ">{t("need_help")}</h3>
              <p className="text-gray-500">{t("need_help_desc")}</p>
              <div className="flex gap-x-4">
                <p>
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-primary-600 me-2"
                  />
                  <a
                    href="tel:+1 (800)
                123-4567"
                  >
                    +1 (800) 123-4567
                  </a>
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-primary-600 me-2"
                  />
                  <a href="mailto:support@freshcart.com">
                    support@freshcart.com
                  </a>
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faComment}
                    className="text-primary-600 me-2"
                  />
                  {t("live_chat")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
    </>
  );
}
