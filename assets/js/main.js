// Navigation Variables
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// Open Navigation
if (navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// Close Navigation
if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// Close Navigation When Nav Element Pressed
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Skills Variables

// Skills Open
