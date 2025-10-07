import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCountProductsApi } from "../services/cart-service";

export function useUpdateProductCount() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, count }) => {
      const res = await updateCountProductsApi(id, count);
      return res?.data;
    },

    onMutate: async (newData) => {
      // نوقف أي طلبات حالية لنفس الكاش
      await queryClient.cancelQueries({ queryKey: ["cartProducts"] });

      // نحتفظ بالبيانات القديمة علشان نرجعها لو حصل خطأ
      const previousData = queryClient.getQueryData(["cartProducts"]);

      // Optimistic update — تحديث فوري في الواجهة
      queryClient.setQueryData(["cartProducts"], (old) => {
        if (!old) return old;

        // نجيب مصفوفة المنتجات بغض النظر عن شكل البيانات الراجعة من الـ API
        const products =
          old?.data?.data?.products ||
          old?.data?.products ||
          old?.products ||
          [];

        const updatedProducts = products.map((p) =>
          p.product._id === newData.id ? { ...p, count: newData.count } : p
        );

        // نحافظ على نفس الهيكل الأصلي عشان React Query ما يتلغبطش
        if (old?.data?.data) {
          return {
            ...old,
            data: {
              ...old.data,
              data: {
                ...old.data.data,
                products: updatedProducts,
              },
            },
          };
        }

        if (old?.data?.products) {
          return {
            ...old,
            data: {
              ...old.data,
              products: updatedProducts,
            },
          };
        }

        return {
          ...old,
          products: updatedProducts,
        };
      });

      // نرجّع الداتا القديمة لو احتجناها في onError
      return { previousData };
    },

    onError: (err, newData, context) => {
      if (context?.previousData) {
        // نرجع الكاش للحالة القديمة لو حصل فشل
        queryClient.setQueryData(["cartProducts"], context.previousData);
      }
    },

    onSettled: () => {
      // بعد ما العملية تخلص (نجاح أو فشل) نعمل تحديث نهائي من الـ API
      queryClient.invalidateQueries({ queryKey: ["cartProducts"] });
    },
  });
}
