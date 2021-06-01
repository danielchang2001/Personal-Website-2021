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
const skillsContent = document.getElementsByClassName('skills__content'),
skillsHeader = document.querySelectorAll('.skills__header')

// Skills Open/Close
function toggleSkills(){
    let itemClass = this.parentNode.className
    // If the parent div of the Skills header we clicked on is closed, we apply the open class tag to the parent div.
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
    // Otherwise, we apply the close class tag to the parent div.
    else if (itemClass === 'skills__content skills__open') {
        this.parentNode.className = 'skills__content skills__close'
    }
}

// Runs toggle function whenever a skills header is clicked.
skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

// Swiper
let swiper = new Swiper('.project__container', {
    cssMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
  });