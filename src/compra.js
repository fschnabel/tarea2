
function calcularTotal(precio, cantidad, descuento) {
  const entradas = [precio, cantidad, descuento];
  if (entradas.some((valor) => typeof valor !== "number")) {
    throw new TypeError("Las entradas deben ser números");
  }
  if (entradas.some((valor) => !Number.isFinite(valor))) {
    throw new TypeError("Las entradas deben ser números finitos");
  }

  if (precio < 0 || cantidad <= 0 || descuento < 0) {
    throw new RangeError("Los valores están fuera del rango permitido");
  }
  if (descuento > 100) {
    throw new RangeError("El descuento no puede superar el 100 %");
  }

  const subtotal = precio * cantidad;
  const valorDescuento = subtotal * descuento / 100;
  const total = subtotal - valorDescuento;
  return Math.round((total + Number.EPSILON) * 100) / 100;
}

module.exports = { calcularTotal };
