const { calcularTotal } = require("../src/compra");

describe("calcularTotal", () => {
  test("CP-01: calcula el total con un descuento normal", () => {
    expect(calcularTotal(100, 2, 10)).toBe(180);
  });

  test("CP-02: calcula el total sin descuento", () => {
    expect(calcularTotal(100, 2, 0)).toBe(200);
  });

  test("CP-03: el total es cero con 100 % de descuento", () => {
    expect(calcularTotal(100, 2, 100)).toBe(0);
  });

  test("CP-15: devuelve el total con dos decimales", () => {
    expect(calcularTotal(19.99, 3, 10)).toBe(53.97);
  });

  test("CP-16: acepta una cantidad positiva decimal", () => {
    expect(calcularTotal(10, 1.5, 0)).toBe(15);
  });

  test.each([
    ["CP-06: precio negativo", -1, 2, 10],
    ["CP-07: cantidad cero", 100, 0, 10],
    ["CP-08: cantidad negativa", 100, -1, 10],
    ["CP-04: descuento negativo", 100, 2, -0.01],
    ["CP-05: descuento mayor que 100", 100, 2, 100.01],
  ])(
    "%s lanza RangeError",
    (_caso, precio, cantidad, descuento) => {
      expect(() => calcularTotal(precio, cantidad, descuento)).toThrow(RangeError);
    },
  );

  test.each([
    ["CP-09: precio no numérico", "100", 2, 10],
    ["CP-10: cantidad no numérica", 100, "2", 10],
    ["CP-11: descuento no numérico", 100, 2, "10"],
  ])(
    "%s lanza TypeError",
    (_caso, precio, cantidad, descuento) => {
      expect(() => calcularTotal(precio, cantidad, descuento)).toThrow(TypeError);
    },
  );

  test.each([
    ["CP-12: precio infinito", Infinity, 2, 10],
    ["CP-13: cantidad infinita", 100, Infinity, 10],
    ["CP-14: descuento NaN", 100, 2, NaN],
  ])(
    "%s lanza TypeError",
    (_caso, precio, cantidad, descuento) => {
      expect(() => calcularTotal(precio, cantidad, descuento)).toThrow(TypeError);
    },
  );
});
