// --- Explicación y Ejemplo del método reduce ---

// 1. Definición de arrays de notas para diferentes secciones
const seccionA = [9, 8, 6, 5, 7, 9];
const seccionB = [4, 9, 2, 9, 7, 6, 9];
const seccionC = [9, 8, 9, 7, 2, 3, 6, 7];

console.log("Notas de la Sección A:", seccionA);
console.log("Notas de la Sección B:", seccionB);
console.log("Notas de la Sección C:", seccionC);
console.log("------------------------------------");

// 2. Uso básico de reduce para sumar elementos de un array
// Queremos sumar todas las notas de la sección A.
// reduce toma una función de callback (valorPrevio, valorActual) => ...
// y un valor inicial (en este caso, 0 para la suma).
const sumaSeccionA = seccionA.reduce((valorPrevio, valorActual) => {
    console.log(`  Iteración: valorPrevio = ${valorPrevio}, valorActual = ${valorActual}`);
    return valorPrevio + valorActual; // Retornamos la suma para la siguiente iteración
}, 0); // El 0 es el valor inicial del acumulador (valorPrevio)

console.log("Suma de notas de la Sección A (usando reduce):", sumaSeccionA);
console.log("------------------------------------");

// 3. Creando una función reutilizable para sumar cualquier array
// Esto nos permite aplicar la misma lógica de suma a diferentes arrays sin repetir código.
const sumarArray = (arr) => {
    return arr.reduce((acumulador, elementoActual) => acumulador + elementoActual, 0);
};

const sumaSeccionB = sumarArray(seccionB);
const sumaSeccionC = sumarArray(seccionC);

console.log("Suma de notas de la Sección B (usando función):", sumaSeccionB);
console.log("Suma de notas de la Sección C (usando función):", sumaSeccionC);
console.log("------------------------------------");

// 4. Calculando la media aritmética de las tres secciones
// Primero, necesitamos la suma total de todas las notas.
const sumaTotalTodasSecciones = sumaSeccionA + sumaSeccionB + sumaSeccionC;

// Segundo, necesitamos el número total de elementos (notas) en todas las secciones.
const totalElementosTodasSecciones = seccionA.length + seccionB.length + seccionC.length;

// Finalmente, calculamos la media.
const mediaAritmetica = sumaTotalTodasSecciones / totalElementosTodasSecciones;

console.log("Suma total de todas las notas:", sumaTotalTodasSecciones);
console.log("Número total de elementos (notas):", totalElementosTodasSecciones);
console.log(`El valor de la media de las tres secciones es: ${mediaAritmetica.toFixed(2)}`);
console.log("------------------------------------");

// 5. Otro ejemplo de reduce: Encontrar el número más grande en un array
const numeros = [10, 5, 20, 15, 30, 25];
const numeroMasGrande = numeros.reduce((maximoActual, valorActual) => {
    return (valorActual > maximoActual) ? valorActual : maximoActual;
}, numeros[0]); // El valor inicial es el primer elemento del array

console.log("Array de números:", numeros);
console.log("El número más grande en el array es:", numeroMasGrande);
console.log("------------------------------------");

// 6. Otro ejemplo de reduce: Concatenar strings en un array
const palabras = ["Hola", "mundo", "desde", "reduce"];
const fraseCompleta = palabras.reduce((fraseAcumulada, palabraActual) => {
    return fraseAcumulada + " " + palabraActual;
}, ""); // El valor inicial es una cadena vacía

console.log("Array de palabras:", palabras);
console.log("Frase completa (usando reduce):", fraseCompleta.trim()); // .trim() para quitar el espacio inicial
console.log("------------------------------------");