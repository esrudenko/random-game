// key: n63D8fm5mqS89NIKmOdWYos7AQHmUVsJ--ucE864kM4
// secret key: _T53dNKieOzlcVSgWyPpVSs7-yZAm8L0zuJOkKOMIHA

const gallery = document.querySelector('.gallery');
const downloadBtn = document.querySelector('.download-btn');
const downloadImage = document.querySelector('.download-img');
const closeBtn = document.querySelector('.close-btn');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let galleryImages;

const keyID = 'n63D8fm5mqS89NIKmOdWYos7AQHmUVsJ--ucE864kM4';
const randomURL = `https://api.unsplash.com/photos/random?client_id=${keyID}&count=30`;
let query = location.search.split('=').pop();
const searchURL = `https://api.unsplash.com/search/photos?client_id=${keyID}&query=${query}&per_page=50`;

//Local Storage Input
function localStorageInput() {
    let input = document.querySelector('[name="search"].search-input');
    if (input) {
        input.value = localStorage.getItem("search") || "";
        input.addEventListener('input', function () {
            localStorage.setItem("search", this.value);
        });
    }
}
document.addEventListener("DOMContentLoaded", localStorageInput);

//Random, Search Images
function ImagesRandom() {
    fetch(randomURL)
        .then((res) => res.json())
        .then((data) => {
            galleryImages = data;
            makeImages(galleryImages);
        });
}

function ImagesSearch() {
    fetch(searchURL)
        .then((res) => res.json())
        .then((data) => {
            galleryImages = data.results;
            makeImages(galleryImages);
        });
}

let currentImage = 0;
function makeImages(data) {
    data.forEach((item, index) => {
        let img = document.createElement('img');
        img.src = item.urls.regular;
        img.className = 'gallery-image';
        gallery.appendChild(img);
        img.addEventListener('click', () => {
            currentImage = index;
            showModalImage(item);
        })
    })
}

if (query == '') {
    ImagesRandom();
} else {
    ImagesSearch();
}

//Modal window: carousel-images and download image
function showModalImage(item) {
    let imageModal = document.querySelector('.image-modal');
    imageModal.classList.remove('none-active');
    downloadBtn.href = item.links.html;
    downloadImage.src = item.urls.regular;
    closeBtn.addEventListener("click", () => {
        imageModal.classList.add('none-active');
    })
}

function previousImage() {
    if (currentImage > 0) {
        currentImage--;
        showModalImage(galleryImages[currentImage]);
    }
}

function nextImage() {
    if (currentImage < galleryImages.length - 1) {
        currentImage++;
        showModalImage(galleryImages[currentImage]);
    }
}

leftArrow.addEventListener("click", previousImage)
rightArrow.addEventListener("click", nextImage)
