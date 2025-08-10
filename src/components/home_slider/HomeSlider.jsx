import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image_slider from "../../assets/home-slider-1.png";
import image_slider2 from "../../assets/vegetables.jpg";
import image_slider3 from "../../assets/360_F_147516063_hCXI8VUIdBYud0B0hhS3Yo5CFTT1a4g8.jpg";
import { useTranslation } from "react-i18next";

export default function HomeSlider() {
  const { t } = useTranslation();

  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        autoplay={{ delay: 10000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('${image_slider}')`,
              backgroundSize: "cover",
              width: "100%",
              backgroundPosition: "center center",
            }}
          >
            <div className="overlay bg-gradient-to-l from-primary-600/70 to-primary-600/30 py-30">
              <div className="container flex flex-col space-y-4 text-white">
                <h2 className="text-2xl font-bold">
                  {t("home_slider")}
                  <br />
                  {t("home_slider2")}
                </h2>
                <p className="text-lg">{t("home_slider_desc")}</p>
                <div className="flex gap-4">
                  <button className="btn max-w-40 bg-white border border-transparent text-primary-600 rounded-lg py-2 px-3 hover:bg-transparent hover:border-white hover:text-white transition-all duration-500">
                    {t("shop_now")}
                  </button>
                  <button className="btn border max-w-40 border-white rounded-lg py-2 px-3 hover:bg-white hover:border-transparent hover:text-primary-600 transition-all duration-500">
                    {t("view_deals")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('${image_slider2}')`,
              backgroundSize: "cover",
              width: "100%",
              backgroundPosition: "center center",
            }}
          >
            <div className="overlay bg-gradient-to-l from-primary-600/70 to-primary-600/30 py-30">
              <div className="container flex flex-col space-y-4 text-white">
                <h2 className="text-2xl font-bold">
                  {t("home_slider")}
                  <br />
                  {t("home_slider2")}
                </h2>
                <p className="text-lg">{t("home_slider_desc")}</p>
                <div className="flex gap-4">
                  <button className="btn max-w-40 bg-white border border-transparent text-primary-600 rounded-lg py-2 px-3 hover:bg-transparent hover:border-white hover:text-white transition-all duration-500">
                    {t("shop_now")}
                  </button>
                  <button className="btn border max-w-40 border-white rounded-lg py-2 px-3 hover:bg-white hover:border-transparent hover:text-primary-600 transition-all duration-500">
                    {t("view_deals")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            style={{
              backgroundImage: `url('${image_slider3}')`,
              backgroundSize: "cover",
              width: "100%",
              backgroundPosition: "center center",
            }}
          >
            <div className="overlay bg-gradient-to-l from-primary-600/70 to-primary-600/30 py-30">
              <div className="container flex flex-col space-y-4 text-white">
                <h2 className="text-2xl font-bold">
                  {t("home_slider")}
                  <br />
                  {t("home_slider2")}
                </h2>
                <p className="text-lg">{t("home_slider_desc")}</p>
                <div className="flex gap-4">
                  <button className="btn max-w-40 bg-white border border-transparent text-primary-600 rounded-lg py-2 px-3 hover:bg-transparent hover:border-white hover:text-white transition-all duration-500">
                    {t("shop_now")}
                  </button>
                  <button className="btn border max-w-40 border-white rounded-lg py-2 px-3 hover:bg-white hover:border-transparent hover:text-primary-600 transition-all duration-500">
                    {t("view_deals")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
