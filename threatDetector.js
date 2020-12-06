let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

function queenThreat(board){
    let position = [];
    for (let i = 0; i < 8; i++){
        for (let j = 0; j < 8; j++){
            if (board[i][j] === 1){
                position.push([i, j])
            }
        }
    }
    let x = position[0][0];
    let y = position[0][1];
    let reply = false;
    for (let k = 0; k < 8; k++){
        if (board[x][k] === 1 && k !== y){
            reply = true;
            break;
        }
        if (board[k][y] === 1 && k !== x){
            reply = true;
            break;
        }
        if (-1 < (x - k) && -1 < (y - k) && (x - k) < 8 && (y - k) < 8 && k !== 0){
            if (board[x - k][y - k] === 1){
                reply = true;
                break;
            }   
        }
        if (-1 < (x + k) && -1 < (y + k) && (x + k) < 8 && (y + k) < 8 && k !== 0){
            if (board[x + k][y + k] === 1){
                reply = true;
                break;
            }   
        }
        if (-1 < (x + k) && -1 < (y - k) && (x + k) < 8 && (y - k) < 8 && k !== 0){
            if (board[x + k][y - k] === 1){
                reply = true;
                break;
            }   
        }
        if (-1 < (x - k) && -1 < (y + k) && (x - k) < 8 && (y + k) < 8 && k !== 0){
            if (board[x - k][y + k] === 1){
                reply = true;
                break;
            }   
        }
    }
    return reply;
}


function generateBoard(white, black){
    let board = [];
    for (let i = 0; i < 8; i++){
        let line = [0, 0, 0, 0, 0, 0, 0, 0];
        board.push(line);
    }
    board[white[0]][white[1]] = 1;
    board[black[0]][black[1]] = 1;
    return board;
}