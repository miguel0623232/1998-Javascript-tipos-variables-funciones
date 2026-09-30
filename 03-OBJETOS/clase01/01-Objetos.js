// 1. Configuración inicial (simulada en el código)
// Imagina que ya abrimos Visual Studio Code y creamos el archivo objetos.js

// 2. Variables separadas (lo que queremos mejorar)
// Estas constantes representan información de una persona, pero están dispersas.
const nombre = "Harland";
const edad = 27;
const nacionalidad = "mexicana";

console.log("--- Información con variables separadas ---");
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Nacionalidad:", nacionalidad);
console.log("----------------------------------------\n");

// 3. Introducción a los objetos: Agrupando información
// Un objeto nos permite agrupar toda esta información relacionada en una sola estructura.
// Se define con llaves {} y contiene pares de llave-valor.

// Sintaxis básica de un objeto:
// const nombreObjeto = {
//   llave1: valor1,
//   llave2: valor2,
//   llave3: valor3
// };

// 4. Creando nuestro primer objeto 'persona'
// Convertimos las variables separadas en propiedades de un objeto.
// Cada propiedad tiene una 'llave' (como 'nombre', 'edad') y un 'valor' (como "Harland", 27).
const persona = {
  nombre: "Harland", // 'nombre' es la llave, "Harland" es el valor
  edad: 27,          // 'edad' es la llave, 27 es el valor
  nacionalidad: "mexicana" // 'nacionalidad' es la llave, "mexicana" es el valor
};

console.log("--- Información agrupada en un objeto 'persona' ---");
console.log(persona); // Esto mostrará el objeto completo en la consola
console.log("--------------------------------------------------\n");

// 5. Beneficio: Agrupación de datos
// Ahora, 'persona' es un único elemento que representa a Harland,
// en lugar de tener tres constantes separadas.

// En el próximo video, aprenderemos cómo acceder a los valores individuales
// dentro de este objeto (por ejemplo, cómo obtener solo el nombre o la edad).