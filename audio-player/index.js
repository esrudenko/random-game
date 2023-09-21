
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

//Songs title
const songs = ['Le Vent, Le Cri', 'Experience', 'Fly', 'In This Shirt',];
//Default song
let songIndex = 0;

//Init
function loadSong(song) {
    title.innerHTML = song;
    audio.src = `./audio/${song}.mp3`;
}
loadSong(songs[songIndex])

//Change title song, singer, cover
function changeTitle() {
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

//Play
function playSong() {
    player.classList.add('play')
    pauseBtn.src = "../audio-player/img/pause.svg";
    audio.play();
}

//Pause
function pauseSong() {
    player.classList.remove('play');
    audio.pause();
    pauseBtn.src = "../audio-player/img/play.svg";
    playBtn.classList.add('play');
}

//Pressing a "play"
function playSongBtn() {
    const isPlaying = player.classList.contains('play');
    if (isPlaying) {
        pauseSong();
        changeTitle();
    } else {
        playSong();
        changeTitle();
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
    changeTitle();
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
    changeTitle();
}
prevBtn.addEventListener('click', prevSong);

//Progress bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}
audio.addEventListener('timeupdate', updateProgress);
//Set progress
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}
progressContainer.addEventListener('click', setProgress);

//Autoplay
audio.addEventListener('ended', nextSong);
function updateProgressValue() {
    progress.max = audio.duration;
    progress.value = audio.currentTime;
    if (currentDurationTime.innerHTML === "NaN:NaN") {
        currentDurationTime.innerHTML = "0:00";
    } else {
        currentDurationTime.innerHTML = `${(formatTime(Math.floor(audio.currentTime)))} / ${(formatTime(Math.floor(audio.duration)))}`;
    }
};
// convert audio.currentTime and audio.duration into MM:SS format
function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10) {
        sec = `0${sec}`;
    };
    return `${min}:${sec}`;
};
setInterval(updateProgressValue, 500);

//change Progress Bar
function changeProgressBar() {
    audio.currentTime = progress.value;
};
//* sound volume control
volume.addEventListener("change", () => {
    audio.volume = volume.value / 100;
});
document.querySelector(".muteButton").addEventListener("click", () => {
    audio.muted = !audio.muted;
    if (audio.muted) {
        muteButton.style.opacity = 0.4;
    } else {
        muteButton.style.opacity = 1;
    }
});
