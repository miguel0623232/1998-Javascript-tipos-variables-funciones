// Definimos un arreglo de arreglos para almacenar nombres y notas
// Siguiendo el principio de Clean Code, nombramos las variables adecuadamente.
// posicion 0: nombres de alumnos
// posicion 1: notas de alumnos
const lstNotasAlumnos = [
    ["Ana", "Lucas", "Valeria", "Álvaro"], // Nombres de los alumnos
    [7, 10, 9, 8] // Notas de los alumnos
];

// Nombre del alumno que queremos buscar
let alumnoBuscado = "Valeria"; 
// Puedes cambiar este nombre para probar con otros alumnos o con uno que no exista

console.log("--- Búsqueda de Alumno y Nota ---");

// Paso 1: Verificar si el alumno existe en el arreglo de nombres usando includes()
// Accedemos al arreglo de nombres que está en la posición 0 de lstNotasAlumnos
if (lstNotasAlumnos[0].includes(alumnoBuscado)) {
    console.log(`¡Alumno "${alumnoBuscado}" encontrado!`);

    // Paso 2: Si el alumno existe, encontrar su posición usando indexOf()
    const posicionAlumno = lstNotasAlumnos[0].indexOf(alumnoBuscado);
    console.log(`"${alumnoBuscado}" se encuentra en la posición: ${posicionAlumno}`);

    // Paso 3: Acceder a la nota del alumno usando la posición encontrada
    // La nota está en el arreglo de notas (posición 1 de lstNotasAlumnos)
    const notaFinal = lstNotasAlumnos[1][posicionAlumno];

    // Mostrar la nota final utilizando template strings
    console.log(`La nota final de ${alumnoBuscado} es ${notaFinal}.`);

} else {
    // Si includes() devuelve false, el alumno no fue encontrado
    console.log(`El alumno "${alumnoBuscado}" no fue encontrado en la lista.`);
}

console.log("\n--- Otro ejemplo: Alumno no existente ---");
alumnoBuscado = "Diego"; // Cambiamos el alumno a buscar por uno que no existe

if (lstNotasAlumnos[0].includes(alumnoBuscado)) {
    console.log(`¡Alumno "${alumnoBuscado}" encontrado!`);
    const posicionAlumno = lstNotasAlumnos[0].indexOf(alumnoBuscado);
    const notaFinal = lstNotasAlumnos[1][posicionAlumno];
    console.log(`La nota final de ${alumnoBuscado} es ${notaFinal}.`);
} else {
    console.log(`El alumno "${alumnoBuscado}" no fue encontrado en la lista.`);
}

console.log("\n--- Ejemplo de indexOf() directamente (sin includes()) ---");
let alumnoDirecto = "Lucas";
let posicionDirecta = lstNotasAlumnos[0].indexOf(alumnoDirecto);
console.log(`La posición de "${alumnoDirecto}" es: ${posicionDirecta}`); // Devolverá 1

alumnoDirecto = "Pedro"; // Un alumno que no existe
posicionDirecta = lstNotas