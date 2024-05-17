// JavaScript para la galería de productos

// Función para mostrar un mensaje cuando se hace clic en una tarjeta
function mostrarMensaje() {
    alert("¡Has hecho clic en un producto!");
  }
  
  // Asignar la función mostrarMensaje a todas las tarjetas
  var cards = document.querySelectorAll('.card');
  cards.forEach(function(card) {
    card.addEventListener('click', mostrarMensaje);
  });
  