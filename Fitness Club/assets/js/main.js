// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    themeIcon.classList.toggle("fa-moon");
    themeIcon.classList.toggle("fa-sun");
});

// Mobile menu functionality
const mobileMenuBtn = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
