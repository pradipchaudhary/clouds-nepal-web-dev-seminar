const themeToggle = document.getElementById("theme-toggle");
const mobileMenuBtn = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
const body = document.body;

// Theme toggle functionality
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    themeToggle.querySelector("i").classList.toggle("fa-moon");
    themeToggle.querySelector("i").classList.toggle("fa-sun");
});

// Mobile menu toggle functionality
mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const icon = mobileMenuBtn.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
});

// Close menu on link click
navLinks.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        mobileMenuBtn.querySelector("i").classList.add("fa-bars");
        mobileMenuBtn.querySelector("i").classList.remove("fa-xmark");
    })
);
