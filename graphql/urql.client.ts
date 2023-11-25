import * as React from "react";
import { cacheExchange, createClient, fetchExchange } from "@urql/next";
import { NEXT_PUBLIC_API_URL } from "@/config";

const useClient = (options?: RequestInit & { exchanges: any }) => {
  return React.useMemo(() => {
    return createClient({
      url: NEXT_PUBLIC_API_URL,
      fetchOptions: () => {
        return {
          headers: {
            ...(options?.headers ? options.headers : {}),
          },
        };
      },
      exchanges: [cacheExchange, ...options?.exchanges, fetchExchange],
      requestPolicy: "cache-and-network",
    });
  }, [options]);
};

export default useClient;
