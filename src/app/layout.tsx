import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GraphqlProvider } from "@/gql/provider";
import { ThemeProvider } from "@/components/Provider/Theme";
import clsx from "clsx";
import { Toaster } from "react-hot-toast";
import StoreProvider from "@/store/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "G-Zone",
  description: "Play cool games...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={clsx(
          inter.className,
          "flex flex-col transition-colors duration-500 dark:bg-slate-900 bg-white",
        )}
      >
        <StoreProvider>
          <GraphqlProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster position="bottom-right" reverseOrder={false} />
            </ThemeProvider>
          </GraphqlProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
