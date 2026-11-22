# Matriz de casos de prueba

**Función:** `calcularTotal(precio, cantidad, descuento)` en `src/compra.js`.

Los casos se diseñaron a partir de la especificación. Se ejecutaron 16 pruebas
iniciales sobre el código original; los resultados están en
[`../evidencias/pruebas-iniciales.txt`](../evidencias/pruebas-iniciales.txt).
CP-17 está pendiente de aclaración. CP-18 se midió por separado; ver
[`reporte-pruebas.md`](./reporte-pruebas.md).

| ID | Requisito | Técnica | Datos: precio, cantidad, descuento | Resultado esperado | Prioridad | Estado |
|---|---|---|---|---|---|---|
| CP-01 | RF-01, RF-02, RF-03 | Datos válidos | `100, 2, 10` | Total `180.00`. | Alta | Pasa regresión |
| CP-02 | RF-02, RF-03 | Descuento mínimo: 0 % | `100, 2, 0` | Total `200.00`. | Alta | Pasa regresión |
| CP-03 | RF-02, RF-03 | Descuento máximo: 100 % | `100, 2, 100` | Total `0.00`. | Alta | Pasa regresión |
| CP-04 | RF-04 | Descuento menor que 0 % | `100, 2, -0.01` | Lanza `RangeError`. | Alta | Pasa regresión |
| CP-05 | RF-04 | Descuento mayor que 100 % | `100, 2, 100.01` | Lanza `RangeError`. | Alta | Pasa regresión |
| CP-06 | RF-04 | Precio negativo | `-1, 2, 10` | Lanza `RangeError`. | Alta | Pasa regresión |
| CP-07 | RF-04 | Cantidad igual a cero | `100, 0, 10` | Lanza `RangeError`. | Alta | Pasa regresión |
| CP-08 | RF-04 | Cantidad negativa | `100, -1, 10` | Lanza `RangeError`. | Alta | Pasa regresión |
| CP-09 | RF-05 | Precio no numérico | `"100", 2, 10` | Lanza `TypeError`. | Alta | Pasa regresión |
| CP-10 | RF-05 | Cantidad no numérica | `100, "2", 10` | Lanza `TypeError`. | Alta | Pasa regresión |
| CP-11 | RF-05 | Descuento no numérico | `100, 2, "10"` | Lanza `TypeError`. | Alta | Pasa regresión |
| CP-12 | RF-05 | Precio infinito | `Infinity, 2, 10` | Lanza `TypeError`. | Alta | Pasa regresión |
| CP-13 | RF-05 | Cantidad infinita | `100, Infinity, 10` | Lanza `TypeError`. | Alta | Pasa regresión |
| CP-14 | RF-05 | Descuento `NaN` | `100, 2, NaN` | Lanza `TypeError`. | Alta | Pasa regresión |
| CP-15 | RF-03 | Revisar decimales | `19.99, 3, 10` | Total redondeado a dos decimales: `53.97`. | Media | Pasa regresión |
| CP-16 | RF-01, RF-03 | Cantidad positiva con decimales | `10, 1.5, 0` | Total `15.00`. | Media | Pasa regresión |
| CP-17 | RF-01, RF-04 | Revisar precio cero | `0, 2, 10` | Confirmar el resultado: la especificación pide números positivos y menciona error para precio negativo, pero no aclara el precio cero. | Media | Pendiente |
| CP-18 | RNF-01 | Medición sencilla | `100, 2, 10`; 100 llamadas de calentamiento y 1.000 medidas | Registrar tiempos total y promedio; RNF-01 no especifica un tiempo máximo. | Baja | Medido; sin umbral |

## Cobertura

- Particiones válidas: CP-01 a CP-03 y CP-16.
- Particiones inválidas (datos fuera de rango o de tipo incorrecto): CP-04 a CP-14.
- Valores límite: CP-02 a CP-08 y CP-17.
- Decimales: CP-15 y CP-16.
- Rendimiento: CP-18; medición exploratoria documentada en `reporte-pruebas.md`.
