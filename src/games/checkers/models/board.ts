import { CellModel } from "@/games/checkers/models/cell";
import { Labels } from "@/games/checkers/models/labels";
import { FigureModel } from "@/games/checkers/models/figure";
import { BoardPlayers } from "@/gql/graphql";

export class BoardModel {
  cells: CellModel[][];
  boardPlayer: BoardPlayers;
  playerLabel: Labels;

  constructor(board: number[][], boardPlayer: BoardPlayers) {
    this.boardPlayer = boardPlayer;

    if (boardPlayer.stoneType === 2) {
      board = this.reverseBoard(board);
      this.playerLabel = Labels.Light;
    } else {
      this.playerLabel = Labels.Dark;
    }

    // @ts-ignore
    this.cells = board.map((r, i) =>
      r.map((c, j) => {
        let cell: CellModel;
        switch (Math.abs(c)) {
          case 0:
            return new CellModel(j, i, Labels.Light, c);
          case 1:
            return new CellModel(j, i, Labels.Dark, c);
          case 2:
            cell = new CellModel(j, i, Labels.Dark, c);
            cell.figure = new FigureModel(Labels.Light, cell, c === -2);
            return cell;
          case 3:
            cell = new CellModel(j, i, Labels.Dark, c);
            cell.figure = new FigureModel(Labels.Dark, cell, c === -3);
            return cell;
        }
      }),
    );
  }

  reverseBoard(grid: number[][]) {
    return [...grid].reverse().map((r) => [...r].reverse());
  }

  highlightCells(selectedCell: CellModel | null) {
    this.cells.forEach((row) => {
      row.forEach((cell) => {
        if (!cell.figure)
          cell.available = !!selectedCell?.figure?.checkMove(
            cell,
            this.playerLabel,
          );
      });
    });
  }

  shadowsCells() {
    this.cells.forEach((r) => r.forEach((c) => (c.available = false)));
  }
}
