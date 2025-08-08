import React from "react";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import PageMetaData from "../../components/page_meta_data/PageMetaData";
import terms_image from "../../assets/undraw_terms_sx63.svg";

export default function Terms() {
  return (
    <>
      <PageMetaData
        title="Fresh cart - Privacy policy page"
        description="Fresh cart - Privacy policy page"
      />
      <BreadCrumb thirdLink={"Privacy policy"} />

      <div className="py-20  bg-mainColor">
        <div className="container">
          <div className="w-[80%]  mx-auto">
            <img src={terms_image} className="w-full" />
            <div className="flex flex-col my-10 space-y-2">
              <h3 className="text-primary-600 text-2xl font-bold">
                Terms of services
              </h3>
              <p className="text-gray-500">
                We value your privacy and are committed to protecting your
                personal information. This policy explains how we collect, use,
                and safeguard your data when you use our services.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 space-y-5 lg:space-x-10">
              <div className="flex flex-col space-y-2 bg-white p-5 rounded-xl shadow-md">
                <div className="flex flex-col space-y-2">
                  <h3 className="text-primary-600 text-[18px] font-bold">
                    Acceptance of Terms
                  </h3>
                  <p className="text-gray-500">
                    By using our website, you agree to these terms and
                    conditions.
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-2 bg-white p-5 rounded-xl shadow-md w-full">
                <div className="flex flex-col space-y-2">
                  <h3 className="text-primary-600 text-[18px] font-bold">
                    Products & Pricing
                  </h3>
                  <p className="text-gray-500">
                    We strive for accurate product descriptions and prices, but
                    errors may occur. Prices are subject to change without
                    notice.
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-2 bg-white p-5 rounded-xl shadow-md">
                <div className="flex flex-col space-y-2">
                  <h3 className="text-primary-600 text-[18px] font-bold">
                    Orders
                  </h3>
                  <p className="text-gray-500">
                    All orders are subject to acceptance and availability. We
                    reserve the right to refuse or cancel orders.
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-2 bg-white p-5 rounded-xl shadow-md w-full">
                <div className="flex flex-col space-y-2">
                  <h3 className="text-primary-600 text-[18px] font-bold">
                    Payments
                  </h3>
                  <p className="text-gray-500">
                    Payments must be completed through our approved methods
                    before order processing.
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-2 bg-white p-5 rounded-xl shadow-md">
                <div className="flex flex-col space-y-2">
                  <h3 className="text-primary-600 text-[18px] font-bold">
                    Shipping & Delivery
                  </h3>
                  <p className="text-gray-500">
                    Delivery times are estimates and may vary. We are not
                    responsible for delays beyond our control.
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-2 bg-white p-5 rounded-xl shadow-md w-full">
                <div className="flex flex-col space-y-2">
                  <h3 className="text-primary-600 text-[18px] font-bold">
                    Returns & Refunds
                  </h3>
                  <p className="text-gray-500">
                    Returns are accepted under our return policy. Items must be
                    unused and in original packaging.
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-2 bg-white p-5 rounded-xl shadow-md">
                <div className="flex flex-col space-y-2">
                  <h3 className="text-primary-600 text-[18px] font-bold">
                    User Responsibilities
                  </h3>
                  <p className="text-gray-500">
                    You agree not to misuse our website, commit fraud, or
                    violate any laws.
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-2 bg-white p-5 rounded-xl shadow-md">
                <div className="flex flex-col space-y-2">
                  <h3 className="text-primary-600 text-[18px] font-bold">
                    Limitation of Liability
                  </h3>
                  <p className="text-gray-500">
                    We are not liable for indirect, incidental, or consequential
                    damages from using our services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
