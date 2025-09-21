const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider img");

let currentIndex = 0;
const totalSlides = slides.length;

function showNextSlide() {
  currentIndex++;
  if (currentIndex >= totalSlides) {
    currentIndex = 0; // volver a la primera
  }
  const offset = -currentIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

// cambia cada 4 segundos
setInterval(showNextSlide, 4000);
