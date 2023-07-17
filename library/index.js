let cardNumber = document.querySelector('.card-number');
let cardName = document.querySelector('.card-name');

function inputCard(e) {
    this.value = this.value.replace(/[^\w\d\s-]/g, '')
};

cardNumber.addEventListener('input', inputCard);
cardName.addEventListener('input', inputCard);