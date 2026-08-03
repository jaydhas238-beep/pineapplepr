
// ================================
// Mobile Menu Toggle
// ================================

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    document.body.style.overflow = "hidden";
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "auto";
});

// Close menu when clicking a link
document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "auto";
    });
});

const serviceBtn = document.querySelector(".mobile-dropdown-btn");
const serviceDropdown = document.querySelector(".mobile-dropdown");

serviceBtn.addEventListener("click", () => {
    serviceDropdown.classList.toggle("active");
});
