// 1. Declaración de un arreglo
// Un arreglo es como una "caja grande" que almacena una lista ordenada de datos.
let notasEstudiante = [9, 8.5, 9.5, 7, 10];
console.log("Arreglo inicial de notas:", notasEstudiante);

// 2. Elementos e Índices
// Los valores dentro del arreglo se llaman elementos (9, 8.5, etc.).
// Cada elemento tiene una posición única llamada índice, que empieza en 0.
//   Índices:    0    1    2    3    4
//   Elementos: [9, 8.5, 9.5, 7, 10]

// Acceder a un elemento por su índice:
// Para obtener el primer elemento (índice 0):
let primeraNota = notasEstudiante[0];
console.log("La primera nota (índice 0) es:", primeraNota); // Debería imprimir 9

// Para obtener el tercer elemento (índice 2):
let terceraNota = notasEstudiante[2];
console.log("La tercera nota (índice 2) es:", terceraNota); // Debería imprimir 9.5

// 3. Propiedad .length
// La propiedad .length nos dice cuántos elementos hay en el arreglo.
let cantidadNotas = notasEstudiante.length;
console.log("Cantidad total de notas en el arreglo:", cantidadNotas); // Debería imprimir 5

// Acceder al último elemento usando .length:
// El último índice siempre es length - 1.
let ultimaNota = notasEstudiante[notasEstudiante.length - 1];
console.log("La última nota (usando length - 1) es:", ultimaNota); // Debería imprimir 10

// 4. Combinación de tipos de datos (no recomendado como buena práctica)
// JavaScript permite esto, pero es mejor mantener los tipos consistentes.
let datosMixtos = [8, "aprobado", true, 9.2];
console.log("\nArreglo con datos mixtos (no es buena práctica):", datosMixtos);
console.log("Primer elemento del arreglo mixto:", datosMixtos[0]); // Imprime 8
console.log("Segundo elemento del arreglo mixto:", datosMixtos[1]); // Imprime "aprobado"
console.log("Último elemento del arreglo mixto:", datosMixtos[datosMixtos.length - 1]); // Imprime 9.2