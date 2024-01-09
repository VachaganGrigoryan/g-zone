"use client";

import { useStoreContext } from "@/store";
import { useEffect, useState } from "react";
import { useGamesQuery } from "@/gql/graphql";
import { Loader } from "@/components/Loader";
import Link from "next/link";

export default function Home() {
  const user = useStoreContext((state) => state.user);

  const [{ data, fetching, error }] = useGamesQuery();

  if (fetching) return <Loader />;

  if (error) return <div>Oh no... {error.message}</div>;

  const games = data?.zone.games;

  return (
    <>
      <section className="py-14 bg-slate-900">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-200 md:px-8">
          <div className="relative max-w-xl mx-auto sm:text-center">
            <h3 className="text-gray-400 text-3xl font-semibold sm:text-4xl"></h3>
            <div className="flex flex-wrap justify-center">
              {games?.map((game, idx) => (
                <div
                  key={game.guid}
                  className="w-full md:w-1/2 p-6 min-w-fit sm:min-w-max md:min-w-full lg:min-w-min"
                >
                  <div
                    className={`relative h-full flex gap-3 sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left
          border border-[#C6C6C6F0] dark:border-gray-800
          shadow-[5px_5px_10px_0px] shadow-[#00000040] dark:shadow-[#00000080]
          bg-gradient-to-br from-[#C6C6C694] to-[#EDEDED] dark:from-gray-700 dark:to-gray-800 
        `}
                  >
                    <div className="flex-shrink-0 w-48 h-48">
                      <Link href={`/games/${game.configs.path}`}>
                        <img
                          alt="team"
                          className={`w-48 h-48 object-cover object-center
                          border-2 border-[#C6C6C6F0]
                          shadow-[0px_3px_12px_0px] shadow-[#00000040] dark:shadow-[#00000080]`}
                          src={game.image}
                        />
                      </Link>
                    </div>
                    <div className="flex-grow flex flex-col gap-2 p-3">
                      <h2 className="title-font font-medium text-3xl text-[#3D3D3D] dark:text-gray-100 text-center group-hover/card:text-primary">
                        <Link href={`/games/${game.configs.path}`}>
                          {game.title}
                        </Link>
                      </h2>
                      {/*<h3 className="text-slate-500">*/}
                      {/*  {course?.categories?.map((c: { name: any }) => c.name)}*/}
                      {/*</h3>*/}
                      <div className="bg-[#C6C6C6] h-0.5"></div>
                      <p className="text-slate-700 dark:text-slate-200 rounded-full">
                        {game.description}
                      </p>

                      {/*<div className="flex flex-col gap-1">*/}
                      {/*  <div className="flex items-center justify-evenly text-[#E56324]">*/}
                      {/*    <div className="w-24">{t("duration")}</div>*/}
                      {/*    <div className="w-24">{t("price")}</div>*/}
                      {/*  </div>*/}
                      {/*  <div className="flex items-center justify-evenly text-[#3D3D3D] dark:text-slate-200">*/}
                      {/*    <div className="w-24">{course?.duration}</div>*/}
                      {/*    <div className="w-24">{course?.price}</div>*/}
                      {/*  </div>*/}
                      {/*</div>*/}
                      {/*<div className="flex justify-center">*/}
                      {/*  <ApplyForm course={course} />*/}
                      {/*</div>*/}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
