import { Labels } from "@/games/checkers/models/labels";
import { FigureModel } from "@/games/checkers/models/figure";

export class CellModel {
  readonly x: number;
  readonly y: number;
  readonly label: Labels;
  figure: FigureModel | null = null;
  available: boolean = false;

  constructor(x: number, y: number, label: Labels) {
    this.x = x;
    this.y = y;
    this.label = label;
  }

  isForwardCell(targetCell: CellModel, selectedFigure: FigureModel): boolean {
    const { cell, label } = selectedFigure;

    const dx = Math.abs(cell.x - targetCell.x);
    const dy = cell.y - targetCell.y;

    return label === Labels.Light
      ? dx === 1 && dy === 1
      : dx === 1 && dy === -1;
  }

  moveFigure(targetCell: CellModel) {
    if (this.figure && this.figure.checkMove(targetCell)) {
      targetCell.figure = this.figure; // move figure
      targetCell.figure.cell = targetCell; // change figure cell
      this.figure = null; // remove from current cell
    }
  }
}
