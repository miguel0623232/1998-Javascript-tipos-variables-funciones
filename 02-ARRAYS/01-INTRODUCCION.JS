// --- Ejemplo inicial: Usando variables separadas (lo que queremos mejorar) ---
console.log("--- Usando variables separadas ---");
const nota1 = 9;
const nota2 = 8.5;
const nota3 = 6;
const nota4 = 9.5;

const mediaVariables = (nota1 + nota2 + nota3 + nota4) / 4;
console.log("La media con variables separadas es:", mediaVariables);
console.log("\n"); // Salto de línea para mejor visualización

// --- Introducción a los arreglos (la solución mejorada) ---
console.log("--- Usando arreglos ---");

// Declaración de un arreglo de notas
// Es como una lista donde guardamos todas las notas juntas
const notas = [9, 8.5, 6, 9.5];
console.log("Nuestro arreglo de notas es:", notas);

// Accediendo a elementos del arreglo por su índice
// Recuerda que el primer elemento está en la posición 0
console.log("La primera nota (índice 0) es:", notas[0]); // Accede al 9
console.log("La segunda nota (índice 1) es:", notas[1]); // Accede al 8.5
console.log("La cuarta nota (índice 3) es:", notas[3]); // Accede al 9.5

// Obteniendo la longitud del arreglo con .length
// Esto nos dice cuántos elementos hay en nuestra lista
const cantidadDeNotas = notas.length;
console.log("Cantidad de notas en el arreglo:", cantidadDeNotas);

// Calculando la media usando el arreglo y .length
// Ahora es más fácil de mantener, incluso si agregamos o quitamos notas
const mediaArreglo = (notas[0] + notas[1] + notas[2] + notas[3]) / cantidadDeNotas;
console.log("La media con el arreglo es:", mediaArreglo);