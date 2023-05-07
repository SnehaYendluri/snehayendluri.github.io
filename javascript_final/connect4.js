var playerRed = "R";
var playerYellow = "Y";
var currPlayer = playerRed;

var gameOver = false;
var board;

var rows = 6;
var columns = 7;
var currColumns = []; //keeps track of which row each column is at.
var player1Input;
var player2Input;

window.onload = function() {
    player1Input = document.getElementById("player1-name");
    player2Input = document.getElementById("player2-name");

    console.log("Player 1 name: ", player1Input)
    console.log("Player 2 name: ",player2Input)

    document.querySelector('form').addEventListener('submit', startGame);
}

function startGame(event) {
    event.preventDefault();

    let player1Name = document.querySelector('#player1').value;
    let player2Name = document.querySelector('#player2').value;

    // changing the players names 
    player1Input.textContent = player1Name;
    player2Input.textContent = player2Name;

    player1Input.classList.add('player-name'); // adding the css 
    player2Input.classList.add('player-name'); // adding the css

    // the starting player 
    winner.innerText = player1Input.textContent;

    document.querySelector('#player-names').style.display = 'none';
    document.querySelector('#game').style.display = 'block';

    // starts the game 
    setGame(player1Name, player2Name);
}

// sets the board 
function setGame() {
    board = [];
    currColumns = [5, 5, 5, 5, 5, 5, 5];

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            // JS
            row.push(' ');
            // HTML
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece);
            document.getElementById("board").append(tile);
        }
        board.push(row);
    }
}

// each piece 
function setPiece() {
    if (gameOver) {
        return;
    }

    //get coords of that tile clicked
    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    // figure out which row the current column should be on
    r = currColumns[c]; 

    if (r < 0) { // board[r][c] != ' '
        return;
    }

    board[r][c] = currPlayer; //update JS board
    let tile = document.getElementById(r.toString() + "-" + c.toString());
    // turns 
    if (currPlayer == playerRed) {
        tile.classList.add("red-piece");
        currPlayer = playerYellow;
        winner.innerText = player2Input.textContent;
    }
    else {
        tile.classList.add("yellow-piece");
        currPlayer = playerRed;
        winner.innerText = player1Input.textContent;
    }

    r -= 1; //update the row height for that column
    currColumns[c] = r; //update the array

    checkWinner(); // checks if there is a winner everytime the player takes a turn 
}

// conditions to win the game 
function checkWinner() {
     // horizontal
     for (let r = 0; r < rows; r++) {
         for (let c = 0; c < columns - 3; c++){
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r][c+1] && board[r][c+1] == board[r][c+2] && board[r][c+2] == board[r][c+3]) {
                    setWinner(r, c);
                    return;
                }
            }
         }
    }

    // vertical
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 3; r++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r+1][c] && board[r+1][c] == board[r+2][c] && board[r+2][c] == board[r+3][c]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    // the other diagonal
    for (let r = 0; r < rows - 3; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r+1][c+1] && board[r+1][c+1] == board[r+2][c+2] && board[r+2][c+2] == board[r+3][c+3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    // diagonal
    for (let r = 3; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r-1][c+1] && board[r-1][c+1] == board[r-2][c+2] && board[r-2][c+2] == board[r-3][c+3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }
}

// sets the winner text on the top 
function setWinner(r, c) {
    let winner = document.getElementById("winner");
    if (board[r][c] == playerRed) {
        winner.innerText = "Yayay! " + player2Input.textContent + " Wins";             
    } else {
        winner.innerText =  "Yayay! " + player1Input.textContent + " Wins";             
    }
    // sets the game over to true so that the players cannot take turns anymore 
    gameOver = true;
}