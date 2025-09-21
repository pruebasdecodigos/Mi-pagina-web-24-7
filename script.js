// SLIDER
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider img");

let currentIndex = 0;
const totalSlides = slides.length;

function showNextSlide() {
  currentIndex++;
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  const offset = -currentIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextSlide, 4000);

// MENU HAMBURGUESA
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});
