const cantidadEntradas = document.getElementById('cantidadEntrada');
const botonCalcular = document.getElementById('botonCalcular');
const categoria = document.getElementById('inputState');
const totalCompra = document.getElementById('totalCompra');
const precioEntrada = 200;

function resumen() {
  var cantidad = parseInt(cantidadEntradas.value);
  
  if (isNaN(cantidad) || cantidad <= 0) {
    totalCompra.textContent = "La cantidad de entradas debe ser un número válido y mayor que cero";
    return;
  }

  var total = cantidad * precioEntrada;

  switch (categoria.value) {
    case 'estudiante':
      var descuento = total * 0.8;
      total -= descuento;
      break;

    case 'trainee':
      var descuento = total * 0.5;
      total -= descuento;
      break;

    case 'junior':
      var descuento = total * 0.2;
      total -= descuento;
      break;
  }

  totalCompra.textContent = "Total a pagar: $" + total.toFixed(2);
}

botonCalcular.addEventListener('click', resumen);
