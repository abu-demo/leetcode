/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  let index = null,
    count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] == "R") {
        index = { i, j };
        break;
      }
    }
    if (index) {
      break;
    }
  }
  console.log(index);
  // up
  while (index.i >= 0) {
    let cur = board[index.i][index.j];
    count += cur == "p" ? 1 : 0;
  }
  // right
  // down
  // left
};
