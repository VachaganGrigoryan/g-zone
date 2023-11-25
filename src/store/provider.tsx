"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";
import {
  StoreType,
  // StorePropsWithChildren,
  StoreContext,
  initializeStore,
} from "@/store/index";

function StoreProvider({ children, ...props }: PropsWithChildren) {
  const storeRef = useRef<StoreType>();

  if (!storeRef.current) {
    storeRef.current = initializeStore(props);
  }
  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;
