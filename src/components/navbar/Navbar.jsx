import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMagnifyingGlass,
  faCartShopping,
  faUserPlus,
  faAddressCard,
  faRightFromBracket,
  faBars,
  faChevronDown,
  faEllipsis,
  faSpinner,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import NavSidebar from "../nav_sidebar/NavSidebar";
import logo from "../../assets/freshcart-logo.svg";
import { authContext } from "../../context/Auth.context";
import { useOnlineStatus } from "../../hooks/useOnlineStatus";
import { useCategories } from "../../hooks/useCategories";
import { useCart } from "../../hooks/useCart";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { categories } = useCategories();
  const { logout, token } = useContext(authContext);
  const { isLoading, numOfCartItems } = useCart();
  const isOnline = useOnlineStatus();
  const { i18n, t } = useTranslation();

  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }, [lang]);

  const changeLang = (lng) => {
    setLang(lng);
  };

  return (
    <>
      <header className=" top_navbar hidden xl:block">
        <div className="container">
          <div className="flex justify-between py-3 text-sm">
            <div className="details flex space-x-5">
              <p>
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                <a
                  href="tel:+1 (800)
                123-4567"
                >
                  +1 (800) 123-4567
                </a>
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                <a href="mailto:support@freshcart.com">support@freshcart.com</a>
              </p>
              {isOnline && (
                <span className="text-primary-600">
                  <FontAwesomeIcon icon={faWifi} /> {t("online")}
                </span>
              )}
            </div>
            <div className="links">
              <ul className="flex space-x-4 items-center">
                <li>
                  <Link to="/">{t("track_order")}</Link>
                </li>
                <li>
                  <Link to="/about">{t("about_us")}</Link>
                </li>
                <li>
                  <Link to="/contact">{t("contact_us")}</Link>
                </li>
                <li>
                  <select>
                    <option>EGP</option>
                    <option>SAR</option>
                    <option>AED</option>
                  </select>
                </li>
                <li>
                  {lang === "ar" ? (
                    <button
                      onClick={() => changeLang("en")}
                      className=" text-black flex items-center cursor-pointer  overflow-hidden "
                    >
                      <img
                        src="https://flagcdn.com/w20/gb.png"
                        alt="English"
                        className="w-6 h-6 object-fit rounded-full me-2"
                      />
                      EN
                    </button>
                  ) : (
                    <button
                      onClick={() => changeLang("ar")}
                      className=" text-black flex items-center cursor-pointer  overflow-hidden "
                    >
                      <img
                        src="https://flagcdn.com/w20/sa.png"
                        alt="العربية"
                        className="w-6 h-6 object-fit rounded-full me-2"
                      />
                      AR
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="second_navbar border-t-2 border-gray-300/30 py-4">
            <div className="flex justify-between items-center">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
              <div className="relative flex justify-center">
                <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <input
                  type="text"
                  id="email-address-icon"
                  className="form-control min-w-96"
                  placeholder={t("search_for_products")}
                />
              </div>

              <div className="links ">
                <ul className="flex gap-8 items-center">
                  <li>
                    <NavLink
                      to={"/wishlist"}
                      className={({ isActive }) => {
                        return `${
                          isActive
                            ? " text-primary-600 flex flex-col gap-2"
                            : "text-black flex flex-col gap-2"
                        } 
                    `;
                      }}
                    >
                      <FontAwesomeIcon className="text-xl" icon={faHeart} />
                      <span className="text-sm">{t("wishlist")}</span>
                    </NavLink>
                  </li>
                  {token ? (
                    <>
                      <li>
                        <NavLink
                          to={"/cart"}
                          className={({ isActive }) => {
                            return `${
                              isActive
                                ? " text-primary-600 flex flex-col gap-2"
                                : "text-black flex flex-col gap-2"
                            } 
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
                      <li>
                        <NavLink
                          to="/account"
                          className={({ isActive }) => {
                            return `${
                              isActive
                                ? " text-primary-600 flex flex-col gap-2"
                                : "text-black flex flex-col gap-2"
                            } 
                    `;
                          }}
                        >
                          <FontAwesomeIcon className="text-xl" icon={faUser} />
                          <span className="text-sm">{t("account")}</span>
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <NavLink
                          className={({ isActive }) => {
                            return `${
                              isActive
                                ? " text-primary-600 flex flex-col gap-2"
                                : "text-black flex flex-col gap-2"
                            } 
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
                      <li>
                        <NavLink
                          className={({ isActive }) => {
                            return `${
                              isActive
                                ? " text-primary-600 flex flex-col gap-2"
                                : "text-black flex flex-col gap-2"
                            } 
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
                    <li onClick={logout}>
                      <Link className="flex flex-col gap-2">
                        <FontAwesomeIcon
                          className="text-xl"
                          icon={faRightFromBracket}
                        />
                        <span className="text-sm">{t("logout")}</span>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <nav className="bg-gray-100 py-4">
          <div className="container">
            <ul className="font-medium flex flex-col p-4 md:p-0   md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <div className="relative group inline-block text-left">
                  <button
                    className="text-white cursor-pointer bg-primary-600 hover:bg-primary-600/95 font-medium rounded-lg text-md px-5 py-2.5 inline-flex items-center "
                    type="button"
                  >
                    <FontAwesomeIcon icon={faBars} className="me-2" />
                    {t("all_categories")}
                    <FontAwesomeIcon icon={faChevronDown} className="ms-2" />
                  </button>

                  <div className="absolute hidden group-hover:block z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                    <ul className=" text-sm text-gray-700 dark:text-gray-200 w-full">
                      {categories &&
                        categories.map((category) => (
                          <li
                            key={category._id}
                            className="border-b border-gray-200"
                          >
                            <Link
                              to={`/search-products?category=${category._id}`}
                              className="flex px-4 py-3"
                            >
                              <img
                                src={category.image}
                                className="size-3 me-2 mt-1"
                              />
                              {category.name}
                            </Link>
                          </li>
                        ))}
                      <li className="px-3 py-3">
                        <Link to="/categories" className="text-sm">
                          <FontAwesomeIcon
                            icon={faEllipsis}
                            className="me-1 text-primary-600"
                          />
                          View all categories
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    return `${
                      isActive
                        ? " text-primary-600 flex flex-col mt-2"
                        : "text-black flex flex-col mt-2"
                    } 
                    `;
                  }}
                  aria-current="page"
                >
                  {t("home")}
                </NavLink>
              </li>
              <li>
                <Link aria-current="page" className="block mt-2">
                  {t("recently_added")}
                </Link>
              </li>
              <li>
                <Link aria-current="page" className="block mt-2">
                  {t("featured_products")}
                </Link>
              </li>
              <li>
                <Link aria-current="page" className="block mt-2">
                  {t("offers")}
                </Link>
              </li>
              <li>
                <NavLink
                  to="/categories"
                  className={({ isActive }) => {
                    return `${
                      isActive
                        ? " text-primary-600 block  mt-2 me-10"
                        : "text-black block mt-2 me-10"
                    } 
                    `;
                  }}
                  aria-current="page"
                >
                  {t("categories")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/brands"
                  className={({ isActive }) => {
                    return `${
                      isActive
                        ? " text-primary-600 flex flex-col mt-2"
                        : "text-black flex flex-col mt-2"
                    } 
                    `;
                  }}
                  aria-current="page"
                >
                  {t("brands")}
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <NavSidebar />
    </>
  );
}
