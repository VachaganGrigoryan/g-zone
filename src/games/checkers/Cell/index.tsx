"use client";

import { ReactElement } from "react";
import { CellModel } from "@/games/checkers/models/cell";
import { Labels } from "@/games/checkers/models/labels";
import Black from "@/assets/checkers/images/Black.svg";
import White from "@/assets/checkers/images/White.svg";

type CellProps = {
  cell: CellModel;
  selected: boolean;
  onCellClick: (cell: CellModel) => void;
};

export const Cell = ({
  cell,
  onCellClick,
  selected,
}: CellProps): ReactElement => {
  const { figure, label } = cell;
  const handleFigureClick = () => onCellClick(cell);
  return (
    <div
      className={`flex w-cell h-cell relative justify-center items-center 
      ${cell.label === Labels.Dark ? "bg-yellow-950" : "bg-amber-50"} 
      ${selected ? "bg-slate-800" : ""} 
      ${cell.available ? "bg-slate-800" : ""}`}
      onClick={handleFigureClick}
    >
      {figure &&
        (figure.label === Labels.Dark ? (
          <Black className={`rounded-full w-10 h-10`} />
        ) : (
          <White className={`rounded-full w-10 h-10`} />
        ))}
      {cell.available && !figure && (
        <div className="bg-white w-5 h-5 rounded-full" />
      )}
    </div>
  );
};
