import React from "react";
import PageMetaData from "../../components/page_meta_data/PageMetaData";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";

export default function Contact() {
  return (
    <>
      <PageMetaData
        title="Fresh cart - Contact us page"
        description="Fresh cart - Contact us page"
      />
      <BreadCrumb thirdLink={"Contact us"} bg_gray={"bg-mainColor"} />

      <section className="py-10 w-[60%] mx-auto">
        <div className="container">
          <h2 className="text-xl font-semibold mb-2">Retailer Inquiries</h2>
          <p>
            This form is for retailer inquiries only. For all other customer or
            shopper support requests, please visit the links below this form.
          </p>
          <form className="mt-5">
            <div className="grid lg:grid-cols-2 space-y-5 lg:space-x-10">
              <div className="flex flex-col space-y-2">
                <label>
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="form-control w-full border border-gray-300"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label>
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="form-control w-full border border-gray-300"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2 mb-5">
              <label>
                Company <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="your company"
                className="form-control w-full border border-gray-300"
              />
            </div>
            <div className="flex flex-col space-y-2 mb-5">
              <label>Title</label>
              <input
                type="text"
                placeholder="your title"
                className="form-control w-full border border-gray-300"
              />
            </div>
            <div className="grid lg:grid-cols-2 space-y-5 lg:space-x-10">
              <div className="flex flex-col space-y-2">
                <label>
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-control w-full border border-gray-300"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label>
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone"
                  className="form-control w-full border border-gray-300"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2 mb-5">
              <label>Write message</label>
              <textarea
                placeholder="Additional comments"
                rows="5"
                className="form-control w-full border border-gray-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn flex gap-2 items-center text-center rounded-md py-2 px-3 justify-center bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-500"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
