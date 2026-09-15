// Nuestro arreglo original de alumnos
const listaCompletaAlumnos = [
  "Lucía", "Pedro", "Ana", "Juan", "Sofía",
  "Carlos", "María", "Diego", "Elena", "Paula",
  "Daniela", "Gabriel", "Isabel", "Fernando", "Laura",
  "Miguel", "Valeria", "Ricardo", "Camila", "David"
];

console.log("--- Arreglo Original ---");
console.log("Lista completa de alumnos:", listaCompletaAlumnos);
console.log("Cantidad de alumnos:", listaCompletaAlumnos.length);
console.log("------------------------\n");

// Ejemplo 1: Dividir el arreglo en dos grupos usando slice()
// Grupo A: Los primeros 10 alumnos (desde la posición 0 hasta la 9)
const grupoA = listaCompletaAlumnos.slice(0, 10);
console.log("--- Grupo A ---");
console.log("Alumnos del Grupo A:", grupoA);
console.log("Cantidad de alumnos en Grupo A:", grupoA.length);
console.log("----------------\n");

// Grupo B: Los alumnos restantes (desde la posición 10 hasta el final)
const grupoB = listaCompletaAlumnos.slice(10);
console.log("--- Grupo B ---");
console.log("Alumnos del Grupo B:", grupoB);
console.log("Cantidad de alumnos en Grupo B:", grupoB.length);
console.log("----------------\n");

// Verificamos que el arreglo original no fue modificado
console.log("--- Verificación del Arreglo Original ---");
console.log("Lista completa de alumnos después de slice():", listaCompletaAlumnos);
console.log("Cantidad de alumnos después de slice():", listaCompletaAlumnos.length);
console.log("-----------------------------------------\n");

// Ejemplo 2: Otro uso de slice() - obtener un fragmento del medio
const alumnosDelMedio = listaCompletaAlumnos.slice(5, 15); // Desde la posición 5 hasta la 14
console.log("--- Alumnos del Medio (posiciones 5 a 14) ---");
console.log("Fragmento:", alumnosDelMedio);
console.log("---------------------------------------------\n");