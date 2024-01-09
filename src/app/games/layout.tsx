"use client";

import { useStoreContext } from "@/store";
import { useEffect, useState } from "react";
import { useMeQuery } from "@/gql/graphql";
import { Loader } from "@/components/Loader";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const setUser = useStoreContext((state) => state.setUser);
  const setTokens = useStoreContext((state) => state.setTokens);
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const AUTH_TOKEN = localStorage.getItem("AUTH_KEY");
    setAuth(AUTH_TOKEN && JSON.parse(AUTH_TOKEN));
    setTokens(AUTH_TOKEN && JSON.parse(AUTH_TOKEN));
  }, []);

  const [{ data, fetching, error }] = useMeQuery();

  if (fetching) return <Loader />;

  if (error) {
    toast.error(error.message);
    return router.push(`/`);
  }

  if (data) {
    // @ts-ignore
    setUser(data?.account.me);
  }

  return (
    <main className="flex flex-row">
      <Sidebar />
      {children}
    </main>
  );
}
