const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const heroText = document.querySelector(".hero-text");
let menu = false;

window.onresize = reportWindowSize;

function reportWindowSize() {
  let width = window.innerWidth;
  //   if (width >= 768) {
  //     toggleMenu();
  //   }
}

function onMenuToggle() {
  menu = !menu;
  if (!menu) {
    mobileMenu.style.display = "none";
    heroText.style.display = "block";
  } else {
    mobileMenu.style.display = "block";
    heroText.style.display = "none";
  }
}
