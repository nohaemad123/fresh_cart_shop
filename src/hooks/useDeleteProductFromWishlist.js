import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { deleteCartProductsApi } from "../services/cart-service";
import { deleteWishlistProductsApi } from "../services/wishlist-service";
import { useTranslation } from "react-i18next";

export function useDeleteProductFromWishlist() {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: async (id) => {
      const result = await Swal.fire({
        title: t("remove_wishlist_title"),
        text: t("remove_desc"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#f00",
        cancelButtonColor: "#aaa",
        confirmButtonText: t("delete_it"),
        cancelButtonTextButtonText: t("cancel_btn"),
      });

      if (result.isConfirmed) {
        const response = await deleteWishlistProductsApi(id);
        if (response.success) {
          await Swal.fire({
            title: t("deleted"),
            text: t("delete_wishlist_done"),
            icon: "success",
          });
          return response;
        } else {
          throw new Error(t("delete_failed"));
        }
      } else {
        return null;
      }
    },

    onSuccess: (data) => {
      if (data) {
        queryClient.invalidateQueries(["wishlistProducts"]);
      }
    },

    onError: (error) => {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
      });
    },
  });
}
