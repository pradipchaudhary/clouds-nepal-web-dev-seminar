const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

let currentIndex = 1; // Start with the second item as active

// Function to update the active slide
function updateActiveSlide() {
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    });

    // Center the active slide
    const offset = -(currentIndex - 1) * (slides[0].clientHeight + 20); // Include margin
    slider.style.transform = `translateY(${offset}px)`;
}

// Handle scroll events
slider.addEventListener("wheel", (event) => {
    if (event.deltaY > 0 && currentIndex < slides.length - 1) {
        currentIndex++;
    } else if (event.deltaY < 0 && currentIndex > 0) {
        currentIndex--;
    }
    updateActiveSlide();
});

// Add support for touch devices
let startY = 0;
slider.addEventListener("touchstart", (e) => {
    startY = e.touches[0].clientY;
});

slider.addEventListener("touchmove", (e) => {
    const distance = e.touches[0].clientY - startY;
    if (distance < -50 && currentIndex < slides.length - 1) {
        currentIndex++;
        updateActiveSlide();
        startY = e.touches[0].clientY;
    } else if (distance > 50 && currentIndex > 0) {
        currentIndex--;
        updateActiveSlide();
        startY = e.touches[0].clientY;
    }
});

// Initialize the active slide
updateActiveSlide();
