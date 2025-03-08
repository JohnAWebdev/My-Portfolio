document.addEventListener("DOMContentLoaded", function () {
    const fadeSections = document.querySelectorAll(".fade-in");

    function showSections() {
        fadeSections.forEach((section) => {
            const sectionPos = section.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.2;

            if (sectionPos < screenPos) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", showSections);
    showSections(); // Run once in case elements are already visible
});