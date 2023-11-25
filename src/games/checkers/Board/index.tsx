"use client";

import { Fragment, ReactElement, useMemo, useState } from "react";
import { BoardModel } from "@/games/checkers/models/board";
import { Cell } from "@/games/checkers/Cell";
import { CellModel } from "@/games/checkers/models/cell";
import { Labels } from "@/games/checkers/models/labels";

type BoardProps = {
  board: BoardModel;
  onSetBoard: (board: BoardModel) => void;
};

export const Board = ({ board, onSetBoard }: BoardProps): ReactElement => {
  const [selected, setSelected] = useState<CellModel | null>(null);

  const highlightCells = () => {
    board.highlightCells(selected);
    onSetBoard(board);
  };

  const handleCellClick = (cell: CellModel) => {
    if ((selected && selected === cell) || (!cell?.figure && !cell.available)) {
      setSelected(null);
      board.shadowsCells();
    } else if (selected && cell.available) {
      selected?.moveFigure(cell);
      setSelected(null);
      board.shadowsCells();
    } else {
      if (cell.figure?.label === Labels.Light) {
        // we can only select our figures
        setSelected(cell);
      }
    }
    onSetBoard(board);
  };

  useMemo(() => {
    highlightCells();
  }, [selected]);

  // useEffect(() => {
  //   board.highlightCells(selected);
  //   console.log(board);
  //   onSetBoard(board);
  // }, [selected]);

  return (
    <div className="flex flex-wrap w-board h-board">
      {board.cells.map((row, rIdx) => (
        <Fragment key={rIdx}>
          {row.map((cell, cIdx) => (
            <Cell
              key={cIdx}
              cell={cell}
              selected={selected === cell}
              onCellClick={handleCellClick}
            />
          ))}
        </Fragment>
      ))}
    </div>
  );
};
