import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import ReactImageGallery from "react-image-gallery";
import ProductRating from "../product_rating/ProductRating";
import { calcDiscount } from "../../utils/calcDiscount.utils";

import {
  faCartShopping,
  faTruckFast,
  faRotateLeft,
  faHeart as solidHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { authContext } from "../../context/Auth.context";
import { useDeleteProductFromCart } from "../../hooks/useDeleteProductFromCart";
import { useAddProductToCart } from "../../hooks/useAddProductToCart";
import { useDeleteProductFromWishlist } from "../../hooks/useDeleteProductFromWishlist";
import { useAddProductToWishlist } from "../../hooks/useAddProductToWishlist";
import { useWishlist } from "../../hooks/useWishlist";
import { useCart } from "../../hooks/useCart";

export default function ProductInfo({ productDetails }) {
  const {
    images,
    title,
    price,
    _id,
    priceAfterDiscount,
    quantity,
    ratingsAverage,
    ratingsQuantity,
    description,
    category,
  } = productDetails;
 
  const removeProductToCartApi = useDeleteProductFromCart();
  const addProductToCartApi = useAddProductToCart();
  
  const deleteProductFromWishlist = useDeleteProductFromWishlist();
const addProductToWishlist=useAddProductToWishlist()
const { wishlistProducts} = useWishlist();
const { cartProducts} = useCart();
const { token } = useContext(authContext);
console.log(wishlistProducts)

  var isExistInWishlist = false;
  if (token) {
    isExistInWishlist = wishlistProducts?.find((product) => _id === product._id);
  }

  var isExistInCart = false;
  if (token) {
    isExistInCart = cartProducts?.products.find(
      (product) => _id === product.product._id
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mx-auto p-6">
        <div className=" lg:col-span-1 ">
          <ReactImageGallery
            items={images.map((image) => {
              return {
                original: image,
                thumbnail: image,
              };
            })}
            showNav={false}
            showPlayButton={false}
            showFullscreenButton={false}
            autoPlay={3000}
          />
        </div>
        <div className="md:col-span-2">
          <div className="bg-white p-5 rounded-lg">
            <div className="flex justify-between items-center">
              <span
                className={`${
                  quantity > 0
                    ? "bg-primary-200/50 text-primary-600"
                    : "bg-red-200/50 text-red-600"
                } px-2 py-1 rounded-lg  font-medium`}
              >
                {quantity > 0 ? "In stock" : "Out of stock"}
              </span>

              <div className="flex gap-x-4">
                <button>
                  <FontAwesomeIcon icon={faShareNodes} />
                </button>
                {!isExistInWishlist ? (
                  <button
                    className="cursor-pointer"
                    onClick={() => addProductToWishlist.mutate(_id)}

                  >
                    <FontAwesomeIcon icon={regularHeart} />
                  </button>
                ) : (
                  <button
                    className="cursor-pointer"
                    onClick={() => deleteProductFromWishlist.mutate(_id)}

                  >
                    <FontAwesomeIcon
                      icon={solidHeart}
                      className="text-red-500"
                    />
                  </button>
                )}
              </div>
            </div>
            <div className="space-y-2 mt-4">
              <h3 className="text-sm font-bold text-gray-500">
                {category.name}
              </h3>
              <h2 className="text-2xl font-bold"> {title}</h2>

              <div className="flex gap-x-2">
                <ProductRating rating={ratingsAverage} />
                <span className="text-gray-500">{ratingsAverage}</span>
                <span className="text-gray-500">
                  ({ratingsQuantity} reviews)
                </span>
              </div>
              <div className="flex gap-x-3 items-center">
                {priceAfterDiscount ? (
                  <>
                    <h3 className="text-primary-600 font-bold text-2xl">
                      {priceAfterDiscount} EGP
                    </h3>
                    <del className="text-gray-400">{price} EGP</del>
                    <span className="bg-red-200/50 px-2 py-1 rounded-md text-red-600 font-medium">
                      Save {calcDiscount({ price, priceAfterDiscount })}%
                    </span>
                  </>
                ) : (
                  <h3 className="text-primary-600 font-bold text-2xl">
                    {price} EGP
                  </h3>
                )}
              </div>
              <div className="border-t border-gray-300 pt-3">
                <p className="text-gray-500">{description}</p>
              </div>
              <div className="flex flex-col md:flex-row space-y-3 items-center">
                <h3 className=" me-4">Quantity: </h3>

                <div className="flex border border-gray-600 rounded-md items-center">
                  <button className="py-1 px-3 cursor-pointer text-2xl font-semibold">
                    -
                  </button>
                  <span className="py-1 px-4 text-xl">1</span>
                  <button className="py-1 px-3 cursor-pointer text-2xl font-semibold">
                    +
                  </button>
                </div>
                {quantity > 0 ? (
                  <h3 className=" ms-4 text-sm">
                    Only {quantity} items left in stock{" "}
                  </h3>
                ) : (
                  ""
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-5 space-x-0 space-y-4 md:space-x-4 md:space-y-0">
                {!isExistInCart ? (
                  <button
                    onClick={() => {
                      addProductToCartApi.mutate(_id)              
                    }}
                    className="bg-primary-600 py-3 text-white rounded-md text-[16px] font-bold cursor-pointer border-transparent"
                  >
                    <FontAwesomeIcon icon={faCartShopping} className="me-2" />{" "}
                    Add to cart
                  </button>
                ) : (
                  <button
                  onClick={() => removeProductToCartApi.mutate(_id)}

                    className="bg-red-500 py-3 text-white rounded-md text-[16px] font-bold cursor-pointer border-transparent"
                  >
                    <FontAwesomeIcon icon={faCartShopping} className="me-2" />{" "}
                    Remove from cart
                  </button>
                )}
                <button className="bg-white py-3 text-primary-600 rounded-md font-bold text-[16px] cursor-pointer border border-primary-600">
                  Buy now
                </button>
              </div>
              <div className="border-t border-gray-300 pt-3 mt-5">
                <div className="grid grid-cols-2 space-x-4 mt-5">
                  <div className="flex gap-x-3 ">
                    <div className="rounded_icon size-[45px]">
                      <FontAwesomeIcon icon={faTruckFast} className="text-sm" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="font-semibold">Free delivery</h3>
                      <p className="text-gray-600">
                        Free shipping on orders over $50
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-x-3 ">
                    <div className="rounded_icon size-[45px]">
                      <FontAwesomeIcon
                        icon={faRotateLeft}
                        className="text-sm"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="font-semibold">30 days return</h3>
                      <p className="text-gray-600">
                        Satisfaction guaranteed of money back
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
