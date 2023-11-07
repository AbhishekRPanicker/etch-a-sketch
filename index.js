const boardSide = 700;
let boardSize = 16;
let currentColor = "#000000";
let mouseHeld = false;
let randomizeColor = false;

function changeSquareColor(event) {
    if (randomizeColor) {
        currentColor = `#${Math.floor(Math.random() * 0xffffff)}`;
    }

    if (event.target.id != "board" && (event.type === 'click' || (event.type === 'mouseover' && mouseHeld))) {
        let targetDiv = event.target;
        targetDiv.style.backgroundColor = currentColor;
    }

}

function removeCurrentSquares(){
    let squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.remove();
    })
}

function manageButtonEvent(event) {
    let target = event.target;

    switch (target.id) {
        case "clear":
            let squares = document.querySelectorAll(".square");
            squares.forEach(square => {
                square.style.backgroundColor = "#ffffff";
            })
            break;
        case "random":
            randomizeColor = true;
            break;
        case "reset":
            randomizeColor = false;
            currentColor = "#000000";
            break;
        case "erase":
            randomizeColor = false;
            currentColor = "#ffffff";
            break;
        case "resize":
            let newSize = parseInt(prompt("Enter a value between 1 and 100:"));
            if (Number.isInteger(newSize) && newSize >= 1 && newSize <= 100) {
                boardSize = newSize;
                removeCurrentSquares();
                renderBoard();
            }else{
                alert("Invalid Input!");
            }
            break;
    }
}


function renderBoard() {
    let buttonsDiv = document.querySelector(".buttons");
    buttonsDiv.addEventListener('click', manageButtonEvent);

    let board = document.querySelector('#board');
    board.addEventListener('click', changeSquareColor);
    board.addEventListener('mouseover', changeSquareColor);
    document.addEventListener('mousedown', e => mouseHeld = true);
    document.addEventListener('mouseup', e => mouseHeld = false);


    for (let i = 0; i < boardSize; i++) {
        let parentDiv = document.createElement("div");
        for (let j = 0; j < boardSize; j++) {
            let squareDiv = document.createElement("div");
            squareDiv.style.width = `${boardSide / boardSize}px`;
            squareDiv.style.height = `${boardSide / boardSize}px`;
            squareDiv.classList.add("square");
            parentDiv.appendChild(squareDiv);
        }
        board.appendChild(parentDiv)
    }

}

renderBoard()

