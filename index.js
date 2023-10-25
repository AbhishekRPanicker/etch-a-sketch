const boardSide = 500;
let boardSize = 16;
let color = "#000";
let mouseHeld = false;


function changeColor(event) {
    if (event.target.id != "board" && (event.type === 'click' || (event.type === 'mouseover' && mouseHeld))) {
        let targetDiv = event.target;
        targetDiv.style.backgroundColor = color;
        console.log(event.target)
    }
}


function renderBoard() {
    let board = document.querySelector('#board');
    board.addEventListener('click', changeColor);
    board.addEventListener('mouseover', changeColor);
    board.addEventListener('mousedown', e => mouseHeld = true);
    board.addEventListener('mouseup', e => mouseHeld = false);

    for (let i = 0; i < 16; i++) {
        let parentDiv = document.createElement("div");
        for (let j = 0; j < 16; j++) {
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