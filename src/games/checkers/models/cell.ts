import { Labels } from "@/games/checkers/models/labels";
import { FigureModel } from "@/games/checkers/models/figure";

export class CellModel {
  readonly x: number;
  readonly y: number;
  readonly label: Labels;
  value: number;
  figure: FigureModel | null = null;
  available: boolean = false;

  constructor(x: number, y: number, label: Labels, value: number) {
    this.x = x;
    this.y = y;
    this.label = label;
    this.value = value;
  }

  isForwardCell(
    targetCell: CellModel,
    playerLabel: Labels,
    selectedFigure: FigureModel,
  ): boolean {
    const { cell, label } = selectedFigure;

    const dx = Math.abs(cell.x - targetCell.x);
    const dy = cell.y - targetCell.y;

    return label === playerLabel ? dx === 1 && dy === 1 : dx === 1 && dy === -1;
  }

  moveFigure(targetCell: CellModel, playerLabel: Labels) {
    if (this.figure && this.figure.checkMove(targetCell, playerLabel)) {
      targetCell.value = this.value;
      targetCell.figure = this.figure; // move figure
      targetCell.figure.cell = targetCell; // change figure cell
      this.value = 1;
      this.figure = null; // remove from current cell
    }
  }
}
