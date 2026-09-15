// Definimos dos arreglos unidimensionales
const listaAlumnos = ["Daniela", "Lucas", "Álvaro", "Valeria"];
const listaNotas = [9, 8.5, 9.5, 10];

// Unificamos los dos arreglos en un arreglo bidimensional
// listaUnificada ahora contiene dos arreglos como sus elementos
const listaUnificada = [listaAlumnos, listaNotas];

// Mostramos la lista unificada para ver su estructura
console.log("Lista Unificada:", listaUnificada);

// --- Ejemplos de cómo acceder a los elementos ---

// Acceder a un elemento de la lista de alumnos (primer arreglo dentro de listaUnificada)
// Queremos el nombre de Lucas, que está en la posición 1 del arreglo listaAlumnos
// listaUnificada[0] nos da el arreglo listaAlumnos
// [1] nos da el elemento en la posición 1 de listaAlumnos (Lucas)
console.log("Nombre de Lucas (desde listaUnificada):", listaUnificada[0][1]); // Salida: Lucas

// Acceder a un elemento de la lista de notas (segundo arreglo dentro de listaUnificada)
// Queremos la nota de Valeria, que está en la posición 3 del arreglo listaNotas
// listaUnificada[1] nos da el arreglo listaNotas
// [3] nos da el elemento en la posición 3 de listaNotas (10)
console.log("Nota de Valeria (desde listaUnificada):", listaUnificada[1][3]); // Salida: 10

// Otro ejemplo: Acceder al nombre de Daniela y su nota
// Nombre de Daniela: listaUnificada[0][0]
console.log("Nombre de Daniela:", listaUnificada[0][0]); // Salida: Daniela

// Nota de Daniela: listaUnificada[1][0]
console.log("Nota de Daniela:", listaUnificada[1][0]); // Salida: 9