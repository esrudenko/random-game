let hamburger = document.querySelector(".hamburger");
let navigation = document.querySelector(".navigation");
const navigationItem = document.querySelectorAll(".navigation__item");
let navOverlay = document.querySelector(".hamburger-overlay");
let cardNumber = document.querySelector('.card-number');
let cardName = document.querySelector('.card-name');

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




function inputCard(e) {
    this.value = this.value.replace(/[^\w\d\s-]/g, '')
};

cardNumber.addEventListener('input', inputCard);
cardName.addEventListener('input', inputCard);