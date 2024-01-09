"use client";

import { useCheckersBoardsQuery } from "@/gql/graphql";
import { Loader } from "@/components/Loader";
import Link from "next/link";
import BoardsTable from "./board";

export default function Home() {
  const [{ data, fetching, error }] = useCheckersBoardsQuery();
  if (fetching) return <Loader />;

  if (error) return <div>Oh no... {error.message}</div>;

  const boards = data?.checkers.boards;
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      <div className="rounded-lg bg-gray-200 lg:col-span-2"></div>
      <div className="rounded-lg">
        <BoardsTable boards={boards} />
      </div>
    </section>
  );
}
