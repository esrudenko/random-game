//header
let navigation = document.querySelector(".navigation");
const navigationItem = document.querySelectorAll(".navigation__item");
let hamburger = document.querySelector(".hamburger");
let navOverlay = document.querySelector(".hamburger-overlay");
//icons
let iconProfile = document.querySelector('.icon-profile');
let iconAuthorization = document.querySelector('.icon-authorization');
let firstLetters = document.querySelector('.first-letters');
let profileNoauth = document.querySelector('.profile-noauth');
let profileWithauth = document.querySelector('.profile-withauth');
//modal profile no authorization
let login = document.querySelector('.login');
let register = document.querySelector('.register');
//modal profile authorization
let myprofile = document.querySelector('.myprofile');
let logout = document.querySelector('.logout');
let numberCardProfile = document.querySelector('.number-card');
//modal Login
let modalBlock = document.querySelector('.modal_block');
let wrapLogin = document.querySelector('.wrap-login');
let modalLogin = document.querySelector('.modal-login');
let closeLoginButton = document.querySelector('.close-login');
let loginBlock = document.querySelectorAll('.login-block');
let pswLogin = document.getElementById('psw');
let buttonLogin = document.querySelector('.button-login');

//modal Register
let wrapRegister = document.querySelector('.wrap-register');
let modalRegister = document.querySelector('.modal-register');
let closeRegisterBatton = document.querySelector('.close-register');
let registerBlock = document.querySelectorAll('.register-block');
let password = document.getElementById('password');
let buttonSingup = document.querySelector('.button-singup');

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

let buttonBuy = document.querySelectorAll('.button__buy');

let cardNumber = document.querySelector('.card-number');
let cardName = document.querySelector('.card-name');
let cardButtonWrapper = document.querySelector('.card-button_wrapper');
let cardButton = document.querySelector('.card-button');
let profile = document.querySelector('.profile');
let cardSingup = document.querySelector('.card-singup');
let cardLogin = document.querySelector('.card-login');


//HAMBURGER
hamburger.addEventListener("click", openHamburger);
function openHamburger() {
    if (hamburger.classList.contains("active")) {
        closeHamburger();
    } else {
        closeProfileNoAuth();
        closeProfileWithAuth();
        hamburger.classList.toggle("active");
        navigation.classList.toggle("active");
        navOverlay.classList.toggle("active");
    }
}
navigationItem.forEach(n => n.addEventListener("click", closeHamburger));
navOverlay.addEventListener("click", closeHamburger);
function closeHamburger() {
    hamburger.classList.remove("active");
    navigation.classList.remove("active");
    navOverlay.classList.remove("active");
}

//MODALS
function openProfileNoAuth() {
    if (iconProfile.classList.contains("active")) {
        closeProfileNoAuth();
    } else {
        closeHamburger();
        iconProfile.classList.toggle("active");
        profileNoauth.classList.toggle("active");
        navOverlay.classList.toggle("active");
    }
}
function closeProfileNoAuth() {
    iconProfile.classList.remove("active");
    profileNoauth.classList.remove("active");
    navOverlay.classList.remove("active");
}
iconProfile.addEventListener("click", openProfileNoAuth);
navOverlay.addEventListener("click", closeProfileNoAuth);

function openProfileWithAuth() {
    if (iconAuthorization.classList.contains("active")) {
        closeProfileWithAuth();
    } else {
        closeHamburger();
        iconAuthorization.classList.toggle("active");
        profileWithauth.classList.toggle("active");
        navOverlay.classList.toggle("active");
    }
}
function closeProfileWithAuth() {
    iconAuthorization.classList.remove("active");
    profileWithauth.classList.remove("active");
    navOverlay.classList.remove("active");
}
iconAuthorization.addEventListener("click", openProfileWithAuth);
navOverlay.addEventListener("click", closeProfileWithAuth);

//Modal REGISTER
function openRegister() {
    if (wrapLogin.classList.contains("active")) {
        modalLogin.classList.remove("active");
        wrapLogin.classList.remove("active");
    }
    modalRegister.classList.add("active");
    wrapRegister.classList.add("active");
    navOverlay.classList.add("active");
}
function closeRegister(event) {
    if ((event.target == modalRegister) || (event.target == registerBlock[0]) || (event.target == registerBlock[1]) || (event.target == registerBlock[2]) || (event.target == registerBlock[3]) || (event.target == registerBlock[4]) || (event.target == registerBlock[5]) || (event.target == registerBlock[6]) || (event.target == registerBlock[7]) || (event.target == registerBlock[8]) || (event.target == registerBlock[10])) {
        openRegister();
    } else if (event.target == registerBlock[11]) {
        openLogin();
    } else if (event.target == registerBlock[9]) {
        registrationPage();
    }
    else {
        modalRegister.classList.remove("active");
        wrapRegister.classList.remove("active");
        navOverlay.classList.remove("active");
        closeProfileNoAuth();
    }
}
register.addEventListener("click", openRegister);
cardSingup.addEventListener("click", openRegister);
closeRegisterBatton.addEventListener("click", closeRegister);
wrapRegister.addEventListener("click", closeRegister);
//Modal LOGIN
function openLogin() {
    if (wrapRegister.classList.contains("active")) {
        modalRegister.classList.remove("active");
        wrapRegister.classList.remove("active");
    }
    modalLogin.classList.add("active");
    wrapLogin.classList.add("active");
    navOverlay.classList.add("active");
}
function closeLogin(event) {
    if ((event.target == modalLogin) || (event.target == loginBlock[0]) || (event.target == loginBlock[1]) || (event.target == loginBlock[2]) || (event.target == loginBlock[3]) || (event.target == loginBlock[4]) || (event.target == loginBlock[6])) {
        openLogin();
    } else if (event.target == loginBlock[7]) {
        openRegister();
    } else if (event.target == loginBlock[5]) {
        authorizationPage();
    }
    else {
        modalLogin.classList.remove("active");
        wrapLogin.classList.remove("active");
        navOverlay.classList.remove("active");
        closeProfileNoAuth();
    }
}
login.addEventListener("click", openLogin);
cardLogin.addEventListener("click", openLogin);
closeLoginButton.addEventListener("click", closeLogin);
wrapLogin.addEventListener("click", closeLogin);

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

//INPUTS
function inputCard(e) {
    this.value = this.value.replace(/[^\w\d\s-]/g, '')
};
function inputPassword(e) {
    if (this.value.length > 8) { alert("Password mustn't be more than 8 characters") }
    this.value = this.value.substr(0, 8)
};

cardNumber.addEventListener('input', inputCard);
cardName.addEventListener('input', inputCard);
password.addEventListener('input', inputPassword);
pswLogin.addEventListener('input', inputPassword);

//LOCALSTORAGE Register
let formData = {};
let formRegister = document.querySelector('.form-register');
//получить данные из input
formRegister.addEventListener('input', function (event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('formData', JSON.stringify(formData));
});
//восстановить данные
if (localStorage.getItem('formData')) {
    formData = JSON.parse(localStorage.getItem('formData'));
    for (let key in formData) {
        formRegister.elements[key].value = formData[key];
    }
}
console.log(formData)
//LOCALSTORAGE Login
let formDataLogin = {};
let formLogin = document.querySelector('.form-login');
//получить данные из input
formLogin.addEventListener('input', function (event) {
    formDataLogin[event.target.name] = event.target.value;
    localStorage.setItem('formDataLogin', JSON.stringify(formDataLogin));
});
//восстановить данные
if (localStorage.getItem('formDataLogin')) {
    formDataLogin = JSON.parse(localStorage.getItem('formDataLogin'));
    for (let key in formDataLogin) {
        formLogin.elements[key].value = formDataLogin[key];
    }
}
console.log(formDataLogin)
//LOCALSTORAGE Card
let formDataCard = {};
let formCard = document.querySelector('.form-card');
//получить данные из input
formCard.addEventListener('input', function (event) {
    formDataCard[event.target.name] = event.target.value;
    localStorage.setItem('formDataCard', JSON.stringify(formDataCard));
});
//восстановить данные
if (localStorage.getItem('formDataCard')) {
    formDataCard = JSON.parse(localStorage.getItem('formDataCard'));
    for (let key in formDataCard) {
        formCard.elements[key].value = formDataCard[key];
    }
}
console.log(formDataCard)


//Валидация email
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input = document.querySelector('.emailreg');

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

//Иконка пользователя
let firstLetterLastName = (formData.lasttame).substr(0, 1).toUpperCase();
let firstLetterFirstName = (formData.firstame).substr(0, 1).toUpperCase();
function registrationPage() {
    if ((formData.firstame.length == 0) || (formData.lasttame.length == 0) || (formData.emailreg.length == 0) || (formData.password.length == 0)) {
        openRegister();
    } else if ((isEmailValid(input.value)) == false) {
        alert('Password entered incorrectly');
        openRegister();
    } else {
        iconProfile.style.display = "none";
        iconAuthorization.style.display = "block";
        firstLetters.textContent = `${firstLetterFirstName}` + `${firstLetterLastName}`
        modalRegister.classList.remove("active");
        wrapRegister.classList.remove("active");
        navOverlay.classList.remove("active");
        closeProfileNoAuth()
        location.reload()
    }
}
function authorizationPage() {
    if ((formDataLogin.email.length == 0) || (formDataLogin.psw.length == 0)) {
        openLogin();
    } else {
        iconProfile.style.display = "none";
        iconAuthorization.style.display = "block";
        firstLetters.textContent = `${firstLetterFirstName}` + `${firstLetterLastName}`;
        modalLogin.classList.remove("active");
        wrapLogin.classList.remove("active");
        navOverlay.classList.remove("active");
        closeProfileNoAuth()
        location.reload()
    }
}
buttonLogin.addEventListener("click", authorizationPage);
buttonSingup.addEventListener("click", registrationPage);

function LibrariCardWithoutLogin() {
    if (((formDataCard.cardname) == (`${formData.firstame}` + ' ' + `${formData.lasttame}`)) && (location.href.includes('#authorization') == false) && ((formDataCard.cardnumber) == (`${localStorage.numberCardProfile}`))) {
        cardButtonWrapper.style.display = "none";
        profile.style.display = "flex";
        setTimeout(() => {
            cardButtonWrapper.style.display = "block";
            profile.style.display = "none";
            localStorage.removeItem('formDataCard');
            location.reload()
        }, 10000)
    } else {
        cardButtonWrapper.style.display = "block";
        profile.style.display = "none";
    }
}
cardButton.addEventListener("click", LibrariCardWithoutLogin);
buttonBuy.forEach(n => n.addEventListener("click", openLogin));
//

function goRandom() {
    let hexadecimalSystem = "0123456789ABCDEF";
    let randomCardNumber = "";
    while (randomCardNumber.length < 9) {
        randomCardNumber += hexadecimalSystem[Math.floor(Math.random() * hexadecimalSystem.length)];
    }
    numberCardProfile.textContent = `${randomCardNumber}`;
}

if (location.href.includes('#authorization')) {
    iconProfile.style.display = "none";
    iconAuthorization.style.display = "block";
    firstLetters.textContent = `${firstLetterFirstName}` + `${firstLetterLastName}`;
    iconAuthorization.setAttribute('title', `${formData.firstame}` + " " + `${formData.lasttame}`);
    numberCardProfile.textContent = localStorage.numberCardProfile;
    if (localStorage.numberCardProfile.length < 1) {
        goRandom()
        localStorage.setItem(`numberCardProfile`, numberCardProfile.textContent);
        localStorage.getItem(`numberCardProfile`);
    }
}
