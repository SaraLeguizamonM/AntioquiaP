// Botón "Descubre Más"
document.getElementById("discoverBtn").addEventListener("click", () => {
  document.getElementById("orgullo").scrollIntoView({ behavior: "smooth" });
});

// Carrusel automático
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((s, i) => {
    s.classList.remove("active");
    if (i === index) s.classList.add("active");
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 4000);

// Historias tipo comentarios
document.getElementById("historiaForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("historiaInput");
  if (input.value.trim() !== "") {
    const newHistoria = document.createElement("div");
    newHistoria.classList.add("historia");
    newHistoria.textContent = input.value;
    document.getElementById("historiaList").appendChild(newHistoria);
    input.value = "";
  }
});

