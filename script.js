// Scroll hacia sección
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Carrusel
let slideIndex = 0;
mostrarSlide(slideIndex);

function moverSlide(n) {
  mostrarSlide(slideIndex += n);
}

function mostrarSlide(n) {
  let slides = document.getElementsByClassName("slide");
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex].classList.add("active");
}

// Comentarios dinámicos
function agregarComentario() {
  let nuevoComentario = document.getElementById("nuevoComentario").value;
  if (nuevoComentario.trim() === "") return;
  
  let div = document.createElement("div");
  div.textContent = nuevoComentario;
  document.getElementById("comentarios").appendChild(div);
  document.getElementById("nuevoComentario").value = "";
}
