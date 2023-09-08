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
//modal My Profile
let wrapMyprofile = document.querySelector('.wrap-myprofile');
let myprofileBlock = document.querySelectorAll('.myprofile-block')
let closeMyprofileBatton = document.querySelector('.close-myprofile');
let myprofileLetter = document.querySelector('.myprofile-letter');
let myprofileFullname = document.querySelector('.myprofile-fullname');
let visitsCounter = document.querySelector('.visits-counter');
let booksCounter = document.querySelector('.books-counter');
//modal Buy a Library Card
let wrapCard = document.querySelector('.wrap-card');
let cardBlock = document.querySelectorAll('.card-block')
let closeCardBatton = document.querySelector('.close-card');
let CardNumber = document.querySelector('.input-card-number');
let CardCode = document.querySelector('.input-card-code');
let CardCode2 = document.querySelector('.input-card-code-2');
let CardCvc = document.querySelector('.input-card-cvc');

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
let nameBook = document.querySelectorAll('.name-book');

let cardNumber = document.querySelector('.card-number');
let cardName = document.querySelector('.card-name');
let cardButtonWrapper = document.querySelector('.card-button_wrapper');
let cardButton = document.querySelector('.card-button');
let profile = document.querySelector('.profile');
let visitsCardCounter = document.querySelector('.visits-card-counter');
let booksCardCounter = document.querySelector('.books-card-counter');
let copyText = document.querySelector(".number-copy");
let copyButton = document.querySelector(".copy");
let cardSingup = document.querySelector('.card-singup');
let cardLogin = document.querySelector('.card-login');


//HAMBURGER
hamburger.addEventListener("click", openHamburger);
function openHamburger() {
    if (hamburger.classList.contains("active")) {
        closeHamburger();
    } else if ((wrapLogin.classList.contains("active")) || (wrapRegister.classList.contains("active")) || (wrapMyprofile.classList.contains("active"))) {
        closeHamburger();
        navOverlay.classList.toggle("active");
    }
    else {
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
        CounterOfVisits();
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
//Modal MYPROFILE
function openMyprofile() {
    wrapMyprofile.classList.add("active");
    closeProfileWithAuth();
    navOverlay.classList.add("active");
    myprofileLetter.textContent = `${(formData.firstame).substr(0, 1).toUpperCase()}` + `${(formData.lasttame).substr(0, 1).toUpperCase()}`;
    myprofileFullname.textContent = `${formData.firstame}` + " " + `${formData.lasttame}`;
    if (myprofileFullname.textContent.length > 20) {
        myprofileFullname.style.height = "50px";
        myprofileFullname.style.fontSize = "14px";
    } else if (myprofileFullname.textContent.length > 10) {
        myprofileFullname.style.height = "50px";
    }
}
function closeMyprofile(event) {
    if ((event.target == myprofileBlock[0]) || (event.target == myprofileBlock[1]) || (event.target == myprofileBlock[2]) || (event.target == myprofileBlock[3]) || (event.target == myprofileBlock[4]) || (event.target == myprofileBlock[5]) || (event.target == myprofileBlock[6]) || (event.target == myprofileBlock[7]) || (event.target == myprofileBlock[8]) || (event.target == myprofileBlock[9]) || (event.target == myprofileBlock[10]) || (event.target == myprofileBlock[11]) || (event.target == myprofileBlock[12]) || (event.target == myprofileBlock[13]) || (event.target == myprofileBlock[14]) || (event.target == myprofileBlock[15]) || (event.target == myprofileBlock[16]) || (event.target == myprofileBlock[17]) || (event.target == myprofileBlock[18]) || (event.target == myprofileBlock[19]) || (event.target == myprofileBlock[20]) || (event.target == myprofileBlock[21]) || (event.target == myprofileBlock[22])) {
        openMyprofile();
    } else if (event.target == myprofileBlock[23]) {
        copyNumberCard()
    } else {
        wrapMyprofile.classList.remove("active");
        navOverlay.classList.remove("active");
        closeProfileWithAuth();
    }
}
myprofile.addEventListener("click", openMyprofile);
closeMyprofileBatton.addEventListener("click", closeMyprofile);
wrapMyprofile.addEventListener("click", closeMyprofile);
logout.addEventListener("click", closeMyprofile);
//Modal BUY A LIBRARY CARD
function openBuyCard() {
    wrapCard.classList.add("active");
    navOverlay.classList.add("active");
}
function closeBuyCard(event) {
    if ((event.target == cardBlock[0]) || (event.target == cardBlock[1]) || (event.target == cardBlock[2]) || (event.target == cardBlock[3]) || (event.target == cardBlock[4]) || (event.target == cardBlock[5]) || (event.target == cardBlock[6]) || (event.target == cardBlock[7]) || (event.target == cardBlock[8]) || (event.target == cardBlock[9]) || (event.target == cardBlock[10]) || (event.target == cardBlock[11]) || (event.target == cardBlock[12]) || (event.target == cardBlock[13]) || (event.target == cardBlock[14]) || (event.target == cardBlock[15]) || (event.target == cardBlock[16]) || (event.target == cardBlock[17]) || (event.target == cardBlock[18]) || (event.target == cardBlock[19]) || (event.target == cardBlock[20]) || (event.target == cardBlock[22]) || (event.target == cardBlock[23])) {
        openBuyCard();
    } else if ((event.target == cardBlock[21])) {
        if (formDataBankCard.bankcard.length < 16) {
            alert("Card Number souldn't contain less than 16 digits");
            openBuyCard();
        } else if (formDataBankCard.expirationcode.length < 2) {
            alert("Expiration code shouldn't contain less than 2 digits");
            openBuyCard();
        } else if (formDataBankCard.expirationcode.length < 2) {
            alert("Expiration code shouldn't contain less than 2 digits");
            openBuyCard();
        } else if ((CardCode.value !== '01') && (CardCode.value !== '02') && (CardCode.value !== '03') && (CardCode.value !== '04') && (CardCode.value !== '05') && (CardCode.value !== '06') && (CardCode.value !== '07') && (CardCode.value !== '08') && (CardCode.value !== '09') && (CardCode.value !== '10') && (CardCode.value !== '11') && (CardCode.value !== '12')) {
            alert("Expiration code(month) entered incorrectly");
            openBuyCard();
        } else if (CardCode2.value < 23) {
            alert("Expiration code(year) entered incorrectly");
            openBuyCard();
        } else if (formDataBankCard.cvc.length < 3) {
            alert("CVC shouldn't contain less than 3 digits");
            openBuyCard();
        } else if ((typeof formDataBankCard['cardholdername'] === "undefined") || (formDataBankCard.cardholdername.length < 1)) {
            alert("Input 'Cardholder name' shouldn't be empty");
            openBuyCard();
        } else if ((typeof formDataBankCard['postalcode'] === "undefined") || (formDataBankCard.postalcode.length < 1)) {
            alert("Input 'Postal code' shouldn't be empty");
            openBuyCard();
        } else if ((typeof formDataBankCard['town'] === "undefined") || (formDataBankCard.town.length < 1)) {
            alert("Input 'City / Town' shouldn't be empty");
            openBuyCard();
        } else {
            document.querySelector(".expectation").setAttribute('disabled', '');
            document.querySelector(".expectation").textContent = 'Own';
            localStorage.setItem(`${document.querySelector(".expectation").id}`, document.querySelector(".expectation").textContent);
            wrapCard.classList.remove("active");
            navOverlay.classList.remove("active");
            location.reload();
        }
    } else {
        wrapCard.classList.remove("active");
        navOverlay.classList.remove("active");
        localStorage.removeItem('formDataBankCard');
    }
}
wrapCard.addEventListener("click", closeBuyCard);

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
function inputCardNumber(e) {
    if (this.value.length > 16) { alert("Card Number shouldn't contain more than 16 digits") }
    this.value = this.value.substr(0, 16)
};
function inputCardCode(e) {
    if (this.value.length > 2) { alert("Expiration code shouldn't contain more than 2 digits") }
    this.value = this.value.substr(0, 2)
};
function inputcCardCvc(e) {
    if (this.value.length > 3) { alert("CVC shouldn't contain more than 3 digits") }
    this.value = this.value.substr(0, 3)
};
cardNumber.addEventListener('input', inputCard);
cardName.addEventListener('input', inputCard);
CardNumber.addEventListener('input', inputCardNumber);
CardCode.addEventListener('input', inputCardCode);
CardCode2.addEventListener('input', inputCardCode);
CardCvc.addEventListener('input', inputcCardCvc);

//LOCALSTORAGE Register
let formData = {};
let formRegister = document.querySelector('.form-register');
formRegister.addEventListener('input', function (event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('formData', JSON.stringify(formData));
});
if (localStorage.getItem('formData')) {
    formData = JSON.parse(localStorage.getItem('formData'));
    for (let key in formData) {
        formRegister.elements[key].value = formData[key];
    }
}
//LOCALSTORAGE Login
let formDataLogin = {};
let formLogin = document.querySelector('.form-login');
formLogin.addEventListener('input', function (event) {
    formDataLogin[event.target.name] = event.target.value;
    localStorage.setItem('formDataLogin', JSON.stringify(formDataLogin));
});
if (localStorage.getItem('formDataLogin')) {
    formDataLogin = JSON.parse(localStorage.getItem('formDataLogin'));
    for (let key in formDataLogin) {
        formLogin.elements[key].value = formDataLogin[key];
    }
}
//LOCALSTORAGE Card
let formDataCard = {};
let formCard = document.querySelector('.form-card');
formCard.addEventListener('input', function (event) {
    formDataCard[event.target.name] = event.target.value;
    localStorage.setItem('formDataCard', JSON.stringify(formDataCard));
});
if (localStorage.getItem('formDataCard')) {
    formDataCard = JSON.parse(localStorage.getItem('formDataCard'));
    for (let key in formDataCard) {
        formCard.elements[key].value = formDataCard[key];
    }
}
//LOCALSTORAGE Buy a Library Card
let formDataBankCard = {};
let formBankCard = document.querySelector('.bank-card');
formBankCard.addEventListener('input', function (event) {
    formDataBankCard[event.target.name] = event.target.value;
    localStorage.setItem('formDataBankCard', JSON.stringify(formDataBankCard));
});
if (localStorage.getItem('formDataBankCard')) {
    formDataBankCard = JSON.parse(localStorage.getItem('formDataBankCard'));
    for (let key in formDataBankCard) {
        formBankCard.elements[key].value = formDataBankCard[key];
    }
}

//Валидация email
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const emailreg = document.querySelector('.emailreg');

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

//Иконка пользователя
function registrationPage() {
    if ((formData.firstame.length == 0) || (formData.lasttame.length == 0) || (formData.emailreg.length == 0) || (formData.password.length == 0)) {
        openRegister();
    } else if ((formData.firstame == 0) || (formData.lasttame.length == 0) || (formData.emailreg.length == 0) || (formData.password.length == 0)) {
        openRegister();
    } else {
        formRegister.setAttribute('action', 'https://rolling-scopes-school.github.io/esrudenko-JSFEPRESCHOOL2023Q2/library/#authorization');
        modalRegister.classList.remove("active");
        wrapRegister.classList.remove("active");
        navOverlay.classList.remove("active");
        closeProfileNoAuth();
    }
}
function authorizationPage() {
    if ((formDataLogin.email.length == 0) || (formDataLogin.psw.length == 0)) {
        openLogin();
    } else if (localStorage.getItem('formData') == null) {
        alert("No information about your registration");
        localStorage.removeItem('formDataLogin');
    } else if ((formDataLogin.email === formData.emailreg) || (formDataLogin.email === localStorage.numberCardProfile)) {
        if (formDataLogin.psw === formData.password) {
            formLogin.setAttribute('action', 'https://rolling-scopes-school.github.io/esrudenko-JSFEPRESCHOOL2023Q2/library/#authorization');
            modalLogin.classList.remove("active");
            wrapLogin.classList.remove("active");
            navOverlay.classList.remove("active");
            closeProfileNoAuth();
            CounterOfVisits();
        }
    }
}

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
buttonBuy.forEach(n => n.addEventListener("click", buyBook));
function buyBook() {
    if (location.href.includes('#authorization')) {
        if (localStorage.getItem('formDataBankCard') == null) {
            this.classList.add("expectation");
            openBuyCard();
        } else {
            this.setAttribute('disabled', '');
            this.textContent = 'Own';
            localStorage.setItem(`${this.id}`, this.textContent);
            OwnBooks();
            location.reload();
        }
    } else { openLogin(); }
}

// Random Number Card
function goRandom() {
    let hexadecimalSystem = "0123456789ABCDEF";
    let randomCardNumber = "";
    while (randomCardNumber.length < 9) {
        randomCardNumber += hexadecimalSystem[Math.floor(Math.random() * hexadecimalSystem.length)];
    }
    numberCardProfile.textContent = `${randomCardNumber}`;
}

//if location.href.includes #authorization
if (location.href.includes('#authorization')) {
    iconProfile.style.display = "none";
    iconAuthorization.style.display = "block";
    firstLetters.textContent = `${(formData.firstame).substr(0, 1).toUpperCase()}` + `${(formData.lasttame).substr(0, 1).toUpperCase()}`;
    iconAuthorization.setAttribute('title', `${formData.firstame}` + " " + `${formData.lasttame}`);
    numberCardProfile.textContent = localStorage.numberCardProfile;
    cardButtonWrapper.style.display = "none";
    profile.style.display = "flex";
    if (localStorage.getItem('numberCardProfile') == null) {
        goRandom()
        localStorage.setItem(`numberCardProfile`, numberCardProfile.textContent);
        localStorage.getItem(`numberCardProfile`);
    }
    OwnBooks();
    if ((typeof formDataBankCard['bankcard'] === "undefined") || (formDataBankCard.bankcard.length < 1) || (typeof formDataBankCard['expirationcode'] === "undefined") || (formDataBankCard.expirationcode.length < 1) || (typeof formDataBankCard['expirationcode2'] === "undefined") || (formDataBankCard.expirationcode2.length < 1) || (typeof formDataBankCard['cvc'] === "undefined") || (formDataBankCard.cvc.length < 1) || (typeof formDataBankCard['cardholdername'] === "undefined") || (formDataBankCard.cardholdername.length < 1) || (typeof formDataBankCard['postalcode'] === "undefined") || (formDataBankCard.postalcode.length < 1) || (typeof formDataBankCard['town'] === "undefined") || (formDataBankCard.town.length < 1)) {
        localStorage.removeItem('formDataBankCard');
    }
}

//Visits Counter
visitsCounter.textContent = localStorage.VisitsCounter;
visitsCardCounter.textContent = localStorage.VisitsCounter;
let count = visitsCounter.textContent;
function CounterOfVisits() {
    visitsCounter.textContent = '2';
    count++;
    visitsCounter.textContent = count;
    localStorage.setItem(`VisitsCounter`, visitsCounter.textContent);
    localStorage.getItem(`VisitsCounter`);
};

//Books Counter
booksCounter.textContent = localStorage.BooksCounter;
booksCardCounter.textContent = localStorage.BooksCounter;
function OwnBooks() {
    let counterB = 0;
    for (let i = 1; i < 17; i++) {
        if (localStorage.getItem('buy-book-' + `${i}`) == 'Own') {
            buttonBuy[i - 1].setAttribute('disabled', '');
            buttonBuy[i - 1].textContent = 'Own';
            counterB = counterB + 1;

            let li = document.createElement('li');
            li.classList.add('rented-book')
            li.appendChild(document.createTextNode(`${(nameBook[i - 1].textContent).replace('By', ',')}`));
            document.querySelector('.rented').appendChild(li);
        }
    }
    localStorage.setItem(`BooksCounter`, counterB);
}

//Copy Number Card
copyText.setAttribute('value', `${localStorage.numberCardProfile}`);
function copyNumberCard() {
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text");
}

//evt.preventDefault()
formRegister.onsubmit = function (evt) {
    if (password.value.length < 8) {
        evt.preventDefault();
        alert("Password should be more than 8 characters");
        openRegister();
    } else if ((isEmailValid(emailreg.value)) == false) {
        evt.preventDefault();
        alert('Email entered incorrectly');
        openRegister();
    } else if ((firstame.value === formData.firstame) && (lasttame.value === formData.lasttame) && (emailreg.value === formData.emailreg) && (password.value === formData.password) && ((localStorage.getItem('BooksCounter') !== null))) {
        evt.preventDefault();
        alert('User is already registered');
        openLogin();
    }
};
formLogin.onsubmit = function (evt) {
    if (((email.value !== formData.emailreg) || (psw.value !== formData.password))) {
        evt.preventDefault();
        alert("No information about your registration");
        openLogin();
    }
};

console.log("Работа сделана для входа одного юзера. По пунктам вроде бы все сделано, но возможно где-то что-то упустила. В разделе Library Cards 'Reader's name': 'Имя + Фамилия'")