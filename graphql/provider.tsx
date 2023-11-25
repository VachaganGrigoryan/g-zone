"use client";

import React from "react";

import { UrqlProvider, ssrExchange } from "@urql/next";
import useClient from "@/gql/urql.client";
import { useStoreContext } from "@/store";
// import { useLocale } from "next-intl";

const ssrCache = ssrExchange();

export function GraphqlProvider({ children }: any) {
  // const local = useLocale();
  const tokens = useStoreContext((state) => state.tokens);

  const client = useClient({
    headers: {
      "Accept-Language": "en",
      ...(tokens
        ? {
            Authorization: `Bearer ${tokens?.access}`,
          }
        : {}),
    },
    exchanges: [ssrCache],
  });

  return (
    <UrqlProvider client={client} ssr={ssrCache}>
      {children}
    </UrqlProvider>
  );
}
