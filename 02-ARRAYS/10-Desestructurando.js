// Arreglo unificado que contiene nombres de alumnos y sus notas
const arregloUnificado = [
  ['Ana', 'Juan', 'Pedro', 'Lucas'], // Lista de alumnos
  [9, 7, 6, 8.5],                    // Lista de notas
  ['Matemáticas', 'Historia']        // Otras materias (resto)
];

// 1. Desestructuración básica: extrayendo los primeros elementos
// Usamos corchetes [] para indicar que estamos desestructurando un arreglo.
// 'nombresAlumnos' tomará el primer elemento del arregloUnificado.
// 'calificaciones' tomará el segundo elemento del arregloUnificado.
const [nombresAlumnos, calificaciones] = arregloUnificado;

console.log("--- Desestructuración Básica ---");
console.log("Nombres de Alumnos:", nombresAlumnos); // ['Ana', 'Juan', 'Pedro', 'Lucas']
console.log("Calificaciones:", calificaciones);     // [9, 7, 6, 8.5]
console.log("--------------------------------\n");


// 2. Desestructuración con el operador 'resto' (...):
// 'listaAlumnos' tomará el primer elemento.
// 'listaNotas' tomará el segundo elemento.
// 'restoDeDatos' tomará todos los elementos restantes del arregloUnificado
// en un nuevo arreglo.
const [listaAlumnos, listaNotas, ...restoDeDatos] = arregloUnificado;

console.log("--- Desestructuración con 'resto' ---");
console.log("Lista de Alumnos:", listaAlumnos);     // ['Ana', 'Juan', 'Pedro', 'Lucas']
console.log("Lista de Notas:", listaNotas);         // [9, 7, 6, 8.5]
console.log("Resto de Datos:", restoDeDatos);       // [['Matemáticas', 'Historia']]
console.log("-----------------------------------\n");


// 3. Aplicación práctica: Mejorando la legibilidad del código
// Supongamos que queremos encontrar la nota de un alumno específico.

const nombreBuscado = 'Lucas';

// Primero, verificamos si el alumno está en la lista desestructurada
if (listaAlumnos.includes(nombreBuscado)) {
  // Obtenemos la posición del alumno en la lista desestructurada
  const posicionAlumno = listaAlumnos.indexOf(nombreBuscado);

  // Usamos la lista de notas desestructurada para obtener la calificación
  const notaFinal = listaNotas[posicionAlumno];

  console.log(`La nota final de ${nombreBuscado} es: ${notaFinal}`);
} else {
  console.log(`El alumno ${nombreBuscado} no se encontró en la lista.`);
}