"use client";

import LoginForm from "./form";
import { useStoreContext } from "@/store";
import { useMemo } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const state = useStoreContext((state) => ({
    tokens: state.tokens,
    setTokens: state.setTokens,
  }));

  useMemo(() => {
    const AUTH_TOKEN = localStorage.getItem("AUTH_KEY");
    state.setTokens(AUTH_TOKEN && JSON.parse(AUTH_TOKEN));
  }, []);

  if (state.tokens) return router.push("/games");

  return (
    <>
      <section className="bg-ct-blue-600 min-h-screen grid place-items-center">
        <div className="w-full">
          <h1 className="text-2xl lg:text-6xl text-center font-[600] text-ct-yellow-600 mb-4">
            Game Zone
          </h1>
          <h2 className="text-lg text-center mb-4 text-ct-dark-200">
            Login to have access
          </h2>
          <LoginForm />
        </div>
      </section>
    </>
  );
}
