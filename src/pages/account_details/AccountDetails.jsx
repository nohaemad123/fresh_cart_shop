import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import author_image from "../../assets/review-author.png";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import UpdateAccount from "../../components/update_account/UpdateAccount";
import PageMetaData from "../../components/page_meta_data/PageMetaData";
import { useTranslation } from "react-i18next";

export default function AccountDetails() {
  const { t } = useTranslation();

  return (
    <>
      <PageMetaData
        title={t("account_details_title_page")}
        description={t("account_details_title_page")}
      />
      <h3 className="text-2xl font-bold">{t("account_details")}</h3>
      <div className="flex flex-col lg:flex-row mt-5 gap-x-5">
        <div className="relative w-fit">
          <img
            src={author_image}
            className="size-30 border-5 border-gray-300 rounded-full"
          />
          <div className="absolute bottom-0 ltr:right-0 rtl:left-0 bg-primary-600 size-10 rounded-full flex justify-center items-center text-white">
            <FontAwesomeIcon icon={faCamera} />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="text-lg">{t("upload_profile")}</h4>
          <div className="flex gap-x-3">
            <button
              type="submit"
              className=" py-2 px-3 bg-primary-600 border-transparent cursor-pointer  text-lg font-semibold text-white text-center rounded-md"
            >
              {t("upload_new")}
            </button>
            <button className="py-2 px-3 border cursor-pointer border-primary-600  text-sm text-primary-600 font-semibold text-center rounded-md">
              {t("cancel")}
            </button>
          </div>
          <h4 className="text-sm text-gray-500">{t("image_size")}</h4>
        </div>
      </div>

      <div className="mt-5 border-t border-gray-300 pt-5">
        <h3 className="text-2xl font-bold">{t("profile_information")}</h3>
        <UpdateAccount />
      </div>
    </>
  );
}
