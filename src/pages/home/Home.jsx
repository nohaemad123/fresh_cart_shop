import { useTranslation } from "react-i18next";
import HomeAds from "../../components/home_ads/HomeAds";
import HomeCategories from "../../components/home_categories/HomeCategories";
import HomeDeals from "../../components/home_deals/HomeDeals";
import HomeFeaturedProducts from "../../components/home_featured_products/HomeFeaturedProducts";
import HomeService from "../../components/home_services/HomeService";
import HomeSlider from "../../components/home_slider/HomeSlider";
import NewsLetter from "../../components/newsletter/NewsLetter";
import PageMetaData from "../../components/page_meta_data/PageMetaData";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <PageMetaData title={t("home_title")} description={t("home_title")} />
      <HomeSlider />
      <HomeService />
      <HomeCategories />
      <HomeDeals />
      <HomeAds />
      <HomeFeaturedProducts />
      <NewsLetter />
    </>
  );
}
