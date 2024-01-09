"use client";

import { Board } from "@/games/checkers/Board";
import { BoardModel } from "@/games/checkers/models/board";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  CheckersByGuidDocument,
  CheckersByGuidQuery,
  CheckersByGuidQueryVariables,
  useCheckersByGuidQuery,
} from "@/gql/graphql";
import { Loader } from "@/components/Loader";
import { hasCustomGetInitialProps } from "next/dist/build/utils";
import { useStoreContext } from "@/store";
import { graphql } from "graphql/graphql";
import * as Urql from "urql";
import useRefreshingQuery from "@/app/games/checkers/[guid]/useRefrechingQuery";
import { useQuery } from "urql";

export default function Game({ params }: { params: { guid: string } }) {
  const user = useStoreContext((state) => state.user);
  // const { data, fetching, error, stale } = useRefreshingQuery(
  //   { guid: params.guid },
  //   CheckersByGuidDocument,
  //   10,
  //   false,
  // );

  const [result, reexecuteQuery] = useQuery({
    query: CheckersByGuidDocument,
    variables: {
      guid: params.guid,
    },
    pause: true,
  });

  useEffect(() => {
    if (result.fetching) {
      return;
    }

    if (result?.data?.checkers.game.queue.guid === user?.guid) return;

    const timerId = setTimeout(() => {
      reexecuteQuery({ requestPolicy: "network-only" });
    }, 1000);

    return () => clearTimeout(timerId);
  }, [result.fetching, reexecuteQuery]);

  const game = useMemo(() => result?.data?.checkers.game, [result.data]);
  // console.log(game);
  // const [GUID, setGUID] = useState(params.guid);
  //
  // const [{ data, fetching, error, stale }] = Urql.useQuery({
  //   query: CheckersByGuidDocument,
  //   variables: {
  //     guid: GUID,
  //   },
  // });
  // const staleRef = useRef(stale);
  // // const [{ data, fetching, error }] = useCheckersByGuidQuery({
  // //   variables: {
  // //     guid: GUID.replaceAll(",", ""),
  // //   },
  // // });
  //
  // // useEffect(() => {
  // //   counterRef.current = GUID;
  // // });
  //
  // useEffect(() => {
  //   if (user?.guid == data?.checkers.game.queue?.guid) return;
  //
  //   const interval = setInterval(() => {
  //     // setGUID(counterRef.current + ",");
  //     // console.log(GUID);
  //     staleRef.current = true;
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  // if (fetching) return <Loader />;

  // if (error) return <div>Oh no... {error.message}</div>;

  // if (!data) return <div>Oh no... Board not found</div>;
  // const game = data.checkers.game;

  const player = game?.players.find((p) => p.player.guid == user?.guid);
  if (!player) return <div>Oh no... Cant find board</div>;

  // @ts-ignore
  const board = new BoardModel(game.grid, player);

  const queue = game?.players.find((p) => p.player.guid === game.queue?.guid);

  return (
    <section className="flex justify-center items-center flex-col w-full h-screen">
      <div className="">{queue?.player.email} -----</div>
      <Board
        board={board}
        player={player}
        queue={queue}
        onSetBoard={() => {}}
      />
    </section>
  );
}
