import { Link } from "react-router";
import ProductRating from "../product_rating/ProductRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../hooks/useCart";
import { useDeleteProductFromWishlist } from "../../hooks/useDeleteProductFromWishlist";
import { useDeleteProductFromCart } from "../../hooks/useDeleteProductFromCart";
import { useAddProductToCart } from "../../hooks/useAddProductToCart";

export default function WishlistItem({ productInfo }) {
  const removeProductToCartApi = useDeleteProductFromCart();
  const addProductToCartApi = useAddProductToCart();

  const { cartProducts } = useCart();
  const deleteProductFromWishlist = useDeleteProductFromWishlist();

  const isExist = cartProducts?.products.find(
    (product) => productInfo._id === product.product._id
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-x-5 mb-5 border-b border-gray-300 pb-5">
        <div className="lg:col-span-8 items-center">
          <div className="flex items-center gap-5 ">
            <div className="max-w-[100px]">
              <img
                src={productInfo.imageCover}
                className="w-full rounded-lg border border-gray-200 p-1"
                alt="product"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-gray-500 text-sm">
                {productInfo.category.name}
              </h4>
              <Link to={`/product-details/${productInfo._id}`}>
                <h3 className="text-base font-medium hover:text-primary-600 transition-colors duration-500 text-wrap">
                  {productInfo.title}
                </h3>
              </Link>
              <div className="flex gap-2 items-center">
                <ProductRating rating={productInfo.ratingsAverage} />
                <span className="text-gray-500 text-sm">
                  {productInfo.ratingsAverage}
                </span>
                <span className="text-gray-500 text-sm">
                  ({productInfo.ratingsQuantity})
                </span>
              </div>
              <h4 className="text-lg font-bold text-green-600">
                {productInfo.price} EGP
              </h4>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 items-end ">
          <div className="flex justify-end gap-x-4">
            {!isExist ? (
              <button
                onClick={() => addProductToCartApi.mutate(productInfo._id)}
                className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-700 transition"
              >
                Add to Cart
              </button>
            ) : (
              <button
                onClick={() => removeProductToCartApi.mutate(productInfo._id)}
                className="bg-red-600 cursor-pointer text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition"
              >
                Remove from Cart
              </button>
            )}
            <button
              onClick={() => deleteProductFromWishlist.mutate(productInfo._id)}
              className="text-gray-400 hover:text-red-600 cursor-pointer  py-2 transition"
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
