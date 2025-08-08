import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import PageMetaData from "../../components/page_meta_data/PageMetaData";
import privacy_image from "../../assets/undraw_personal-data_a1n8.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function PrivacyPolice() {
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
            <img src={privacy_image} className="w-full" />
            <div className="flex flex-col my-10 space-y-2">
              <h3 className="text-primary-600 text-2xl font-bold">
                Privacy policy
              </h3>
              <p className="text-gray-500">
                We value your privacy and are committed to protecting your
                personal information. This policy explains how we collect, use,
                and safeguard your data when you use our services.
              </p>
            </div>
            <div
              id="accordion-color"
              data-accordion="collapse"
              data-active-classes="bg-primary-100 mt-10 dark:bg-gray-800 text-primary-600 dark:text-white"
            >
              <h2 id="accordion-color-heading-1">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium  text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-primary-800 dark:border-gray-700 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 gap-3"
                  data-accordion-target="#accordion-color-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-color-body-1"
                >
                  <span>Information We Collect</span>
                  <svg
                    data-accordion-icon
                    class="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-color-body-1"
                class="hidden"
                aria-labelledby="accordion-color-heading-1"
              >
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <ul className="*:text-lg *:font-medium *:text-gray-500 flex flex-col space-y-2">
                    <li>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-primary-600 me-2"
                      />
                      Personal details: name, email, phone number, shipping
                      address.
                    </li>

                    <li>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-primary-600 me-2"
                      />
                      Order and payment information.
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-primary-600 me-2"
                      />
                      Technical data: IP address, cookies.
                    </li>
                  </ul>
                </div>
              </div>
              <h2 id="accordion-color-heading-2">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium  text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-primary-800 dark:border-gray-700 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 gap-3"
                  data-accordion-target="#accordion-color-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-color-body-2"
                >
                  <span>How We Use Your Information</span>
                  <svg
                    data-accordion-icon
                    class="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-color-body-2"
                class="hidden"
                aria-labelledby="accordion-color-heading-2"
              >
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                  <ul className="*:text-lg *:font-medium *:text-gray-500 flex flex-col space-y-2">
                    <li>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-primary-600 me-2"
                      />
                      To process and deliver your orders.
                    </li>

                    <li>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-primary-600 me-2"
                      />
                      To improve our website and services.
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-primary-600 me-2"
                      />
                      To send important updates or promotional offers (with your
                      consent).
                    </li>
                  </ul>
                </div>
              </div>
              <h2 id="accordion-color-heading-3">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium  text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-primary-800 dark:border-gray-700 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 gap-3"
                  data-accordion-target="#accordion-color-body-3"
                  aria-expanded="false"
                  aria-controls="accordion-color-body-3"
                >
                  <span>Data Sharing</span>
                  <svg
                    data-accordion-icon
                    class="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-color-body-3"
                class="hidden"
                aria-labelledby="accordion-color-heading-3"
              >
                <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    We only share your data with trusted service providers
                    (e.g., payment processors, shipping companies) to complete
                    your orders. We never sell your personal information.
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
