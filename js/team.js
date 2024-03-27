const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.style.boxShadow = "0px 5px 5px rgba(0, 0, 0, 0.4)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

/*-----------------------------------------------------------------------*/
