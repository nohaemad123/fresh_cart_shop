import { useContext } from "react";
import { authContext } from "../../context/Auth.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxArchive,
  faCreditCard,
  faDashboard,
  faHeart,
  faLocationDot,
  faLocationPin,
  faLock,
  faMapLocation,
  faRightFromBracket,
  faUser,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router";
import { useTranslation } from "react-i18next";

export default function AccountSidebar() {
  const { userData, logout } = useContext(authContext);
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-white p-7 rounded-md">
        <div className="flex gap-x-5">
          <div className="rounded_icon size-14">
            <FontAwesomeIcon icon={faUser} className="" />
          </div>
          <div className="flex flex-col space-y-1">
            <h4 className="text-lg font-medium ">{userData?.name}</h4>
            <h4 className="text-sm ">{userData?.email}</h4>
          </div>
        </div>
        <ul className="mt-5 flex flex-col space-y-1">
          <li>
            <NavLink
              end
              className={({ isActive }) => {
                return `${
                  isActive
                    ? " text-primary-600 flex py-2 bg-primary-100"
                    : "text-gray-500 flex gap-2 "
                }  items-center px-3 py-2 flex rounded-md
        `;
              }}
              to="/account"
            >
              <FontAwesomeIcon icon={faDashboard} className="me-4" />{" "}
              {t("dashboard")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return `${
                  isActive
                    ? " text-primary-600 flex py-2 bg-primary-100"
                    : "text-gray-500 flex gap-2 "
                }  items-center px-3 py-2 rounded-md
                    `;
              }}
              to="/account/orders"
            >
              <FontAwesomeIcon icon={faBoxArchive} className="me-4" />{" "}
              {t("orders")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return `${
                  isActive
                    ? " text-primary-600 flex py-2 bg-primary-100"
                    : "text-gray-500 flex gap-2 "
                }  items-center px-3 py-2 flex rounded-md
                    `;
              }}
              to="/account/my-wishlist"
            >
              <FontAwesomeIcon icon={faHeart} className="me-4" />{" "}
              {t("wishlist")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return `${
                  isActive
                    ? " text-primary-600 flex py-2 bg-primary-100"
                    : "text-gray-500 flex gap-2 "
                }  items-center px-3 py-2 flex rounded-md
                    `;
              }}
              to="/account/addresses"
            >
              <FontAwesomeIcon icon={faLocationDot} className="me-4" />
              {t("addresses")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return `${
                  isActive
                    ? " text-primary-600 flex py-2 bg-primary-100"
                    : "text-gray-500 flex gap-2 "
                }  items-center px-3 py-2 flex rounded-md
                    `;
              }}
              to="/account/payment-methods"
            >
              <FontAwesomeIcon icon={faCreditCard} className="me-4" />{" "}
              {t("payment_methods")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return `${
                  isActive
                    ? " text-primary-600 flex py-2 bg-primary-100"
                    : "text-gray-500 flex gap-2 "
                }  items-center px-3 py-2 flex rounded-md
                    `;
              }}
              to="/account/account-details"
            >
              <FontAwesomeIcon icon={faUserPen} className="me-4" />{" "}
              {t("account_details")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return `${
                  isActive
                    ? " text-primary-600 flex py-2 bg-primary-100"
                    : "text-gray-500 flex gap-2 "
                }  items-center px-3 py-2 flex rounded-md
                    `;
              }}
              to="/account/change-password"
            >
              <FontAwesomeIcon icon={faLock} className="me-4" />{" "}
              {t("change_password")}
            </NavLink>
          </li>
          <li>
            <Link
              onClick={() => logout()}
              className="text-gray-500 items-center px-3 py-2 flex rounded-md"
            >
              <FontAwesomeIcon icon={faRightFromBracket} className="me-4 " />
              {t("logout")}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
