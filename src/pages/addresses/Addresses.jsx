import { useContext, useState } from "react";

import AddressCard from "../../components/address_card/AddressCard";
import EmptyAddress from "../../components/empty_address/EmptyAddress";
import AddAddress from "../../components/add_address/AddAddress";
import { useAddresses } from "../../hooks/useAddresses";
import AddressesSkeleton from "../../skeleton/AddressesSkeleton";
import PageMetaData from "../../components/page_meta_data/PageMetaData";
import { useTranslation } from "react-i18next";

export default function Addresses() {
  const { addresses, isLoading } = useAddresses();
  const [isAction, setIsAction] = useState(null);
  const { t } = useTranslation();

  if (isLoading) return <AddressesSkeleton />;

  return (
    <>
      <PageMetaData
        title={t("addresses_title_page")}
        description={t("addresses_title_page")}
      />
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {t("my_addresses")}
        </h3>
        <button
          onClick={() => setIsAction("add")}
          className="py-2 px-3 bg-primary-600 border-transparent cursor-pointer text-sm font-semibold text-white text-center rounded-md dark:bg-primary-700"
        >
          {t("add_new_address")}
        </button>
      </div>

      {!addresses.length && <EmptyAddress />}

      <div className="grid lg:grid-cols-2 mt-5 gap-10">
        {addresses &&
          addresses.map((address) => (
            <AddressCard addressInfo={address} key={address._id} />
          ))}
      </div>

      <div className="mt-5">{isAction == "add" && <AddAddress />}</div>
    </>
  );
}
