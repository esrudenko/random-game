let snakeGame = document.querySelector('.snake-game');
let header = document.querySelector('.header');
let settings = document.querySelector('.settings');
let settingsPopup = document.querySelector('.settings-popup');
let buttonSlowlySpeed = document.querySelector('.button-slowly-speed');
let buttonNormalSpeed = document.querySelector('.button-normal-speed');
let buttonFastSpeed = document.querySelector('.button-fast-speed');
let recordTable = document.querySelector('.record-table');
let topScore = document.querySelectorAll('.top-score');
let square = document.querySelector('.square');
let buttonPlay = document.querySelector(".button-play");
let buttonStop = document.querySelector(".button-stop");
let buttonRestart = document.querySelector(".button-restart");
let restartGame = document.querySelector(".restart-game");
let gameOver = document.querySelector('.game-over');
let overlay = document.querySelector('.overlay');

let numberOfCells = 10;
//Create cells in the field
for (let i = 1; i < (numberOfCells ** 2 + 1); i++) {
    let cell = document.createElement('div');
    square.appendChild(cell);
    cell.classList.add('cell');
};
let cell = document.getElementsByClassName('cell');
let x = 1;
let y = numberOfCells;
for (let i = 0; i < cell.length; i++) {
    if (x > numberOfCells) {
        x = 1;
        y--;
    };
    cell[i].setAttribute('posX', x);
    cell[i].setAttribute('posY', y);
    x++;
};