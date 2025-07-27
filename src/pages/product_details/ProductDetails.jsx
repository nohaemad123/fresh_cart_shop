import { useParams } from "react-router";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import ProductInfo from "../../components/product_info/ProductInfo";
import ProductTabs from "../../components/productTabs/ProductTabs";
import RelatedProducts from "../../components/related_products/RelatedProducts";
import { useProductDetails } from "../../hooks/useProductDetails";
import ProductDetailsSkeleton from "../../skeleton/ProductDetailsSkeleton";
import PageMetaData from "../../components/page_meta_data/PageMetaData";

export default function ProductDetails() {
  let { id } = useParams();

  const { productDetails, isLoading } = useProductDetails(id);

  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }

  return (
    <>
      <PageMetaData
        title={productDetails?.title}
        description={`Fresh cart - ${productDetails?.title}`}
      />
      <BreadCrumb
        secondLink={productDetails?.category?.name}
        thirdLink={productDetails?.title}
      />

      <div className="bg-mainColor py-5">
        <div className="container">
          <ProductInfo productDetails={productDetails} />

          <ProductTabs productDetails={productDetails} />

          <RelatedProducts productDetails={productDetails} />
        </div>
      </div>
    </>
  );
}
