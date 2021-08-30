// Шахматная доска. Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами
// новой строки. На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.
let sizeChessBoard = 8;
let ChessBoard = '';

for (let i = 1; i <= sizeChessBoard; i++){
    for (let j = 1; j <= sizeChessBoard; j++){
        if ((i + j) % 2 == 0){
            ChessBoard += '#';
        } else {
            ChessBoard += ' ';
        }
    }
    ChessBoard += '\n';
}
console.log(ChessBoard);

