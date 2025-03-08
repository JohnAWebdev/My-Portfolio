// Get elements
const heroText = document.querySelector('#hero h2');
const heroPara = document.querySelector('#hero p');
const contentHeading = document.querySelector('#content h2');

// Scroll event to trigger animations
window.addEventListener('scroll', () => {
    // Get the scroll position
    const scrollPosition = window.scrollY;

    // Fade in hero content as you scroll
    if (scrollPosition > 100) {
        heroText.style.opacity = 1;
    }

    if (scrollPosition > 150) {
        heroPara.style.opacity = 1;
    }

    // Fade in content section as you scroll
    if (scrollPosition > 300) {
        contentHeading.style.opacity = 1;
    }
});
