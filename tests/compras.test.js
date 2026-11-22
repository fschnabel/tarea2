const { calcularTotal } = require("../src/compra");

describe("calcularTotal - primer grupo", () => {
  test.each([
    ["CP-04: descuento negativo", 100, 2, -0.01],
    ["CP-06: precio negativo", -1, 2, 10],
    ["CP-07: cantidad cero", 100, 0, 10],
    ["CP-08: cantidad negativa", 100, -1, 10],
  ])("%s lanza RangeError", (_caso, precio, cantidad, descuento) => {
    expect(() => calcularTotal(precio, cantidad, descuento)).toThrow(RangeError);
  });
});
