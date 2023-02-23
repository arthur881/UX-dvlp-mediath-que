//menu burger

const burgerBtn = document.querySelector('#burgerBtn');
const burgerMenu = document.querySelector('#menuBurger');
const closeBtn = document.querySelector('#closeBtn');

burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {  
    burgerMenu.classList.remove('active');
});