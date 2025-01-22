const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

let currentIndex = 1;
let isThrottled = false;

// Function to update the active slide
function updateActiveSlide() {
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    });

    // Update the slider's position
    const offset = -(currentIndex - 1) * (slides[0].clientHeight + 100);

    console.log("client height", slides[0].clientHeight);
    console.log("object height", offset);
    slider.style.transform = `translateY(${offset}px)`;
}

function handleScroll(event) {
    event.preventDefault();
    if (isThrottled) return;

    if (event.deltaY > 0 && currentIndex < slides.length - 1) {
        // Scroll down
        console.log("current index", event.deltaY);
        currentIndex++;
        updateActiveSlide();
    } else if (event.deltaY < 1 && currentIndex > 1) {
        // Scroll up
        currentIndex--;
        updateActiveSlide();
    }

    isThrottled = true;
    setTimeout(() => (isThrottled = false), 700);
}

slider.addEventListener("wheel", handleScroll);

updateActiveSlide();
