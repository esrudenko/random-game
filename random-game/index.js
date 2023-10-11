let snakeGame = document.querySelector('.snake-game');
let header = document.querySelector('.header');
let settings = document.querySelector('.settings');
let settingsPopup = document.querySelector('.settings-popup');
let buttonSlowlySpeed = document.querySelector('.button-slowly-speed');
let buttonNormalSpeed = document.querySelector('.button-normal-speed');
let buttonFastSpeed = document.querySelector('.button-fast-speed');
let recordTable = document.querySelector('.record-table');
let topScore = document.querySelectorAll('.top-score');
let closeBtn = document.querySelector('.close-btn');
let square = document.querySelector('.square');
let buttonPlay = document.querySelector(".button-play");
let buttonStop = document.querySelector(".button-stop");
let buttonRestart = document.querySelector(".button-restart");
let restartGame = document.querySelector(".restart-game");
let gameOver = document.querySelector('.game-over');
let overlay = document.querySelector('.overlay');
let audioMouse = document.querySelector('.audio-mouse');
let audioGameOver = document.querySelector('.audio-game-over');
let audioSwitching = document.querySelector('.audio-switching');
let audioBase = document.querySelector('.audio-base');

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
        audioMouse.play();
    }
    if (snakeBody[0].classList.contains('snakeBody')) {
        setTimeout(() => {
            gameOver.classList.add('active');
            let inputOver = document.createElement('div');
            gameOver.appendChild(inputOver);
            inputOver.classList.add('score-over');
            inputOver.innerHTML = `Your score: ${score}`;
            audioBase.pause();
            audioGameOver.play();
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

//Stop, Play, Restart Game
let isPaused = true;
let myInterval = window.setInterval(function () {
    if (!isPaused) {
        moveSnake();
    }
}, 400)
function stop() {
    isPaused = true;
    audioBase.pause();
    audioSwitching.play();
    buttonRestart.classList.remove('active');
    buttonPlay.classList.remove('active');
    buttonStop.classList.add('active');
}
function play() {
    isPaused = false;
    audioSwitching.play();
    audioBase.play();
    buttonRestart.classList.remove('active');
    buttonStop.classList.remove('active');
    buttonPlay.classList.add('active');
}
buttonPlay.addEventListener("click", play);
buttonStop.addEventListener("click", stop);
buttonRestart.addEventListener("click", function () {
    audioSwitching.play();
    buttonPlay.classList.remove('active');
    buttonStop.classList.remove('active');
    buttonRestart.classList.add('active');
    setTimeout(() => {
        location.reload();
    }, 400);
});
restartGame.addEventListener("click", function () {
    location.reload();
});

//Settings
settings.addEventListener("click", function () {
    settingsPopup.classList.add('active');
    overlay.classList.add('active');
    stop();
});
function closeSettings() {
    overlay.classList.remove('active');
    settingsPopup.classList.remove('active');
}
overlay.addEventListener("click", closeSettings);
closeBtn.addEventListener("click", closeSettings);

buttonSlowlySpeed.classList.add('active');

//Settings SPEED
buttonSlowlySpeed.addEventListener('click', function () {
    audioSwitching.play();
    buttonNormalSpeed.classList.remove('active');
    buttonFastSpeed.classList.remove('active');
    buttonSlowlySpeed.classList.add('active');
    clearInterval(myInterval);
    myInterval = window.setInterval(function () {
        if (!isPaused) {
            moveSnake();
        }
    }, 400);
});
buttonNormalSpeed.addEventListener('click', function () {
    audioSwitching.play();
    buttonSlowlySpeed.classList.remove('active');
    buttonFastSpeed.classList.remove('active');
    buttonNormalSpeed.classList.add('active');
    clearInterval(myInterval);
    myInterval = window.setInterval(function () {
        if (!isPaused) {
            moveSnake();
        }
    }, 200);
});
buttonFastSpeed.addEventListener('click', function () {
    audioSwitching.play();
    buttonSlowlySpeed.classList.remove('active');
    buttonNormalSpeed.classList.remove('active');
    buttonFastSpeed.classList.add('active');
    clearInterval(myInterval);
    myInterval = window.setInterval(function () {
        if (!isPaused) {
            moveSnake();
        }
    }, 100);
});

//Score Table
function overwriteScoreTable() {
    let scoreTable = [];
    if (localStorage.getItem('Top1') == null) {
        for (let i = 1; i < 11; i++) {
            localStorage.setItem(`Top${i}`, 0);
        }
    }
    scoreTable.push(localStorage.Top1, localStorage.Top2, localStorage.Top3, localStorage.Top4, localStorage.Top5, localStorage.Top6, localStorage.Top7, localStorage.Top8, localStorage.Top9, localStorage.Top10, localStorage.CurrentScore);
    scoreTable.sort((a, b) => b - a);
    localStorage.Top1 = scoreTable[0];
    localStorage.Top2 = scoreTable[1];
    localStorage.Top3 = scoreTable[2];
    localStorage.Top4 = scoreTable[3];
    localStorage.Top5 = scoreTable[4];
    localStorage.Top6 = scoreTable[5];
    localStorage.Top7 = scoreTable[6];
    localStorage.Top8 = scoreTable[7];
    localStorage.Top9 = scoreTable[8];
    localStorage.Top10 = scoreTable[9];
}
if (localStorage.getItem('Top1') == null) {
    for (let i = 0; i < 11; i++) {
        topScore[i].textContent = `Top-${i + 1}:  0`;
    }
} else {
    topScore[0].textContent = `Top-1:  ${localStorage.Top1}`;
    topScore[1].textContent = `Top-2:  ${localStorage.Top2}`;
    topScore[2].textContent = `Top-3:  ${localStorage.Top3}`;
    topScore[3].textContent = `Top-4:  ${localStorage.Top4}`;
    topScore[4].textContent = `Top-5:  ${localStorage.Top5}`;
    topScore[5].textContent = `Top-6:  ${localStorage.Top6}`;
    topScore[6].textContent = `Top-7:  ${localStorage.Top7}`;
    topScore[7].textContent = `Top-8:  ${localStorage.Top8}`;
    topScore[8].textContent = `Top-9:  ${localStorage.Top9}`;
    topScore[9].textContent = `Top-10: ${localStorage.Top10}`;
}

console.log("Вроде-бы все требования ТЗ соблюдены, но буду рада, если укажите на ошибки. (Вёрстка, Логика игры, Завершение игры, Результат, Таблица рекордов, Звуки игры - все реализовано). Из дополнительного реализованного функционала: можно менить скорость игры(в настройках), а также поставить игру на play/pause). Правила игры думаю знаете, единственное хочу уточнить, что игра заканчивается в случае, когда змейка врезается в свой хвост. Перемещение змеи реализовано кнопками клавиатуры (вперед/назад/право/лево), переключение по кнопкам реализовано по клику")