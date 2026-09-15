// Archivo: 12-Comparaciones.js

// Definición de variables para los ejemplos
const edad = 39;
const edadMinimaParaCompra = 18;
const edadComoTexto = "39"; // Una edad como cadena de texto
const otraEdad = 25;
const nombre1 = "Ana";
const nombre2 = "ana";
const numeroCero = 0;
const textoCero = "0";

console.log("--- Ejemplos de Operadores de Comparación ---");

// 1. Operador Mayor que (>)
// Comprueba si el valor de la izquierda es estrictamente mayor que el de la derecha.
console.log("¿Edad es mayor que edadMinimaParaCompra?", edad > edadMinimaParaCompra); // true (39 es mayor que 18)
console.log("¿OtraEdad es mayor que edad?", otraEdad > edad); // false (25 no es mayor que 39)

// 2. Operador Menor que (<)
// Comprueba si el valor de la izquierda es estrictamente menor que el de la derecha.
console.log("¿EdadMinimaParaCompra es menor que edad?", edadMinimaParaCompra < edad); // true (18 es menor que 39)
console.log("¿Edad es menor que otraEdad?", edad < otraEdad); // false (39 no es menor que 25)

// 3. Operador Mayor o Igual que (>=)
// Comprueba si el valor de la izquierda es mayor o igual que el de la derecha.
console.log("¿Edad es mayor o igual que edadMinimaParaCompra?", edad >= edadMinimaParaCompra); // true (39 es mayor que 18)
console.log("¿Edad es mayor o igual que 39?", edad >= 39); // true (39 es igual a 39)

// 4. Operador Menor o Igual que (<=)
// Comprueba si el valor de la izquierda es menor o igual que el de la derecha.
console.log("¿EdadMinimaParaCompra es menor o igual que edad?", edadMinimaParaCompra <= edad); // true (18 es menor que 39)
console.log("¿Edad es menor o igual que 39?", edad <= 39); // true (39 es igual a 39)
console.log("¿OtraEdad es menor o igual que edadMinimaParaCompra?", otraEdad <= edadMinimaParaCompra); // false (25 no es menor o igual que 18)

// 5. Operador de Igualdad Implícita (==) - Compara solo el valor, intentando convertir tipos
// JavaScript intenta convertir los tipos de datos para hacer la comparación.
console.log("¿Edad es igual a edadMinimaParaCompra (==)?", edad == edadMinimaParaCompra); // false (39 no es igual a 18)
console.log("¿Edad es igual a edadComoTexto (==)?", edad == edadComoTexto); // true (39 es igual a "39" después de que "39" se convierte a número)
console.log("¿NumeroCero es igual a TextoCero (==)?", numeroCero == textoCero); // true (0 es igual a "0" después de que "0" se convierte a número)

// 6. Operador de Desigualdad Implícita (!=) - Compara solo el valor, intentando convertir tipos
// Comprueba si los valores son diferentes, intentando convertir tipos.
console.log("¿Edad es diferente de edadMinimaParaCompra (!=)?", edad != edadMinimaParaCompra); // true (39 es diferente de 18)
console.log("¿Edad es diferente de edadComoTexto (!=)?", edad != edadComoTexto); // false (39 NO es diferente de "39" después de la conversión)

// 7. Operador de Igualdad Explícita (===) - Compara valor Y tipo de dato
// JavaScript NO convierte los tipos de datos. Tanto el valor como el tipo deben ser idénticos.
console.log("¿Edad es igual a edadMinimaParaCompra (===)?", edad === edadMinimaParaCompra); // false (39 no es igual a 18)
console.log("¿Edad es igual a edadComoTexto (===)?", edad === edadComoTexto); // false (39 es un número, "39" es una cadena. Tipos diferentes)
console.log("¿NumeroCero es igual a TextoCero (===)?", numeroCero === textoCero); // false (0 es un número, "0" es una cadena. Tipos diferentes)
console.log("¿Edad es igual a 39 (===)?", edad === 39); // true (39 es un número, 39 es un número. Valores y tipos iguales)

// 8. Operador de Desigualdad Explícita (!==) - Compara valor Y tipo de dato
// Comprueba si los valores O los tipos de datos son diferentes.
console.log("¿Edad es diferente de edadMinimaParaCompra (!==)?", edad !== edadMinimaParaCompra); // true (39 es diferente de 18)
console.log("¿Edad es diferente de edadComoTexto (!==)?", edad !== edadComoTexto); // true (39 es un número, "39" es una cadena. Tipos diferentes)
console.log("¿NumeroCero es diferente de TextoCero (!==)?", numeroCero !== textoCero); // true (0 es un número, "0" es una cadena. Tipos diferentes)
console.log("¿Edad es diferente de 39 (!==)?", edad !== 39); // false (39 NO es diferente de 39. Valores y tipos iguales)

// Ejemplos con strings (cadenas de texto)
console.log("--- Ejemplos con Cadenas de Texto ---");
console.log("¿'Hola' es igual a 'Hola' (===)?", "Hola" === "Hola"); // true
console.log("¿'Hola' es igual a 'hola' (===)?", "Hola" === "hola"); // false (JavaScript es sensible a mayúsculas y minúsculas)
console.log("¿Nombre1 es igual a Nombre2 (===)?", nombre1 === nombre2); // false ("Ana" no es igual a "ana")
console.log("¿Nombre1 es diferente de Nombre2 (!==)?", nombre1 !== nombre2); // true ("Ana" es diferente de "ana")

// Uso de typeof para verificar tipos de datos, como se mencionó en la clase
console.log("--- Verificando Tipos de Datos con typeof ---");
console.log("Tipo de dato de 'edad':", typeof edad); // number
console.log("Tipo de dato de 'edadComoTexto':", typeof edadComoTexto); // string
console.log("Tipo de dato de 'true':", typeof true); // boolean
console.log("Tipo de dato de 'nombre1':", typeof nombre1); // string