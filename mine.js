const menuBtn = document.querySelector(".menu__btn");
const menuMobile = document.querySelector(".menu__list");
const body = document.querySelector("body");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu--open");
  menuBtn.classList.toggle("open");
  body.classList.toggle("lock");
});
