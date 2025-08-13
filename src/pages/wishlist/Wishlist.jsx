import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import MyWishlist from "../../components/my_wishlist/MyWishlist";
import { useWishlist } from "../../hooks/useWishlist";
import WishlistSkeleton from "../../skeleton/WishlistSkeleton";
import PageMetaData from "../../components/page_meta_data/PageMetaData";
import { useTranslation } from "react-i18next";

export default function Wishlist() {
  const { wishlistProducts, isLoading } = useWishlist();
  const { t } = useTranslation();

  if (isLoading) return <WishlistSkeleton />;
  return (
    <>
      <PageMetaData
        title={t("wishlist_page.pageTitle")}
        description={t("wishlist_page.pageTitle")}
      />
      <BreadCrumb thirdLink={t("wishlist")} />
      <div className="bg-mainColor py-15">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 mb-2 gap-x-5 items-start">
            <div className="md:col-span-7 lg:col-span-9 bg-white py-5 rounded-md border border-gray-300/70 w-full inline-block">
              <div className="border-b border-gray-300 pb-5 px-10">
                <h3 className="text-xl font-bold">
                  {t("wishlist_page.myWishlist")}
                </h3>
                <div className="flex flex-col lg:flex-row space-y-2 justify-between items-center">
                  <p className="text-gray-500 mt-1">
                    {wishlistProducts?.length}
                    {t("wishlist_page.itemsInWishlist")}
                  </p>
                  <div className="flex gap-x-4">
                    <button className="cursor-pointer">
                      <FontAwesomeIcon icon={faTrashCan} className="me-2" />
                      {t("wishlist_page.clearAll")}
                    </button>
                    <button className="w-fit px-4 py-2 rounded-md cursor-pointer bg-primary-600 text-white text-sm inline-flex items-center">
                      <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
                      {t("wishlist_page.addAllToCart")}
                    </button>
                  </div>
                </div>
              </div>
              <div className="px-10">
                <MyWishlist />
              </div>
            </div>
            <div className="md:col-span-5 lg:col-span-3 ">
              <div className="bg-white p-5 rounded-md border border-gray-300/70 mb-5">
                <h3 className="text-lg font-semibold">
                  {t("wishlist_page.createNewWishlist")}
                </h3>
                <div className="form-group mt-2 flex flex-col space-y-2">
                  <label> {t("wishlist_page.wishlistName")}</label>
                  <input
                    type="text"
                    className="form-control w-full"
                    placeholder="e.g. Holiday shopping"
                  />
                </div>
                <div className="form-group mt-2 flex flex-col space-y-2">
                  <label>{t("wishlist_page.privacy")}</label>
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        className="accent-primary-600 size-4"
                        name="rememberMe"
                      />
                      <label>{t("wishlist_page.public")}</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        className="accent-primary-600 size-4"
                        name="rememberMe"
                      />
                      <label>{t("wishlist_page.private")}</label>
                    </div>
                  </div>
                </div>
                <button className="py-3 mt-3 bg-primary-600 w-full  border-transparent cursor-pointer  text-lg font-semibold text-white text-center rounded-md">
                  {t("wishlist_page.createWishlistBtn")}{" "}
                </button>
              </div>
              <div className="bg-white p-5 rounded-md border border-gray-300/70 mb-5">
                <h3 className="text-lg font-semibold">
                  {t("wishlist_page.myWishlist")}{" "}
                </h3>
                <div className="flex justify-between border-b border-gray-300 pb-3 mt-5 items-center">
                  <div className="flex flex-col">
                    <h4 className="text-[16px] font-medium">
                      {t("wishlist_page.defaultWishlist")}
                    </h4>
                    <span className="text-sm text-gray-500">
                      12 {t("items")}
                    </span>
                  </div>
                  <Link to="" className="text-lg text-primary-600 font-medium">
                    {t("view")}
                  </Link>
                </div>
                <div className="flex justify-between border-b border-gray-300 pb-3 mt-2 items-center">
                  <div className="flex flex-col">
                    <h4 className="text-[16px] font-medium">
                      {t("wishlist_page.birthdayIdeas")}
                    </h4>
                    <span className="text-sm text-gray-500">
                      8 {t("items")}
                    </span>
                  </div>
                  <Link to="" className="text-lg text-primary-600 font-medium">
                    {t("view")}
                  </Link>
                </div>
                <div className="flex justify-between pt-3">
                  <div className="flex flex-col">
                    <h4 className="text-[16px] font-medium">
                      {t("wishlist_page.weeklyGroceries")}
                    </h4>
                    <span className="text-sm text-gray-500">
                      18 {t("items")}
                    </span>
                  </div>
                  <Link to="" className="text-lg text-primary-600 font-medium">
                    {t("view")}
                  </Link>
                </div>
              </div>
              <div className="bg-white p-5 rounded-md border border-gray-300/70 mb-5 flex flex-col space-y-3">
                <h3 className="text-lg font-semibold">
                  {t("wishlist_page.shareWishlist")}
                </h3>
                <p className="text-gray-500">
                  {t("wishlist_page.shareWishlistDesc")}
                </p>
                <div className="grid grid-cols-2 space-x-3">
                  <button className="bg-blue-800 cursor-pointer py-2 text-white rounded-lg text-sm">
                    <FontAwesomeIcon icon={faFacebook} className="me-2" />
                    {t("facebook")}
                  </button>
                  <button className="bg-blue-400 cursor-pointer py-2 text-white rounded-lg text-sm">
                    <FontAwesomeIcon icon={faTwitter} className="me-2" />
                    {t("twitter")}
                  </button>
                </div>
                <div className="border border-gray-400 p-2 rounded-lg flex items-center relative h-[35px] overflow-hidden">
                  <span className="text-wrap">
                    http://www.freshcart.com/wishlist
                  </span>
                  <button className="absolute top-[1px] ltr:right-[1px] rtl:left-[1px] rounded-lg  bg-gray-200  px-2  h-[31px] text-sm">
                    {t("wishlist_page.copyLink")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
