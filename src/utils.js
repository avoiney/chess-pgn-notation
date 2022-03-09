export function chessBoardToFEN(chessBoard) {
  return chessBoard
    .map((chessBoardRow) => {
      return chessBoardRowToFEN(chessBoardRow);
    })
    .join("/");
}

export function chessBoardRowToFEN(chessBoardRow) {
  let counter = 0;
  let rowFEN = "";
  chessBoardRow.forEach((cell, cellIdx) => {
    if (cell === null) counter += 1;
    else {
      if (counter > 0) rowFEN += counter;
      counter = 0;
      rowFEN += cell;
    }
  });
  // add last null cell if required
  if (counter > 0) rowFEN += counter;
  return rowFEN;
}
