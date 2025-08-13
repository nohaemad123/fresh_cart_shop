import { useTranslation } from "react-i18next";
import no_products from "../../assets/undraw_empty_4zx0.svg";
import { Link } from "react-router";

export default function NoProducts({ name }) {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-white p-10 rounded-md">
        <div className=" flex flex-col justify-center items-center space-y-5">
          <img src={no_products} alt="" className="w-80" />
          <h3 className="text-2xl text-primary-600 font-bold">
            {t("no_products_title")} {name}
          </h3>
          <Link
            to="/"
            className="py-2 px-3 border mb-5 bg-primary-600  text-lg text-white font-semibold text-center rounded-md"
          >
            {t("continue_shopping")}
          </Link>
        </div>
      </div>
    </>
  );
}
