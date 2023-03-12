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
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener('click', (e) => {
    const target = e.target;
    const link = target.dataset.link;
    if (link === undefined) {
        return;
    }
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: 'smooth'});
})

// 반응형일 때 넷바 조작
const toggle_btn = document.querySelector(".navbar__toggle-btn");
let clicked = false;
toggle_btn.addEventListener('click', () => {
    if (clicked === false) {
        document.querySelector('.navbar__menu').style.display = 'block';
        document.querySelector('#navbar').style.height = '400px';
        clicked = true;
    }
    else {
        document.querySelector('.navbar__menu').style.display = 'none';
        document.querySelector('#navbar').style.height = '70px';
        clicked = false;
    }
})
