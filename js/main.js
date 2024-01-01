// Typed JS
var typed = new Typed("#typed_animation", {
    strings: ["Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 30,
    backDelay: 500,
    startDelay: 1000,
    loop: true,
});
// Remove Navigation
let xButton = document.querySelector(".navbar-toggler");
let closeNavbar = document.querySelector(".navbar-collapse");
xButton.onclick = function() {
    closeNavbar.classList.toggle("show");
};

let closeButton1 = document.querySelector(".nav-link1");
closeButton1.onclick = function() {
    closeNavbar.classList.toggle("show");
};
let closeButton2 = document.querySelector(".nav-link2");
closeButton2.onclick = function() {
    closeNavbar.classList.toggle("show");
};
let closeButton3 = document.querySelector(".nav-link3");
closeButton3.onclick = function() {
    closeNavbar.classList.toggle("show");
};
let closeButton4 = document.querySelector(".nav-link4");
closeButton4.onclick = function() {
    closeNavbar.classList.toggle("show");
};
let closeButton5 = document.querySelector(".nav-link5");
closeButton5.onclick = function() {
    closeNavbar.classList.toggle("show");
};
let closeButton6 = document.querySelector(".nav-link6");
closeButton6.onclick = function() {
    closeNavbar.classList.toggle("show");
};

// Tooltip
const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);