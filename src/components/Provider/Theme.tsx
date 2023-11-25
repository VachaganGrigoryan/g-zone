'use client'
'use client';

import { ThemeProvider as NextThemesProvider } from "next-themes"
import {useEffect, useState} from "react";
import {type ThemeProviderProps} from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {

  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // use your loading page
    return <div className="hidden">{children}</div>;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}