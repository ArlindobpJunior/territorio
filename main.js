// show/hide numeros
const numeroItems = document.querySelectorAll("section.numeros .numero");

numeroItems.forEach((numero) => {
  numero.querySelector(".head").addEventListener("click", () => {
    numero.querySelector(".items").classList.toggle("show-items");
  });
});
