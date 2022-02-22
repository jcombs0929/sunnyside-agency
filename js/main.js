const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navMenu = document.querySelector(".menu");
const heroText = document.querySelector(".hero-text");
const heroImageDesktop = document.querySelector(".header__bkg--desktop");
const heroImageMobile = document.querySelector(".header__bkg--mobile");

let menu = false;

window.onresize = reportWindowSize;

function reportWindowSize() {
  let width = window.innerWidth;
  if (width >= 768) {
    toggleResponsive();
  } else {
    mobileMenuBtn.style.display = "block";
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

function toggleResponsive() {
  mobileMenuBtn.style.display = "none";
  // heroImageMobile.style.display = "none";
  // heroImageDesktop.style.display = "block";

  // navMenu.style.display = "inline-block";
}
