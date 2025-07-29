const prompt = require("prompt-sync")()
function makeMove(turn, board) {
    while (true) {
        const row = parseInt(prompt("enter row: "))
        const col = parseInt(prompt("enter col: "))
        if (isNaN(row) || row < 1 || row > 3) console.log("invalid row!!!")
        else if (isNaN(col) || col < 1 || col > 3) console.log("invalid column!!!")
        else if (board[row - 1][col - 1] !== " ") console.log("invalid position")
        else {
            board[row - 1][col - 1] = turn
            break
        }
    }

}
function printBoard(board) {
    for (let i = 0; i < board.length; i++) {
        const row = board[i]
        rstring = ""
        for (let j = 0; j < row.length; j++) {
            rstring += row[j]
            if (j !== row.length - 1) rstring += " | "
        }
        console.log(rstring)
        if (i !== board.length - 1) console.log("________")
    }
}
function checkWin(board, turn) {
    const lines = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 0], [2, 0]],

    ]
    for (let line of lines) {
        let win = true;
        for (let pos of line) {
            const [row, col] = pos
            if (board[row][col] !== turn) {
                win = false
                break
            }
        }
        if (win) return true

    }
    return false
}
const board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

let turn = "X"
let turnCount = 0;
printBoard(board)
console.log()
let win = false
while (turnCount < 9) {
    console.log(turn, "turn now")
    makeMove(turn, board)
    printBoard(board)
    console.log()
    win = checkWin(board, turn)
    if (win) {
        console.log(turn, "has won")
        break;
    }
    if (turn === "X") turn = "O"
    else turn = "X"
}
if (!win) console.log("game is TIE!!!!")
