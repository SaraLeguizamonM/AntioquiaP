// Scroll suave
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Carrusel
let currentSlide = 0;
function nextSlide() {
  const items = document.querySelectorAll(".carousel-item");
  items[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % items.length;
  items[currentSlide].classList.add("active");
}

// Comentarios
function agregarComentario() {
  const nuevoComentario = document.getElementById("nuevoComentario").value;
  if (nuevoComentario.trim() !== "") {
    const div = document.createElement("div");
    div.className = "comentario";
    div.textContent = nuevoComentario;
    document.getElementById("comentarios").appendChild(div);
    document.getElementById("nuevoComentario").value = "";
  }
}

