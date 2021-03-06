function squareClick(square) { // the 'square' argument will get the square object that comes from the event listener
    changeIcon(square);
    changePlayer(square);
    square.isClicked = true;
    checkWinner();
    if (winner !== null) {
        endGame();
    }
}

function changeIcon(square) { // this fn changes square icon when the square gets clicked
    if (square.isClicked === false) {
        if (turn == 1) {
            square.square.classList.remove('fa-regular', 'fa-circle');
            square.square.classList.add('fa-light', 'fa-x');
            square.value = turn;
            playaudio();
        } else {
            square.square.classList.remove('fa-light', 'fa-x');
            square.square.classList.add('fa-regular', 'fa-circle');
            square.value = turn;
            playaudio();
        }
    }
}

function changePlayer(square) { // this fn changes player icon when the square gets clicked

    const playerIcon = document.getElementById('player-icon');

    if (square.isClicked == false) {
        if (turn !== 1) {
            playerIcon.classList.remove('fa-regular', 'fa-circle');
            playerIcon.classList.add('fa-light', 'fa-x');
            turn = 1;
        } else {
            playerIcon.classList.remove('fa-light', 'fa-x');
            playerIcon.classList.add('fa-regular', 'fa-circle');
            turn = 2;
        }
    }
}

function checkWinner() {
    if (topLeftArr.value !== null && topLeftArr.value === topMidArr.value && topMidArr.value === topRightArr.value) {
        winner = topLeftArr.value;
    } else if (middleLeftArr.value === middleArr.value && middleArr.value === middleRightArr.value) {
        winner = middleLeftArr.value;
    } else if (bottomLeftArr.value === bottomArr.value && bottomArr.value === bottomRightArr.value) {
        winner = bottomLeftArr.value;
    } else if (topLeftArr.value === middleLeftArr.value && middleLeftArr.value === bottomLeftArr.value) {
        winner = topLeftArr.value;
    } else if (topMidArr.value === middleArr.value && middleArr.value === bottomArr.value) {
        winner = topMidArr.value;
    } else if (topRightArr.value === middleRightArr.value && middleRightArr.value === bottomRightArr.value) {
        winner = topRightArr.value;
    } else if (topLeftArr.value === middleArr.value && middleArr.value === bottomRightArr.value) {
        winner = topLeftArr.value;
    } else if (bottomLeftArr.value === middleArr.value && middleArr.value === topRightArr.value) {
        winner = bottomLeftArr.value;
    }
}

function endGame() { // this fn will change the winner icon and kill squareClick fn, so player will need to click reset button
    const winnerIcon = document.getElementById('winner-icon');

    if (winner === 1) {
        winnerIcon.classList.add('fa-light', 'fa-x');
    } else if (winner === 2) {
        winnerIcon.classList.add('fa-regular', 'fa-circle');
    }
    squareClick = function () {
        return false;
    }
}

function playaudio() {
    audio.currentTime = 0;
    audio.play();
}

// winner init value
let winner = null;

// game turn: 1 === player 'X', 2 === player 'O'
let turn = 1;

// audio played when click square
let audio = new Audio("src/clicksound.wav");

// capturing the squares into variables
const topLeft = document.getElementsByClassName('top-left');
const topMid = document.getElementsByClassName('top');
const topRight = document.getElementsByClassName('top-right');
const middleLeft = document.getElementsByClassName('middle-left');
const middle = document.getElementsByClassName('middle');
const middleRight = document.getElementsByClassName('middle-right');
const bottomLeft = document.getElementsByClassName('bottom-left');
const bottom = document.getElementsByClassName('bottom');
const bottomRight = document.getElementsByClassName('bottom-right');

// creating objects with each square html element, the 'isClicked' bool, and the 'value' property that is used to check if there's a winner combination
let topLeftArr = { 'square': topLeft[0], 'isClicked': false, 'value': null };
let topMidArr = { 'square': topMid[0], 'isClicked': false, 'value': null, };
let topRightArr = { 'square': topRight[0], 'isClicked': false, 'value': null };
let middleLeftArr = { 'square': middleLeft[0], 'isClicked': false, 'value': null };
let middleArr = { 'square': middle[0], 'isClicked': false, 'value': null };
let middleRightArr = { 'square': middleRight[0], 'isClicked': false, 'value': null };
let bottomLeftArr = { 'square': bottomLeft[0], 'isClicked': false, 'value': null };
let bottomArr = { 'square': bottom[0], 'isClicked': false, 'value': null };
let bottomRightArr = { 'square': bottomRight[0], 'isClicked': false, 'value': null };

// adding an event listener to each square
topLeftArr.square.addEventListener('click', function () { squareClick(topLeftArr) });
topMidArr.square.addEventListener('click', function () { squareClick(topMidArr) });
topRightArr.square.addEventListener('click', function () { squareClick(topRightArr) });
middleLeftArr.square.addEventListener('click', function () { squareClick(middleLeftArr) });
middleArr.square.addEventListener('click', function () { squareClick(middleArr) });
middleRightArr.square.addEventListener('click', function () { squareClick(middleRightArr) });
bottomLeftArr.square.addEventListener('click', function () { squareClick(bottomLeftArr) });
bottomArr.square.addEventListener('click', function () { squareClick(bottomArr) });
bottomRightArr.square.addEventListener('click', function () { squareClick(bottomRightArr) });