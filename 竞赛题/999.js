/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
    let x = 0,
        y = 0,
        count = 0

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] == 'R') {
                x = i
                y = j
                break
            }
        }
    }
    // up
    for (let i = x, j = y; i >= 0; i--) {
        let curr = board[i][j]
        if (curr == 'B') break
        if (curr == 'p') {
            count++
            break
        }
    }
    // right
    for (let i = x, j = y; i < 8; j++) {
        let curr = board[i][j]
        if (curr == 'B') break
        if (curr == 'p') {
            count++
            break
        }
    }
    // down
    for (let i = x, j = y; i < 8; i++) {
        let curr = board[i][j]
        if (curr == 'B') break
        if (curr == 'p') {
            count++
            break
        }
    }
    // left
    for (let i = x, j = y; i >= 0; j--) {
        let curr = board[i][j]
        if (curr == 'B') break
        if (curr == 'p') {
            count++
            break
        }
    }
    return count
};


console.log(numRookCaptures(
    [
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", "p", ".", ".", ".", "."],
        [".", ".", ".", "R", ".", ".", ".", "p"],
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", "p", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "."]
    ]
))