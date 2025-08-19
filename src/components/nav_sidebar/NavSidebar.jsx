import React, { useContext, useState } from "react";
import logo from "../../assets/freshcart-logo.svg";
import { Link, NavLink } from "react-router";
import {
  faAddressCard,
  faBars,
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faRightFromBracket,
  faUser,
  faUserPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { authContext } from "../../context/Auth.context";
import { useCart } from "../../hooks/useCart";
import { useTranslation } from "react-i18next";
import colored_logo from "../../assets/logo_white.svg";
import { useTheme } from "../../hooks/useTheme";

export default function NavSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, token } = useContext(authContext);
  const { isLoading, numOfCartItems } = useCart();
  const { i18n, t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className=" xl:hidden fixed top-0 z-20 dark:bg-gray-900 w-full">
        <div className="navbar_mobile py-3">
          <div className="container flex justify-between items-center">
            <Link to="/" onClick={toggleMenu}>
              {theme === "light" ? (
                <img src={logo} />
              ) : (
                <div className="flex items-center gap-x-2 ">
                  <img src={colored_logo} width={40} />
                  <span className="text-gray-200 text-2xl font-extrabold">
                    FreshCart
                  </span>
                </div>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="text-white dark:bg-primary-300 dark:text-gray-700 cursor-pointer bg-primary-600 hover:bg-primary-600/95 font-medium rounded-lg text-md size-8 flex justify-center items-center "
            >
              {isOpen ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <>
            <div
              className="background cursor-pointer fixed inset-0 bg-black/50 z-30"
              onClick={toggleMenu}
            ></div>
            <div className="offcanvas fixed dark:bg-gray-900 bg-white z-40 p-5 top-0 bottom-0">
              <div className="flex justify-between items-center">
                <Link to={"/"}>
                  {theme === "light" ? (
                    <img src={logo} />
                  ) : (
                    <div className="flex items-center gap-x-2 ">
                      <img src={colored_logo} width={40} />
                      <span className="text-gray-200 text-2xl font-extrabold">
                        FreshCart
                      </span>
                    </div>
                  )}{" "}
                </Link>
                <button
                  onClick={toggleMenu}
                  className="size-8 bg-gray-200 rounded-full"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <div className="relative flex justify-center mt-5">
                <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="dark:text-gray-200"
                  />
                </div>
                <input
                  type="text"
                  id="email-address-icon"
                  className="form-control dark:text-gray-200"
                  placeholder={t("search_for_products")}
                />
              </div>

              <div className="mt-4">
                {token && (
                  <>
                    <h2 className="text-xl font-bold mb-3  dark:text-gray-100">
                      {t("main_menu")}
                    </h2>
                    <ul className=" *:space-y-3 *:hover:bg-gray-100 transition-colors ">
                      <li onClick={toggleMenu}>
                        <NavLink
                          to="/wishlist"
                          className={({ isActive }) => {
                            return `${
                              isActive
                                ? " text-primary-600 dark:text-primary-600 bg-primary-100"
                                : "text-black dark:text-gray-200"
                            } flex gap-2 px-3 py-2 
                    `;
                          }}
                        >
                          <FontAwesomeIcon className="text-xl" icon={faHeart} />
                          <span className="text-sm">{t("wishlist")}</span>
                        </NavLink>
                      </li>
                      <li onClick={toggleMenu}>
                        <NavLink
                          to={"/cart"}
                          className={({ isActive }) => {
                            return `${
                              isActive
                                ? " text-primary-600 dark:text-primary-600 bg-primary-100"
                                : "text-black dark:text-gray-200"
                            } flex gap-2 px-3 py-2 
                    `;
                          }}
                        >
                          <div className="relative">
                            <FontAwesomeIcon
                              className="text-xl"
                              icon={faCartShopping}
                            />
                            <div className="absolute inline-flex items-center justify-center size-5 text-sm font-bold text-white bg-primary-600 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                              {isLoading ? (
                                <FontAwesomeIcon
                                  icon={faSpinner}
                                  className="spin"
                                />
                              ) : numOfCartItems ? (
                                numOfCartItems
                              ) : (
                                0
                              )}
                            </div>
                          </div>
                          <span className="text-sm">{t("cart")}</span>
                        </NavLink>
                      </li>
                      <li onClick={toggleMenu}>
                        <NavLink
                          to="/account"
                          className={({ isActive }) => {
                            return `${
                              isActive
                                ? " text-primary-600 dark:text-primary-600 bg-primary-100"
                                : "text-black dark:text-gray-200"
                            } flex gap-2 px-3 py-2 
                    `;
                          }}
                        >
                          <FontAwesomeIcon className="text-xl" icon={faUser} />
                          <span className="text-sm">{t("account")}</span>
                        </NavLink>
                      </li>
                    </ul>
                  </>
                )}

                <div className="mt-4">
                  <h2 className="text-xl font-bold mb-3  dark:text-gray-100">
                    {t("account")}
                  </h2>

                  <ul className="*:space-y-4 *:hover:bg-gray-100 transition-colors ">
                    {!token && (
                      <>
                        <li onClick={toggleMenu} className="">
                          <NavLink
                            className={({ isActive }) => {
                              return `${
                                isActive
                                  ? " text-primary-600 dark:text-primary-600 bg-primary-100"
                                  : "text-black dark:text-gray-200"
                              } flex gap-2 px-3 py-2 
                    `;
                            }}
                            to="/signup"
                          >
                            <FontAwesomeIcon
                              className="text-xl"
                              icon={faUserPlus}
                            />
                            <span className="text-sm">{t("sign_up")}</span>
                          </NavLink>
                        </li>
                        <li onClick={toggleMenu}>
                          <NavLink
                            className={({ isActive }) => {
                              return `${
                                isActive
                                  ? " text-primary-600 dark:text-primary-600 bg-primary-100"
                                  : "text-black dark:text-gray-200"
                              } flex gap-2 px-3 py-2 
                    `;
                            }}
                            to="/login"
                          >
                            <FontAwesomeIcon
                              className="text-xl"
                              icon={faAddressCard}
                            />
                            <span className="text-sm">{t("login")}</span>
                          </NavLink>
                        </li>
                      </>
                    )}
                    {token && (
                      <>
                        <li onClick={toggleMenu}>
                          <button
                            className="flex gap-2 px-3 py-2 dark:text-gray-200"
                            onClick={logout}
                          >
                            <FontAwesomeIcon
                              className="text-xl"
                              icon={faRightFromBracket}
                            />
                            <span className="text-sm">{t("logout")}</span>
                          </button>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
