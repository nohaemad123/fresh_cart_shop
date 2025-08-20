import { Outlet } from "react-router";
import AccountSidebar from "../account_sidebar/AccountSidebar";
import BreadCrumb from "../breadcrumb/BreadCrumb";
import { useTranslation } from "react-i18next";

export default function AccountLayout() {
  const { t } = useTranslation();

  return (
    <>
      <BreadCrumb
        thirdLink={t("account")}
        bg_gray={"bg-mainColor dark:bg-gray-900"}
      />
      <div className="py-10 bg-mainColor dark:bg-gray-900 transition-colors duration-300">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 mb-2 gap-x-5">
            <div className="lg:col-span-3 md:col-span-4">
              <AccountSidebar />
            </div>
            <div className="lg:col-span-9 md:col-span-8">
              <div className="bg-white dark:bg-gray-800 p-7 rounded-md transition-colors duration-300">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
