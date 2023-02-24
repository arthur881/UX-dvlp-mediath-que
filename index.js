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


var allInputs = document.querySelectorAll('input');

// Valide input

allInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value == "") {
            if(input.classList.contains('valid')) {
                input.classList.remove('valid');
                input.classList.add('error');
            }
        } else {
            if(input.classList.contains('error')) {
                input.classList.remove('error');
            }
            input.classList.add('valid');
        }
    })
})

var submitButton = document.querySelector('form button');

submitButton.addEventListener('click', (e) => {
    allInputs.forEach(input => {
        if (input.value == "") {
            e.preventDefault();
            input.classList.add('error');
        } else {
            input.classList.add('valid');
        }
    })
})

//modal Newsletter

const modalNewsletter = document.querySelector('#modalNewsLetter');
const closeBtnModal = document.querySelector('#closeNewsLetter');
localStorage.setItem('subscribe', 'false');

if (localStorage.getItem('subscribe') != 'true') {
    window.addEventListener('load', () => {
        setTimeout(() => {
            modalNewsletter.classList.add('active');
        }, 2000);
    });
}

closeBtnModal.addEventListener('click', () => {
    modalNewsletter.classList.remove('active');
});