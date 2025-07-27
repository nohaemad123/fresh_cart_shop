import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCountProductsApi } from "../services/cart-service";

export function useUpdateProductCount() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, count }) => {
      const res = await updateCountProductsApi(id, count);
      return res;
    },

    onMutate: async (newData) => {

      await queryClient.cancelQueries(["cartProducts"]);

      const previousData = queryClient.getQueryData(["cartProducts"]);

      // Optimistic Update
      queryClient.setQueryData(["cartProducts"], (old) => {
        if (!old || !old.products) return old;

        return {
          ...old,
          products: old.products.map((p) =>
            p.product._id === newData.id ? { ...p, count: newData.count } : p
          ),
        };
      });

      return { previousData };
    },

    onError: (err, newData, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(["cartProducts"], context.previousData);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries(["cartProducts"]);
    },
  });
}
