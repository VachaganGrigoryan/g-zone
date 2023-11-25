"use client";

import { Board } from "@/games/checkers/Board";
import { BoardModel } from "@/games/checkers/models/board";
import { useState } from "react";

export default function Home() {
  const [board, setBoard] = useState<BoardModel>(new BoardModel());

  return (
    <section className="flex justify-center items-center flex-col w-full h-screen">
      <Board board={board} onSetBoard={setBoard} />
    </section>
  );
}
