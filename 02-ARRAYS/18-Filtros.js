// Explicación y ejemplos del método filter en JavaScript

// El método filter se utiliza para crear un nuevo arreglo
// con todos los elementos que pasan una prueba implementada
// por la función proporcionada.

// No modifica el arreglo original.

// La función de callback que se pasa a filter debe retornar
// un valor booleano (true o false).
// - Si retorna true, el elemento se incluye en el nuevo arreglo.
// - Si retorna false, el elemento se excluye.

// La función de callback puede recibir hasta tres argumentos:
// 1. El elemento actual que se está procesando en el arreglo.
// 2. El índice del elemento actual.
// 3. El arreglo sobre el que se llamó a filter.

// --- Ejemplo 1: Filtrar números mayores que 5 ---

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Arreglo original de números:", numeros);

// Usamos filter para obtener solo los números mayores que 5
const numerosMayoresQueCinco = numeros.filter((numero) => {
  return numero > 5;
});

console.log("Números mayores que 5:", numerosMayoresQueCinco); // Salida: [6, 7, 8, 9, 10]

// --- Ejemplo 2: Filtrar alumnos reprobados (como en la clase) ---

const lstAlumnos = ["José", "María", "Diego", "Julián", "Leonardo", "Ana"];
const listaNotas = [8, 5, 6, 5, 8, 4]; // Notas correspondientes a los alumnos

console.log("\nLista de alumnos:", lstAlumnos);
console.log("Lista de notas:", listaNotas);

// La nota mínima aprobatoria es 6.
// Filtraremos los alumnos cuya nota sea menor que 6.
const listaAlumnosReprobados = lstAlumnos.filter((alumno, indice) => {
  // Accedemos a la nota del alumno usando el mismo índice
  return listaNotas[indice] < 6;
});

console.log("Alumnos reprobados:", listaAlumnosReprobados); // Salida: ["María", "Julián", "Ana"]

// --- Ejemplo 3: Filtrar palabras que contengan una letra específica ---

const palabras = ["manzana", "banana", "cereza", "dátil", "uva"];

console.log("\nLista de palabras:", palabras);

// Filtramos las palabras que contienen la letra 'a'
const palabrasConA = palabras.filter((palabra) => {
  return palabra.includes('a'); // El método includes() verifica si una cadena contiene otra
});

console.log("Palabras que contienen 'a':", palabrasConA); // Salida: ["manzana", "banana", "uva"]

// --- Ejemplo 4: Filtrar objetos por una propiedad ---

const productos = [
  { nombre: "Laptop", precio: 1200, categoria: "Electrónica" },
  { nombre: "Teclado", precio: 75, categoria: "Electrónica" },
  { nombre: "Ratón", precio: 25, categoria: "Electrónica" },
  { nombre: "Camiseta", precio: 30, categoria: "Ropa" },
  { nombre: "Pantalón", precio: 60, categoria: "Ropa" },
];

console.log("\nLista de productos:", productos);

// Filtramos los productos de la categoría "Electrónica"
const productosElectronicos = productos.filter((producto) => {
  return producto.categoria === "Electrónica";
});

console.log("Productos electrónicos:", productosElectronicos);
/* Salida:
[
  { nombre: 'Laptop', precio: 1200, categoria: 'Electrónica' },
  { nombre: 'Teclado', precio: 75, categoria: 'Electrónica' },
  { nombre: 'Ratón', precio: 25, categoria: 'Electrónica' }
]
*/

// También podemos combinar condiciones
const productosBaratosElectronicos = productos.filter((producto) => {
  return producto.categoria === "Electrónica" && producto.precio < 100;
});

console.log("Productos electrónicos baratos (< $100):", productosBaratosElectronicos);
/* Salida:
[
  { nombre: 'Teclado', precio: 75, categoria: 'Electrónica' },
  { nombre: 'Ratón', precio: 25, categoria: 'Electrónica' }
]
*/