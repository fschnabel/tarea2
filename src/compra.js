
function calcularTotal(precio, cantidad, descuento) {
  if (precio < 0 || cantidad <= 0 || descuento < 0) {
    throw new RangeError("Los valores están fuera del rango permitido");
  }

  const subtotal = precio * cantidad;
  const valorDescuento = subtotal * descuento / 100;
  return subtotal - valorDescuento;
}

module.exports = { calcularTotal };
