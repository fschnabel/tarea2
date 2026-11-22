# Plan de pruebas

## Alcance

El objetivo es probar la función `calcularTotal(precio, cantidad, descuento)`
del archivo `src/compra.js`.

Se comprobará que:

- El subtotal se calcula multiplicando el precio por la cantidad (RF-01).
- El descuento puede ser de 0 % a 100 %, inclusive (RF-02).
- El total se redondea a dos decimales. Con 100 % de descuento, el total es
  cero (RF-03).
- Los valores fuera de rango producen `RangeError` (RF-04).
- Los datos que no son números o no son finitos producen `TypeError` (RF-05).
- Se hacen algunas mediciones sencillas de rendimiento (RNF-01).

La función se prueba directamente. No usa base de datos, servicios externos ni
interfaz gráfica, por lo que no se necesitan pruebas de integración o de
navegador.

## Riesgos

| Riesgo | Qué puede pasar |
|---|---|
| No revisar el rango del descuento | El total puede ser incorrecto o negativo. |
| Aceptar datos de tipo incorrecto | El resultado puede ser `NaN` o inesperado. |
| No redondear a dos decimales | El total puede mostrar fracciones de centavo. |
| No definir un tiempo límite para RNF-01 | Las mediciones no permiten decidir si el rendimiento es suficiente. |

## Tipos y niveles de pruebas

- **Pruebas unitarias:** revisar el resultado de la función con distintos datos.
- **Particiones:** probar datos válidos e inválidos para precio, cantidad y
  descuento.
- **Valores límite:** probar descuento de 0 %, 100 % y valores justo fuera de
  esos límites; también cantidad cero.
- **Pruebas de excepciones:** comprobar si se produce `RangeError` o
  `TypeError`, según la especificación.
- **Pruebas de rendimiento:** medir varias llamadas y anotar cuánto tardan.

## Ambiente

- Usar Node.js y ejecutar desde la carpeta de tarea 2.
- Registrar la versión de Node.js.
- No se necesita conexión a internet, base de datos ni Docker.
- Las pruebas automatizadas usan Jest y se ejecutan con `npm test`.
- Para RNF-01, calentar con 100 llamadas y medir 10 bloques de 100 llamadas
  válidas. Anotar el tiempo total, promedio y condiciones del equipo. La
  especificación no indica un tiempo máximo, así que las mediciones son
  informativas. Ver el resultado en [`reporte-pruebas.md`](./reporte-pruebas.md).

## Criterios de entrada

- Tener disponible `src/compra.js` y Node.js.
- Contar con la especificación RF-01 a RF-05 y RNF-01.
- Instalar las dependencias con `npm install` antes de ejecutar `npm test`.

## Criterios de salida

- Cada caso tiene un resultado registrado.
- Se probaron datos válidos, inválidos y los límites.
- Las excepciones y resultados coinciden con la especificación.
- Los resultados monetarios tienen dos decimales y con descuento de 100 % el
  total es cero.
- Se anotaron las mediciones de rendimiento, sin afirmar que cumplen un tiempo
  límite que no está definido.
- No quedan fallos sin revisar.

La matriz de casos está en [`matriz-casos.md`](./matriz-casos.md). Los casos
se ejecutaron inicialmente sobre el código original. El resultado se conserva
en [`../evidencias/pruebas-iniciales.txt`](../evidencias/pruebas-iniciales.txt).

**Nota:** la especificación indica que el precio debe ser positivo y que un
precio negativo produce `RangeError`, pero no aclara qué ocurre con precio
igual a cero. Ese caso se incluyó en la matriz para confirmarlo.
