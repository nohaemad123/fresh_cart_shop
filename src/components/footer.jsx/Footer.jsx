import { Link } from "react-router";
import logo from "../../assets/freshcart-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import minlogo from "../../assets/mini-logo.png";
import { useCategories } from "../../hooks/useCategories";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { categories } = useCategories();
  const { i18n, t } = useTranslation();

  return (
    <>
      <footer className="py-10 border-t border-gray-300/30 ">
        <div className="container">
          <div className="grid lg:grid-cols-2 xl:grid-cols-5 gap-6 pb-5">
            <div className="col-span-2 space-y-3">
              <Link to={"/"}>
                <img src={logo} alt="" className="mb-3" />
              </Link>
              <p className=" text-gray-500">{t("footer_description")}</p>
              <ul className="flex items-center text-xl gap-4 *:text-gray-500 *:hover:text-primary-400 *:transition-colors *:duration-300">
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faPinterestP} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="text-xl font-bold">{t("categories")}</h2>
              <ul className="mt-4 flex flex-col text-md gap-2 *:text-gray-500 *:hover:text-primary-500 *:transition-colors *:duration-300">
                {categories &&
                  categories.map((category) => (
                    <li key={category._id}>
                      <Link to={`/search-products?category=${category._id}`}>
                        {category.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="text-xl font-bold">{t("quick_links")}</h2>
              <ul className="mt-4 flex flex-col text-md gap-2 *:text-gray-500 *:hover:text-primary-500 *:transition-colors *:duration-300">
                <li>
                  <Link to="/about">{t("about_us")}</Link>
                </li>
                <li>
                  <Link to="/contact">{t("contact_us")}</Link>
                </li>
                <li>
                  <Link to="/privacy">{t("privacy_policy")}</Link>
                </li>
                <li>
                  <Link to="/terms">{t("terms_of_service")}</Link>
                </li>
                <li>
                  <Link to="">{t("shipping_policy")}</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="text-xl font-bold">{t("customer_service")}</h2>
              <ul className="mt-4 flex flex-col text-md gap-2 *:text-gray-500 *:hover:text-primary-500 *:transition-colors *:duration-300">
                <li>
                  <Link to="/account">{t("my_account")}</Link>
                </li>
                <li>
                  <Link to="/account/orders">{t("my_orders")}</Link>
                </li>
                <li>
                  <Link to="/wishlist">{t("wishlist")}</Link>
                </li>
                <li>
                  <Link to="">{t("returns_and_refunds")}</Link>
                </li>
                <li>
                  <Link to="">{t("help_center")}</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="copyright flex justify-between mt-3 border-t border-gray-300/30 py-4">
            <p>
              &copy; {new Date().getFullYear()} FreeCart,{" "}
              {t("all_rights_reserved")}
            </p>
            <img src={minlogo} className="w-8" alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}
