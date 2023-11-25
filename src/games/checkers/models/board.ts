import { CellModel } from "@/games/checkers/models/cell";
import { Labels } from "@/games/checkers/models/labels";
import { FigureModel } from "@/games/checkers/models/figure";

export class BoardModel {
  size: number = 8;
  cells: CellModel[][] = [];

  constructor() {
    this.createCells();
    this.addFigures();
  }

  createCells() {
    for (let i = 0; i < this.size; i += 1) {
      const row: CellModel[] = [];

      for (let j = 0; j < this.size; j += 1) {
        if ((i + j) % 2 !== 0) {
          row.push(new CellModel(j, i, Labels.Dark)); // black
        } else {
          row.push(new CellModel(j, i, Labels.Light)); // white
        }
      }
      this.cells.push(row);
    }
  }

  highlightCells(selectedCell: CellModel | null) {
    this.cells.forEach((row) => {
      row.forEach((cell) => {
        if (!cell.figure)
          cell.available = !!selectedCell?.figure?.checkMove(cell);
      });
    });
  }

  shadowsCells() {
    this.cells.forEach((r) => r.forEach((c) => (c.available = false)));
  }

  addFigures() {
    this.cells.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        if (cell.label === Labels.Dark) {
          if (rowIndex <= 2) {
            cell.figure = new FigureModel(Labels.Dark, cell); // add dark pieces to first 3 rows
          } else if (rowIndex >= this.cells.length - 3) {
            cell.figure = new FigureModel(Labels.Light, cell); // add light pieces to last 3 rows
          }
          // else {
          //   cell.available = true;
          // }
        }
      });
    });
  }
}
