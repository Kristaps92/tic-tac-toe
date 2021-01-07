function startGame(){
    document.turn = "X";
    setMessage(document.turn + " gets to start");
}

function setMessage(msg) {
    document.getElementById("messages").innerText = msg;
}

function nextMove(board) {
    board.innerText = document.turn;
    switchTurn();
}

function switchTurn() {
    if (document.turn == "X"){
        document.turn = "O";
    } else {
        document.turn = "X";
    }
    setMessage("It's " + document.turn + " 's turn!");
}