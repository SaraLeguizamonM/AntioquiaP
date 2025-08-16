// Comentarios
const input = document.getElementById("comentarioInput");
const btn = document.getElementById("agregarComentario");
const contenedor = document.getElementById("comentarios");

btn.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    const nuevoComentario = document.createElement("p");
    nuevoComentario.textContent = input.value;
    contenedor.appendChild(nuevoComentario);
    input.value = "";
  }
});
