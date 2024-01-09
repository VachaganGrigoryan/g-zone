import { Labels } from "@/games/checkers/models/labels";
import { CellModel } from "@/games/checkers/models/cell";

export class FigureModel {
  label: Labels;
  cell: CellModel;
  king: boolean = false;

  constructor(label: Labels, cell: CellModel, king: boolean = false) {
    this.label = label;
    this.cell = cell;
    this.king = king;
  }

  checkMove(targetCell: CellModel, playerLabel: Labels): boolean {
    return this.cell.isForwardCell(targetCell, playerLabel, this);
  }
}
