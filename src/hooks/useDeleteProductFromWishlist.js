import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { deleteCartProductsApi } from "../services/cart-service";
import { deleteWishlistProductsApi } from "../services/wishlist-service";

export function useDeleteProductFromWishlist() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      const result = await Swal.fire({
        title: "Are you sure want delete product from wishlist?",
        text: "If you click delete, the product will be removed.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#f00",
        cancelButtonColor: "#aaa",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const response = await deleteWishlistProductsApi(id);
        if (response.success) {
          await Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted from wishlist successfully.",
            icon: "success",
          });
          return response;
        } else {
          throw new Error("Delete failed");
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
