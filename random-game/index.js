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

//Random location of the snake
function makeSnake() {
    let posX = Math.round(Math.random() * (numberOfCells - 3) + 3);
    let posY = Math.round(Math.random() * (numberOfCells - 1) + 1);
    return [posX, posY];
}
let snakeCoordinates = makeSnake();

//Create Snake
let snakeBody = [document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "' + snakeCoordinates[1] + '"]'),
document.querySelector('[posX = "' + (+snakeCoordinates[0] - 1) + '"][posY = "' + snakeCoordinates[1] + '"]'),
document.querySelector('[posX = "' + (+snakeCoordinates[0] - 2) + '"][posY = "' + snakeCoordinates[1] + '"]')];
for (let i = 0; i < snakeBody.length; i++) {
    snakeBody[i].classList.add('snakeBody');
}
snakeBody[0].classList.add('snakeHead');

//Create Mouse
function createMouse() {
    function makeMouse() {
        let posX = Math.round(Math.random() * (numberOfCells - 1) + 1);
        let posY = Math.round(Math.random() * (numberOfCells - 1) + 1);
        return [posX, posY];
    }
    let mouseCoordinates = makeMouse();
    mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]');
    while (mouse.classList.contains('snakeBody')) {
        let mouseCoordinates = makeMouse();
        mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]');
    }
    mouse.classList.add('mouse');
}
createMouse();
let direction = 'right';
let steps = false;
let input = document.createElement('input');
header.appendChild(input);
input.classList.add('input');
let score = 0;
input.value = `Score: ${score}`;

//Move Snake
function moveSnake() {
    let snakeCoordinates = [snakeBody[0].getAttribute('posX'), snakeBody[0].getAttribute('posY')];
    snakeBody[0].classList.remove('snakeHead');
    snakeBody[snakeBody.length - 1].classList.remove('snakeBody');
    snakeBody.pop();
    if (direction == 'right') {
        if (snakeCoordinates[0] < numberOfCells) {
            snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0] + 1) + '"][posY = "' + snakeCoordinates[1] + '"]'));
        } else {
            snakeBody.unshift(document.querySelector('[posX = "1"][posY = "' + snakeCoordinates[1] + '"]'));
        }
    } else if (direction == 'left') {
        if (snakeCoordinates[0] > 1) {
            snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0] - 1) + '"][posY = "' + snakeCoordinates[1] + '"]'));
        } else {
            snakeBody.unshift(document.querySelector('[posX = "' + (+numberOfCells) + '"][posY = "' + snakeCoordinates[1] + '"]'));
        }
    }
    else if (direction == 'up') {
        if (snakeCoordinates[1] < numberOfCells) {
            snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "' + (+snakeCoordinates[1] + 1) + '"]'));
        } else {
            snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "1"]'));
        }
    } else if (direction == 'down') {
        if (snakeCoordinates[1] > 1) {
            snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "' + (+snakeCoordinates[1] - 1) + '"]'));
        } else {
            snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "' + (+numberOfCells) + '"]'));
        }
    }
    if (snakeBody[0].getAttribute('posX') == mouse.getAttribute('posX') && snakeBody[0].getAttribute('posY') == mouse.getAttribute('posY')) {
        mouse.classList.remove('mouse');
        let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
        let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
        snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
        createMouse();
        score++;
        input.value = `Score: ${score}`;
    }
    if (snakeBody[0].classList.contains('snakeBody')) {
        setTimeout(() => {
            gameOver.classList.add('active');
            let inputOver = document.createElement('input');
            gameOver.appendChild(inputOver);
            inputOver.classList.add('score-over');
            inputOver.value = `Your score: ${score}`;
            localStorage.setItem(`CurrentScore`, `${score}`);
            overwriteScoreTable();
        }, 200)
        isPaused = true;
    }
    snakeBody[0].classList.add('snakeHead');
    for (let i = 0; i < snakeBody.length; i++) {
        snakeBody[i].classList.add('snakeBody');
    }
    steps = true;
}
window.addEventListener('keydown', function (event) {
    if (steps = true) {
        if (event.keyCode == 37 && direction != 'right') {
            direction = 'left';
            steps = false;
        }
        if (event.keyCode == 38 && direction != 'down') {
            direction = 'up';
            steps = false;
        }
        if (event.keyCode == 39 && direction != 'left') {
            direction = 'right';
            steps = false;
        }
        if (event.keyCode == 40 && direction != 'up') {
            direction = 'down';
            steps = false;
        }
    }
})

