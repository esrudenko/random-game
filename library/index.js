let hamburger = document.querySelector(".hamburger");
let navigation = document.querySelector(".navigation");
const navigationItem = document.querySelectorAll(".navigation__item");
let navOverlay = document.querySelector(".hamburger-overlay");
let cardNumber = document.querySelector('.card-number');
let cardName = document.querySelector('.card-name');

let carouselButtons = document.querySelectorAll('.carousel__buttons');
let point = document.querySelectorAll('.carousel_cirle');
let imagesSlider = document.querySelectorAll('.images-slider');
let arrowRight = document.querySelector('.arrow-right');
let arrowLeft = document.querySelector('.arrow-left');

let formRadio = document.querySelectorAll('.form_radio');
let favoritesItems = document.querySelectorAll('.favorites-items');
let winter = document.querySelector('.winter');
let spring = document.querySelector('.spring');
let summer = document.querySelector('.summer');
let autumn = document.querySelector('.autumn');


//HAMBURGER
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    navigation.classList.toggle("active");
    navOverlay.classList.toggle("active");
}
navigationItem.forEach(n => n.addEventListener("click", closeMenu));
navOverlay.addEventListener("click", closeMenu);
function closeMenu() {
    hamburger.classList.remove("active");
    navigation.classList.remove("active");
    navOverlay.classList.remove("active");
}

//Function FadeIn FadeOut
function fadeIn(element, timeout) {
    setTimeout(() => {
        element.style.opacity = 0;
        element.style.display = 'flex';
        element.style.transition = `opacity ${timeout}ms`;
        if (window.innerWidth <= 1024) {
            element.style.flexDirection = 'column';
            element.style.alignItems = 'center';
        }
    }, timeout);
    setTimeout(() => {
        element.style.opacity = 1;
    }, timeout * 2);
};

function fadeOut(element, timeout) {
    element.style.opacity = 1;
    element.style.transition = `opacity ${timeout}ms`;
    element.style.opacity = 0;

    setTimeout(() => {
        element.style.display = 'none';
    }, timeout);
};


//SLIDER (section About)
if (window.innerWidth > 1024) {
    point[0].classList.add("active");
    imagesSlider[0].classList.add("active");
    imagesSlider[1].classList.add("active");
    imagesSlider[2].classList.add("active");


    for (let i = 0; i < 3; i++) {
        let counter = 0;
        carouselButtons[i].addEventListener(('click'), () => {
            for (let k = 0; k < imagesSlider.length; k++) {
                point[k].classList.remove("active");
                imagesSlider[k].classList.remove("active");
            }
            counter = i;
            imagesSlider[counter].classList.add("active");
            imagesSlider[counter + 1].classList.add("active");
            imagesSlider[counter + 2].classList.add("active");
            point[counter].classList.add("active");
        })
    }
}
if (window.innerWidth <= 1024) {

    point[0].classList.add("active");
    point[0].classList.add("disabled");
    imagesSlider[0].classList.add("active");
    arrowLeft.classList.add("disabled");

    let counter = 0;
    for (let i = 0; i < point.length; i++) {
        carouselButtons[i].addEventListener(('click'), () => {
            for (let k = 0; k < imagesSlider.length; k++) {
                point[k].classList.remove("active");
                point[k].classList.remove("disabled");
                imagesSlider[k].classList.remove("active");
                arrowLeft.classList.remove("disabled");
                arrowRight.classList.remove("disabled");
            }
            counter = i;
            imagesSlider[counter].classList.add("active");
            point[counter].classList.add("active");

            if (counter <= 0) {
                counter = 0;
                point[counter].classList.add("disabled");
                arrowLeft.classList.add("disabled");
            }

            if (counter >= imagesSlider.length - 1) {
                counter = imagesSlider.length - 1;
                point[counter].classList.add("disabled");
                arrowRight.classList.add("disabled");
            }
        })
    }

    arrowLeft.addEventListener(('click'), () => {
        for (let k = 0; k < imagesSlider.length; k++) {
            point[k].classList.remove("active");
            imagesSlider[k].classList.remove("active");
            point[k].classList.remove("disabled");
            arrowLeft.classList.remove("disabled");
            arrowRight.classList.remove("disabled");
        }
        counter--;
        if (counter <= 0) {
            counter = 0;
            point[counter].classList.add("disabled");
            arrowLeft.classList.add("disabled");
        }
        imagesSlider[counter].classList.add("active");
        point[counter].classList.add("active");
    })

    arrowRight.addEventListener(('click'), () => {
        for (let k = 0; k < imagesSlider.length; k++) {
            point[k].classList.remove("active");
            imagesSlider[k].classList.remove("active");
            point[k].classList.remove("disabled");
            arrowRight.classList.remove("disabled");
            arrowLeft.classList.remove("disabled");
        }
        counter++;
        if (counter >= imagesSlider.length - 1) {
            counter = imagesSlider.length - 1;
            point[counter].classList.add("disabled");
            arrowRight.classList.add("disabled");
        }
        imagesSlider[counter].classList.add("active");
        point[counter].classList.add("active");
    })
}

//RADIO-SLIDER (Section Favorites)
favoritesItems[0].classList.add("active");

for (let i = 0; i < favoritesItems.length; i++) {
    formRadio[i].addEventListener(('click'), () => {
        for (let k = 0; k < formRadio.length; k++) {
            fadeOut(favoritesItems[k], 300)
        }

        counter = i;
        fadeIn(favoritesItems[counter], 300.1)
    });
}


function inputCard(e) {
    this.value = this.value.replace(/[^\w\d\s-]/g, '')
};

cardNumber.addEventListener('input', inputCard);
cardName.addEventListener('input', inputCard);