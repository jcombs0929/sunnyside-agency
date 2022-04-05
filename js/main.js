const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navMenu = document.querySelector(".menu");
const heroText = document.querySelector(".hero-text");

let menu = false;

window.onresize = reportWindowSize;

function reportWindowSize() {
  let width = window.innerWidth;
  if (width >= 768) {
    mobileMenuBtn.style.display = "none";
    navMenu.style.display = "block";
    heroText.style.display = "block";
  } else {
    mobileMenuBtn.style.display = "block";
    navMenu.style.display = "none";
  }
}

function onMenuToggle() {
  menu = !menu;
  if (!menu) {
    navMenu.style.display = "none";
    heroText.style.display = "block";
  } else {
    navMenu.style.display = "block";
    heroText.style.display = "none";
  }
}
