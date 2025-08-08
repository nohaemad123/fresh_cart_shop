import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import PageMetaData from "../../components/page_meta_data/PageMetaData";
import featured_image from "../../assets/about-img.jpg";
import about_image1 from "../../assets/about-icons-1.svg";
import about_image2 from "../../assets/about-icons-2.svg";
import about_image3 from "../../assets/about-icons-3.svg";

export default function About() {
  return (
    <>
      <PageMetaData
        title="Fresh cart - About page"
        description="Fresh cart - About page"
      />
      <BreadCrumb thirdLink={"About"} bg_gray={"bg-mainColor"} />

      <section className="py-20 w-[75%] mx-auto">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-7 ">
              <div className="rounded-tl-md rounded-bl-md  h-full flex items-center">
                <div className="flex flex-col justify-center items-stretch space-y-3">
                  <h2 className="text-3xl font-bold">
                    The Future of Grocery Delivery:
                  </h2>
                  <p className="text-gray-500">
                    By powering the future of grocery with our retail partners,
                    we give everyone access to the food they love and more time
                    to enjoy it together.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              <img
                src={featured_image}
                className="w-full rounded-tr-md rounded-br-md h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 w-[80%] mx-auto">
        <div className="container">
          <h2 className="text-2xl font-bold">Ready to get started?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-x-10 gap-y-5 mt-5">
            <div className="bg-gray-200 rounded-lg p-10 flex flex-col space-y-2">
              <img src={about_image1} className="size-30" />
              <h2 className="text-xl font-semibold">Ready to get started?</h2>
              <p className="text-gray-600">
                Duis placerat, urna ut dictum lobortis, erat libero feugiat
                nulla, ullamcorper fermentum lectus dolor ut tortor.
              </p>
              <button className="w-fit bg-black py-2 px-3 rounded-md text-white">
                Freshcart platform
              </button>
            </div>
            <div className="bg-gray-200 rounded-lg p-10 flex flex-col space-y-2">
              <img src={about_image2} className="size-30" />
              <h2 className="text-xl font-semibold">
                Advertise my brand on Freshcart
              </h2>
              <p className="text-gray-600">
                Duis placerat, urna ut dictum lobortis, erat libero feugiat
                nulla, ullamcorper fermentum lectus dolor ut tortor.
              </p>
              <button className="w-fit bg-black py-2 px-3 rounded-md text-white">
                Freshcart ads
              </button>
            </div>
            <div className="bg-gray-200 rounded-lg p-10 flex flex-col space-y-2">
              <img src={about_image3} className="size-30" />
              <h2 className="text-xl font-semibold">
                Learn more about Freshcart
              </h2>
              <p className="text-gray-600">
                Duis placerat, urna ut dictum lobortis, erat libero feugiat
                nulla, ullamcorper fermentum lectus dolor ut tortor.
              </p>
              <button className="w-fit bg-black py-2 px-3 rounded-md text-white">
                Freshcart platform
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-700 text-white ">
        <div className="container">
          <div className="flex flex-col space-y-3">
            <h3 className="text-2xl font-bold">
              Trusted by retailers.
              <br /> Loved by customers.
            </h3>
            <p className="">
              We give everyone access to the food they love and more time to
              enjoy it together.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4  gap-x-10 gap-y-5 mt-10">
            <div className="flex flex-col">
              <h3 className="text-5xl font-extrabold">500k</h3>
              <p>Shoppers</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-5xl font-extrabold">4,500+</h3>
              <p>Cities</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-5xl font-extrabold">40+</h3>
              <p>Stores</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-5xl font-extrabold">650+</h3>
              <p>Retail Brands</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
