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

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const menuIcon = document.querySelector(".menu-icon");
  navLinks.classList.toggle("active");
  menuIcon.textContent = navLinks.classList.contains("active") ? "✖" : "☰";
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    const navLinks = document.querySelector(".nav-links");
    const menuIcon = document.querySelector(".menu-icon");
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      menuIcon.textContent = "☰";
    }
  });
});
