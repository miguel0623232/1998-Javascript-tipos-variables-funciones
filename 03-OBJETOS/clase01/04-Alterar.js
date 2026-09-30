// Creamos un objeto 'alumno' con algunas propiedades iniciales
const alumno = {
  nombre: "Pedro García",
  carrera: "Sistemas Computacionales"
};

console.log("Objeto alumno inicial:");
console.log(alumno);
// Salida: { nombre: 'Pedro García', carrera: 'Sistemas Computacionales' }

// --- Agregar una nueva propiedad ---
// Queremos añadir la edad al alumno. Esta propiedad no existía antes.
alumno.edad = 19;

console.log("\nObjeto alumno después de agregar la edad:");
console.log(alumno);
// Salida: { nombre: 'Pedro García', carrera: 'Sistemas Computacionales', edad: 19 }

// --- Modificar una propiedad existente ---
// Queremos completar el nombre de Pedro.
alumno.nombre = "Pedro García López";

console.log("\nObjeto alumno después de modificar el nombre:");
console.log(alumno);
// Salida: { nombre: 'Pedro García López', carrera: 'Sistemas Computacionales', edad: 19 }

// --- Importante sobre 'const' con objetos ---
// Aunque 'alumno' fue declarado con 'const', pudimos modificar su contenido.
// Sin embargo, no podemos reasignar la variable 'alumno' a un nuevo valor o tipo.

/*
// Si intentamos hacer esto, obtendremos un error:
// TypeError: Assignment to constant variable.
alumno = "José";
console.log("\nIntentando reasignar alumno (esto causaría un error):");
console.log(alumno);
*/

console.log("\nComo puedes ver, podemos cambiar las propiedades internas de un objeto declarado con 'const',");
console.log("pero no podemos asignarle un objeto completamente nuevo o un valor diferente a la variable 'alumno' misma.");