var miDivs = document.querySelectorAll('.noticia');

miDivs
// Agregar un evento de clic al div
miDiv.addEventListener("click", function() {
    // Redirigir a la URL especificada
    window.location.href = "../php/noticia.php?titulo=" + miDiv.title;
});