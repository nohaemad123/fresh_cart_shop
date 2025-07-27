import { useContext } from "react";
import { authContext } from "../context/Auth.context";
import { useQuery } from "@tanstack/react-query";
import { getAllOrdersApi } from "../services/orders-service";
import { useVerifyToken } from "./useVerifyToken";

export function useOrders() {
  const { token } = useContext(authContext);
  const { userData: userId, isLoading: isVerifying } = useVerifyToken();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["orders", userId],
    queryFn: () => getAllOrdersApi(userId),
    enabled: !!token && !!userId && !isVerifying,
  });

  return {
    orders: data?.data || [],
    isLoading: isLoading || isVerifying, 
    isError,
    error,
  };
}
