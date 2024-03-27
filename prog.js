const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.style.boxShadow = "0px 5px 5px rgba(0, 0, 0, 0.4)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// /////////////////////////////======slider======//////////////////////////////////////

const slides = document.querySelector(".slides");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

let currentIndex = 0;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.children.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex =
    (currentIndex - 1 + slides.children.length) % slides.children.length;
  showSlide(currentIndex);
}

leftArrow.addEventListener("click", prevSlide);
rightArrow.addEventListener("click", nextSlide);

// Automatically change slide every 4 seconds
setInterval(nextSlide, 4000);

