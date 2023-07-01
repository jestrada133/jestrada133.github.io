const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Toggle dark mode
const body = document.querySelector('body');
hamburger.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});