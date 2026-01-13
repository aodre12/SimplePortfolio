// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("active");
}

// Animate skill bars
document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".skill-progress");
    bars.forEach(bar => {
        bar.classList.add("animate");
    });
});
