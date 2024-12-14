'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 

// Select elements
const navOpenBtn = document.querySelector('[data-nav-open-btn]');
const navCloseBtn = document.querySelector('[data-nav-close-btn]');
const navbar = document.querySelector('[data-navbar]');
const overlay = document.querySelector('[data-overlay]');
const navLinks = document.querySelectorAll('[data-nav-link]');

// Function to open navbar
const openNavbar = () => {
  navbar.classList.add('active');
  overlay.classList.add('active');
};

// Function to close navbar
const closeNavbar = () => {
  navbar.classList.remove('active');
  overlay.classList.remove('active');
};

// Event listeners
navOpenBtn.addEventListener('click', openNavbar);
navCloseBtn.addEventListener('click', closeNavbar);

// Close navbar when clicking a nav link
navLinks.forEach(link => {
  link.addEventListener('click', closeNavbar);
});

// Close navbar when clicking the overlay
overlay.addEventListener('click', closeNavbar);