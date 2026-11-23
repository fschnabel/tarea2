# Defecto confirmado: valores fuera de rango

- **ID:** DEF-01
- **Casos afectados:** CP-04, CP-06, CP-07 y CP-08.
- **Pasos:** probar descuento negativo, precio negativo, cantidad cero y
  cantidad negativa.
- **Esperado:** cada llamada lanza `RangeError`.
- **Real antes del cambio:** las cuatro llamadas no lanzaban excepción.
- **Severidad:** Alta.
- **Evidencia:** [`pruebas-iniciales.txt`](./pruebas-iniciales.txt) contiene la
  corrida inicial; [`pruebas-finales.txt`](./pruebas-finales.txt) contiene la
  verificación de este grupo.
- **Estado:** Corregido; los cuatro casos pasan.

## DEF-02: no se rechaza el descuento superior al máximo

- **Casos afectados:** CP-05.
- **Pasos:** llamar a `calcularTotal(100, 2, 100.01)`.
- **Esperado:** lanza `RangeError`.
- **Real antes del cambio:** no lanzaba excepción.
- **Severidad:** Alta.
- **Evidencia:** [`pruebas-iniciales.txt`](./pruebas-iniciales.txt) y la
  ejecución del grupo 2 en [`pruebas-finales.txt`](./pruebas-finales.txt).
- **Estado:** Corregido; CP-05 pasa.

## DEF-03: no se rechazan entradas de tipo incorrecto

- **Casos afectados:** CP-09, CP-10 y CP-11.
- **Pasos:** llamar a la función pasando texto como precio, cantidad o
  descuento.
- **Esperado:** cada llamada lanza `TypeError`.
- **Real antes del cambio:** las llamadas continuaban sin lanzar `TypeError`.
- **Severidad:** Alta.
- **Evidencia:** [`pruebas-iniciales.txt`](./pruebas-iniciales.txt) y la
  ejecución del grupo 2 en [`pruebas-finales.txt`](./pruebas-finales.txt).
- **Estado:** Corregido; CP-09 a CP-11 pasan.

## DEF-04: no se rechazan valores numéricos no finitos

- **Casos afectados:** CP-12, CP-13 y CP-14.
- **Pasos:** llamar con `Infinity` como precio o cantidad, y con `NaN` como
  descuento.
- **Esperado:** cada llamada lanza `TypeError`.
- **Real antes del cambio:** la función no lanzaba `TypeError`.
- **Severidad:** Alta.
- **Evidencia:** [`pruebas-iniciales.txt`](./pruebas-iniciales.txt) y la
  ejecución del grupo 3 en [`pruebas-finales.txt`](./pruebas-finales.txt).
- **Estado:** Corregido; CP-12 a CP-14 pasan.

## DEF-05: el total no se redondeaba a dos decimales

- **Caso afectado:** CP-15.
- **Pasos:** llamar con precio `19.99`, cantidad `3` y descuento `10`.
- **Esperado:** total `53.97`.
- **Real antes del cambio:** la función devolvía `53.973`.
- **Severidad:** Media.
- **Evidencia:** [`pruebas-iniciales.txt`](./pruebas-iniciales.txt) y la
  ejecución del grupo 3 en [`pruebas-finales.txt`](./pruebas-finales.txt).
- **Estado:** Corregido; CP-15 pasa.
