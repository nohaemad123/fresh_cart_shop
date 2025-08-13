import { Link } from "react-router";
import { useState, useContext } from "react";
import ProductRating from "../product_rating/ProductRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDeleteProductFromCart } from "../../hooks/useDeleteProductFromCart";
import { useTranslation } from "react-i18next";

export default function CartItem({ cartProduct, updateCountProductsApi }) {
  const { product } = cartProduct;
  const [count, setCount] = useState(cartProduct.count);
  const deleteProductMutation = useDeleteProductFromCart();
  const { t } = useTranslation();

  function handleIncrease() {
    const newCount = count + 1;
    setCount(newCount);
    updateCountProductsApi.mutate({ id: product._id, count: newCount });
  }

  function handleDecrease() {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      updateCountProductsApi.mutate({ id: product._id, count: newCount });
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 mb-5 border-b border-gray-300 pb-5 last:border-0">
      <div className="md:col-span-6 lg:col-span-7 px-5 md:px-10 items-center">
        <div className="flex gap-x-5 items-center">
          <Link to={`/product-details/${product._id}`}>
            <div className="w-[100px]">
              <img
                src={product.imageCover}
                className="w-full rounded-lg border border-gray-200 p-1"
              />
            </div>
          </Link>
          <div className="flex flex-col space-y-2 mb-3 lg:mb-0">
            <Link to={`/product-details/${product._id}`}>
              <h3 className="text-[18px] font-medium hover:text-primary-600 transition-colors duration-500">
                {product.title}
              </h3>
            </Link>
            <h4 className="text-gray-500 text-sm">{product.category.name}</h4>
            <div className="flex gap-x-2 items-center">
              <ProductRating rating={product.ratingsAverage} />
              <span className="text-gray-500 text-sm ">
                {product.ratingsAverage}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-6 lg:col-span-5 px-5 md:px-10">
        <div className="flex gap-x-3 justify-end items-center">
          <div className="flex items-center border-2 border-gray-200 rounded-lg">
            <button
              onClick={handleDecrease}
              className="py-1 cursor-pointer border-r-2 border-gray-200 px-2 text-2xl font-semibold"
            >
              -
            </button>
            <span className="py-1 px-4 text-xl">{count}</span>
            <button
              onClick={handleIncrease}
              className="py-1 px-2 cursor-pointer border-l-2 border-gray-200 text-2xl font-semibold"
            >
              +
            </button>
          </div>
          <h4 className="text-lg font-semibold text-center">
            {cartProduct.price} {t("egp")}
          </h4>
          <button
            className="text-red-600 cursor-pointer"
            onClick={() => deleteProductMutation.mutate(product._id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
}
