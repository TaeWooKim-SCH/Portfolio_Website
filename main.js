'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    }
    else {
        navbar.classList.remove('navbar--dark');
    }
})


// navbar button click move
const btn_home = document.querySelector('#btn_home');
// btn_home.addEventListener('click', () => {
//     window.scrollTo(0, 0);
//     // btn_home.style.transition = "red";
// })


const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener('click', (e) => {
    const target = e.target;
    const link = target.dataset.link;
    if (link === undefined) {
        return;
    }
    console.log(target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: 'smooth'});
})