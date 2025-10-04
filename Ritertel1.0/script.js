/* ==========================
   CARRUSEL AUTOMÁTICO
========================== */
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");

  // Ocultar todas las imágenes
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Pasar a la siguiente
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Mostrar la imagen actual
  slides[slideIndex - 1].style.display = "block";

  // Cambiar cada 4 segundos (4000ms)
  setTimeout(showSlides, 4000);
}


