// key n63D8fm5mqS89NIKmOdWYos7AQHmUVsJ--ucE864kM4
// secret key _T53dNKieOzlcVSgWyPpVSs7-yZAm8L0zuJOkKOMIHA

const access_key = 'n63D8fm5mqS89NIKmOdWYos7AQHmUVsJ--ucE864kM4';
let searchParam = location.search.split('=').pop();
const random_photo_url = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=30`;
const search_photo_url = `https://api.unsplash.com/search/photos?client_id=${access_key}&query=${searchParam}&per_page=50`;

const gallery = document.querySelector('.gallery');
const closeSearch = document.querySelector('.close-search');

let allImages;

document.addEventListener('DOMContentLoaded', function () {
    let input = document.querySelector('[name="search"].search-input');

    if (input) {
        input.value = localStorage.getItem("search") || "";

        input.addEventListener('input', function () {
            localStorage.setItem("search", this.value);
        });
    }
});

const getImages = () => {
    fetch(random_photo_url)
        .then(res => res.json())
        .then(data => {
            allImages = data;
            makeImages(allImages);
        });
}

let currentImage = 0; // will track the current large image

const makeImages = (data) => {
    data.forEach((item, index) => {

        let img = document.createElement('img');
        img.src = item.urls.regular;
        img.className = 'gallery-image';

        gallery.appendChild(img);

        img.addEventListener('click', () => {
            currentImage = index;
            showPopup(item);
        })

    })
}

const searchImages = () => {
    fetch(search_photo_url)
        .then(res => res.json())
        .then(data => {
            allImages = data.results;
            makeImages(allImages);
        });
}

const showPopup = (item) => {
    let popup = document.querySelector('.image-modal');
    const downloadBtn = document.querySelector('.download-btn');
    const closeBtn = document.querySelector('.close-btn');
    const image = document.querySelector('.large-img');

    popup.classList.remove('none-active');
    downloadBtn.href = item.links.html;
    image.src = item.urls.regular;

    closeBtn.addEventListener('click', () => {
        popup.classList.add('none-active');
    })
}

const preBtns = document.querySelector('.left-arrow');
const nxtBtns = document.querySelector('.right-arrow');

if (searchParam == '') {
    getImages();
} else {
    searchImages();
}


preBtns.addEventListener('click', () => {
    if (currentImage > 0) {
        currentImage--;
        showPopup(allImages[currentImage]);
    }
})

nxtBtns.addEventListener('click', () => {
    if (currentImage < allImages.length - 1) {
        currentImage++;
        showPopup(allImages[currentImage]);
    }
})