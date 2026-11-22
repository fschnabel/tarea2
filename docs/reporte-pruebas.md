# Reporte de pruebas

## Resultados

Se probaron 16 casos con Jest:

- **Pruebas iniciales:** 4 pasaron y 12 fallaron.
- **Regresión final:** pasaron los 16 casos.

El detalle está en [pruebas iniciales](../evidencias/pruebas-iniciales.txt) y
[pruebas finales](../evidencias/pruebas-finales.txt).

## Entorno y rendimiento

- Windows 11 Home de 64 bits.
- Procesador Intel Core i7.
- Node.js v22.18.0, npm 11.5.2 y Jest.
- Se probaron 1.000 llamadas a `calcularTotal(100, 2, 10)`, después de 100
  llamadas de calentamiento.
- Tiempo total: **0,6153 ms**. Promedio: **0,0006153 ms por llamada**.
- Los bloques de 100 llamadas tardaron entre 0,0200 ms y 0,3374 ms.

Esta medición es solo una prueba exploratoria en una computadora. La
especificación no indica un tiempo máximo, así que no permite declarar que el
rendimiento cumple un objetivo.

## Defectos corregidos

| ID | Defecto | Severidad | Resultado |
|---|---|---|---|
| DEF-01 | No se rechazaban algunos valores fuera de rango. | Alta | Corregido; CP-04 y CP-06 a CP-08 pasan. |
| DEF-02 | Se aceptaba un descuento mayor que 100 %. | Alta | Corregido; CP-05 pasa. |
| DEF-03 | Se aceptaban entradas que no eran números. | Alta | Corregido; CP-09 a CP-11 pasan. |
| DEF-04 | No se rechazaban valores como `Infinity` y `NaN`. | Alta | Corregido; CP-12 a CP-14 pasan. |
| DEF-05 | El total no se redondeaba a dos decimales. | Media | Corregido; CP-15 pasa. |

El detalle de cada defecto está en
[defectos confirmados](../evidencias/defectos-confirmados.md).

## Cobertura de requisitos

| Requisito | Casos | Resultado |
|---|---|---|
| RF-01: multiplicar precio por cantidad | CP-01, CP-16 | Pasa. |
| RF-02: aceptar descuentos de 0 % a 100 % | CP-02 a CP-05 | Pasa. |
| RF-03: total con dos decimales; con 100 % el total es cero | CP-01 a CP-03, CP-15, CP-16 | Pasa en los datos probados. |
| RF-04: lanzar `RangeError` para valores fuera de rango | CP-04 a CP-08 | Pasa. |
| RF-05: lanzar `TypeError` para entradas inválidas | CP-09 a CP-14 | Pasa. |
| RNF-01: explorar el rendimiento | CP-18 | Medido; falta un tiempo máximo para evaluar cumplimiento. |

## Riesgos pendientes

- **Precio cero:** falta aclarar si debe aceptarse o producir `RangeError`
  (CP-17).
- **Rendimiento:** falta definir un tiempo máximo y una carga de prueba.
- **Redondeo:** solo se probó un ejemplo decimal; faltan casos para otros
  valores de redondeo.
- **Valores muy grandes:** dos entradas finitas podrían producir un subtotal
  infinito al multiplicarse.
- Las pruebas cubren la función de cálculo, no una interfaz ni otros
  componentes.
