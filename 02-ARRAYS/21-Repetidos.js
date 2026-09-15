// 1. Definimos un arreglo con elementos repetidos
const listaAlumnos = ["José", "María", "José", "Luis", "José", "María"];
console.log("Arreglo original con repetidos:", listaAlumnos);

// 2. Creamos un Set a partir del arreglo. El Set automáticamente elimina los duplicados.
//    new Set(listaAlumnos) creará un Set con {"José", "María", "Luis"}
const alumnosUnicosSet = new Set(listaAlumnos);
console.log("Set con alumnos únicos:", alumnosUnicosSet);

// 3. Usamos el operador de propagación (...) para convertir el Set de nuevo en un arreglo.
//    [...alumnosUnicosSet] toma los elementos del Set y los coloca en un nuevo arreglo.
const listaAlumnosCorregida = [...alumnosUnicosSet];
console.log("Arreglo corregido sin repetidos:", listaAlumnosCorregida);

// También podemos hacer los pasos 2 y 3 en una sola línea, como se mostró en la clase:
const listaAlumnosUnicosEnUnaLinea = [...new Set(listaAlumnos)];
console.log("Arreglo corregido en una sola línea:", listaAlumnosUnicosEnUnaLinea);

// Otro ejemplo con números para que veas la versatilidad
const numerosConDuplicados = [1, 5, 2, 8, 5, 1, 9, 2, 10];
console.log("\nArreglo de números original:", numerosConDuplicados);

const numerosSinDuplicados = [...new Set(numerosConDuplicados)];
console.log("Arreglo de números sin duplicados:", numerosSinDuplicados);