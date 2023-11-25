import { Labels } from "@/games/checkers/models/labels";
import { CellModel } from "@/games/checkers/models/cell";

export class FigureModel {
  label: Labels;
  cell: CellModel;

  constructor(label: Labels, cell: CellModel) {
    this.label = label;
    this.cell = cell;
  }

  checkMove(targetCell: CellModel): boolean {
    return this.cell.isForwardCell(targetCell, this);
  }
}
