// NAV HAMBURGUESA
const header = document.querySelector(".header");
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const overlay = document.querySelector("#overlay");
const links = document.querySelectorAll(".nav-list a");

function toggleMenu() {
  nav.classList.toggle("visible");
  header.classList.toggle("menu-abierto");
  overlay.classList.toggle("visible");
  abrir.classList.toggle("active");
  
  const isOpen = nav.classList.contains("visible");
  abrir.setAttribute("aria-expanded", isOpen);
  abrir.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  overlay.setAttribute("aria-hidden", !isOpen);
}

abrir.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

links.forEach(link => link.addEventListener("click", toggleMenu));

// HEADER SCROLL EFECTO
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});