var prompt = require('prompt');

// keeps track of inputs
let board = {
  1: ' ',
  2: ' ',
  3: ' ',
  4: ' ',
  5: ' ',
  6: ' ',
  7: ' ',
  8: ' ',
  9: ' ',
}

function newBoard() {
  // creates instances of boards every time an input is made
  console.log(
    ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
    ' ---------\n' +
    ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
    ' ---------\n' +
    ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n'
  );
}

function didHeWin(player){
  const winCombos = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[7,5,3]];
  // loop through combinations and check whether or not any possible board combinations are in winning format for the specific player passed in
  return false;
}

function inputMove(player) {
  // use prompt to take inputs, will keep going until all spots on the board are taken or there is a win.
  prompt.start();
  prompt.get(['spot'], (err, result) => {
    var spot = Number(result.spot);
    if(board[spot] === ' '){
      board[spot] = player;
      newBoard();
      // uncomment functions below for win detection. Currently incomplete
      // didHeWin(player);
      // checkTie();
      if(player === 'X'){
        inputMove('O');
      } else {
        inputMove('X');
      }
    } else {
      console.log('illegal move');
      inputMove(player);
    }
  })
}

console.log('Player X, select a box by inputting your desired square in the prompt');
console.log(
  ' 1 | 2 | 3 \n' +
  ' --------- \n' +
  ' 4 | 5 | 6 \n' +
  ' --------- \n' +
  ' 7 | 8 | 9 \n'
);

inputMove('X');
