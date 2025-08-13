import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authContext } from "../context/Auth.context";
import { toast } from "react-toastify";
import { addProductToCartApi } from "../services/cart-service";
import { useContext } from "react";
import { addProductToWishlistApi } from "../services/wishlist-service";
import { useTranslation } from "react-i18next";

export function useAddProductToWishlist() {
  const queryClient = useQueryClient();
  const { token } = useContext(authContext);
  const { t } = useTranslation();

  return useMutation({
    mutationFn: async (productId) => {
      if (!token) {
        toast.error(t("must_login"));
      }
      return addProductToWishlistApi(productId);
    },
    onSuccess: () => {
      toast.success(t("add_wishlist_done"));
      queryClient.invalidateQueries(["wishlistProducts"]);
    },
  });
}
