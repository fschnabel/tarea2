# Defecto confirmado: valores fuera de rango

- **ID:** DEF-01
- **Casos:** CP-04, CP-06, CP-07 y CP-08.
- **Pasos:** llamar a `calcularTotal` con descuento negativo, precio negativo,
  cantidad cero o cantidad negativa.
- **Esperado:** cada llamada lanza `RangeError`.
- **Real antes del cambio:** ninguna llamada lanzaba una excepción.
- **Severidad:** Alta.
- **Evidencia:** ejecución inicial y posterior en
  [`pruebas-finales.txt`](./pruebas-finales.txt).
- **Estado:** Corregido; los cuatro casos pasan.
