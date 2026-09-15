// 1. Definimos nuestro arreglo original de estudiantes con nombres no estandarizados.
const estudiantesOriginales = ["ana maría", "PEDRO lópez", "luisa fernanda"];

console.log("Nombres originales:", estudiantesOriginales);

// 2. Usamos el método map() para crear un nuevo arreglo con los nombres corregidos.
// La función de callback recibe cada 'estudiante' y lo convierte a mayúsculas.
const estudiantesCorregidos = estudiantesOriginales.map(estudiante => estudiante.toUpperCase());

console.log("Nombres corregidos (todos en mayúsculas):", estudiantesCorregidos);

// 3. Ejemplo mostrando que map() también puede acceder al índice del elemento.
// Aunque en este caso solo lo mostramos en consola, no lo usamos para la transformación.
const estudiantesConIndice = estudiantesOriginales.map((estudiante, indice) => {
  console.log(`Procesando el estudiante en la posición ${indice}: ${estudiante}`);
  return estudiante.toUpperCase(); // Seguimos retornando el nombre en mayúsculas
});

console.log("Nombres corregidos (con índice mostrado en consola):", estudiantesConIndice);

// Observa que el arreglo original no ha cambiado:
console.log("El arreglo original sigue siendo:", estudiantesOriginales);