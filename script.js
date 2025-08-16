// Scroll a "El orgullo de ser antioqueño"
document.getElementById("descubreBtn").addEventListener("click", () => {
  document.getElementById("orgullo").scrollIntoView({ behavior: "smooth" });
});

// Carrusel
let items = document.querySelectorAll(".carousel-item");
let current = 0;

document.querySelector(".next").addEventListener("click", () => {
  items[current].classList.remove("active");
  current = (current + 1) % items.length;
  items[current].classList.add("active");
});

document.querySelector(".prev").addEventListener("click", () => {
  items[current].classList.remove("active");
  current = (current - 1 + items.length) % items.length;
  items[current].classList.add("active");
});

// Historias como comentarios
document.getElementById("publicar").addEventListener("click", () => {
  let texto = document.getElementById("nuevoComentario").value.trim();
  if (texto) {
    let div = document.createElement("div");
    div.textContent = texto;
    document.getElementById("comentarios").appendChild(div);
    document.getElementById("nuevoComentario").value = "";
  }
});
