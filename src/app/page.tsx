"use client";

import LoginForm from "./form";
import { useStoreContext } from "@/store";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import LoginBg from "@/assets/login/images/background.svg"
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const state = useStoreContext((state) => ({
    tokens: state.tokens,
    setTokens: state.setTokens,
  }));

  useMemo(() => {
    if (typeof window !== 'undefined') {
      const AUTH_TOKEN = localStorage.getItem("AUTH_KEY");
      state.setTokens(AUTH_TOKEN && JSON.parse(AUTH_TOKEN));
    }
  }, []);
  
  if (state.tokens) return router.push("/games");

  return (
    <>
      <section className="bg-ct-blue-600 min-h-screen flex">
        <LoginBg className="flex-shrink-0 h-[100vh] w-[60%] object-cover" style={{ clipPath: 'polygon(0% 0, 100% 0, 50% 100%, 0% 100%)' }} />
        <div className="flex flex-col justify-center	align-center mt-4 ml-2">
          <h1 className="text-xl text-center lg:text-4xl text-ct-yellow-600">
            LogIn
          </h1>
          <LoginForm />
        </div>
        <button className="bg-green-600 w-[100px] h-10 rounded-2xl text-xl ml-4">
            G-Zone
        </button>
      </section>
    </>
  );
}

