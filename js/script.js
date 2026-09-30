const mobileMenu = document.querySelector(".mobile-menu");
const menu = document.querySelector(".menu");

mobileMenu.addEventListener("click", () => {
   document.querySelector(".menu").classList.toggle("show");
});
