
const background = document.querySelector('.background');
const imagePlayer = document.querySelector('.image-player');
const title = document.querySelector('.title');
const audio = document.querySelector(".audio");
const playBtn = document.querySelector('.play');
const nextBtn = document.querySelector('.play-next');
const prevBtn = document.querySelector('.play-prev');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');
const volume = document.querySelector(".sound-control input");
const currentDurationTime = document.querySelector('.current-duration-time');
const player = document.querySelector('.player');
const pauseBtn = document.querySelector('.pause');
const singer = document.querySelector('.singer');
//Названия песен
const songs = ['Le Vent, Le Cri', 'Experience', 'Fly', 'In This Shirt',];
//Песня по умолчанию
let songIndex = 0;
//Init
function loadSong(song) {
    title.innerHTML = song;
    audio.src = `./audio/${song}.mp3`;
}
loadSong(songs[songIndex])
//Highlighting Song
function highlighting() {
    if (title.textContent.includes("Le Vent")) {
        singer.textContent = 'Ennio Morricone';
        background.style.backgroundImage = "url('./img/img-song1.jpg')";
        imagePlayer.style.backgroundImage = "url('./img/img-song1.jpg')";
    } else if (title.textContent.includes("Experience")) {
        singer.textContent = 'Ludovico Einaudi';
        background.style.backgroundImage = "url('./img/img-song2.jpg')";
        imagePlayer.style.backgroundImage = "url('./img/img-song2.jpg')";
    } else if (title.textContent.includes("Fly")) {
        singer.textContent = 'Ludovico Einaudi';
        background.style.backgroundImage = "url('./img/img-song3.jpg')";
        imagePlayer.style.backgroundImage = "url('./img/img-song3.jpg')";
    } else {
        singer.textContent = 'The Irrepressibles';
        background.style.backgroundImage = "url('./img/img-song4.jpg')"
        imagePlayer.style.backgroundImage = "url('./img/img-song4.jpg')";
    }
}
//play
function playSong() {
    player.classList.add('play')
    pauseBtn.src = "../audio-player/img/pause.svg";
    audio.play();
}
//pause
function pauseSong() {
    player.classList.remove('play');
    audio.pause();
    pauseBtn.src = "../audio-player/img/play.svg";
    playBtn.classList.add('play');
}
//Нажатие на play
function playSongBtn() {
    const isPlaying = player.classList.contains('play');
    if (isPlaying) {
        pauseSong();
        highlighting();
    } else {
        playSong();
        highlighting();
    }
}
playBtn.addEventListener('click', playSongBtn);
//Next Song
function nextSong() {
    songIndex++
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
    highlighting();
}
nextBtn.addEventListener('click', nextSong)
//Previously Song
function prevSong() {
    songIndex--
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
    highlighting();
}
prevBtn.addEventListener('click', prevSong);

