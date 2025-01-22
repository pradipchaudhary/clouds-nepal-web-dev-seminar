document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card-item");
    let activeIndex = 0; // Start with the first active card

    const updateActiveCards = () => {
        cards.forEach((card, index) => {
            if (
                index === activeIndex ||
                index === (activeIndex + 1) % cards.length
            ) {
                card.classList.add("active");
            } else {
                card.classList.remove("active");
            }
        });
    };

    // Set initial active cards
    updateActiveCards();

    // Function to move to the next card
    const moveNext = () => {
        activeIndex = (activeIndex + 1) % cards.length; // Move to the next card
        updateActiveCards();
    };

    // Add mouseup event listener
    document.addEventListener("mouseup", moveNext);
});
