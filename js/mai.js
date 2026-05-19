const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo");
const logolight = document.querySelector(".logo-light");
const mMenuToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");

const lightModeOn = (event) => {
  navbar.classList.add("navbar-light");
  logo.style.display = "block";
  logolight.style.display = "none";
};

const lightModeOff = (event) => {
  navbar.classList.remove("navbar-light");
  logo.style.display = "none";
  logolight.style.display = "block";
};

const openMenu = (event) => {
  mMenuToggle.classList.add("close-menu");
  menu.classList.add("is-open");
  document.body.style.overflow = "hidden";
  lightModeOn();
};

const closeMenu = (event) => {
  mMenuToggle.classList.remove("close-menu");
  menu.classList.remove("is-open");
  document.body.style.overflow = "";
  lightModeOff();
};

window.addEventListener("scroll", () => {
  this.scrollY > 1 ? lightModeOn() : lightModeOff();
});

mMenuToggle.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.contains("is-open") ? closeMenu() : openMenu();
});


