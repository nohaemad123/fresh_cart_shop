import HomeAds from "../../components/home_ads/HomeAds";
import HomeCategories from "../../components/home_categories/HomeCategories";
import HomeDeals from "../../components/home_deals/HomeDeals";
import HomeFeaturedProducts from "../../components/home_featured_products/HomeFeaturedProducts";
import HomeService from "../../components/home_services/HomeService";
import HomeSlider from "../../components/home_slider/HomeSlider";
import NewsLetter from "../../components/newsletter/NewsLetter";
import PageMetaData from "../../components/page_meta_data/PageMetaData";

export default function Home() {
  return (
    <>
      <PageMetaData
        title="Fresh cart - home page"
        description="Fresh cart - home page"
      />
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
