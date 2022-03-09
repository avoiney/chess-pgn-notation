import { chessBoardRowToFEN, chessBoardToFEN } from "./utils";

test("convert starting chess board row to FEN row", () => {
  const boardRow = ["R", "N", "B", "Q", "H", "B", "N", "R"];
  const res = chessBoardRowToFEN(boardRow);
  expect(res).toEqual("RNBQHBNR");
});

test("convert in game chess board row to FEN row", () => {
  const boardRow = ["R", null, null, null, "r", "R", "H", null];
  const res = chessBoardRowToFEN(boardRow);
  expect(res).toEqual("R3rRH1");
});

test("convert empty chess board row to FEN row", () => {
  const boardRow = [null, null, null, null, null, null, null, null];
  const res = chessBoardRowToFEN(boardRow);
  expect(res).toEqual("8");
});

test("convert starting chess board to FEN", () => {
  const chessBoard = [
    ["R", "N", "B", "Q", "H", "B", "N", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["r", "n", "b", "q", "h", "b", "n", "r"],
  ];
  const res = chessBoardToFEN(chessBoard);
  expect(res).toEqual("RNBQHBNR/PPPPPPPP/8/8/8/8/pppppppp/rnbqhbnr");
});
