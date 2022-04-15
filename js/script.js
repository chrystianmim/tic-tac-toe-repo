function squareClick(square) {
    changeIcon(square);
    changePlayer();
}

function changeIcon(square) {
    if (turn == 1) {
        square.classList.remove('fa-regular', 'fa-circle');
        square.classList.add('fa-light', 'fa-x');
    } else {
        square.classList.remove('fa-light', 'fa-x');
        square.classList.add('fa-regular', 'fa-circle');
    }

    console.log(turn);
}

function changePlayer() {
    const playerIcon = document.getElementById('player-icon');

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

let turn = 1;
const topLeft = document.getElementsByClassName('top-left');
/* const top = document.getElementsByClassName('top'); */

topLeft[0].addEventListener('click', function () { squareClick(topLeft[0]) });
/* top[0].addEventListener('click', function () { squareClick(top[0]) }); */