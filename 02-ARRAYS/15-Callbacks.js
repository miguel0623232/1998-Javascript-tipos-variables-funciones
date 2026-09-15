// Nuestro arreglo de nombres para los ejemplos
const lstNombres = ["Diego", "María", "Bernardo"];

console.log("--- Usando función anónima como callback ---");
// 1. Función anónima como argumento
lstNombres.forEach(function(nombre) {
  console.log(nombre);
});

console.log("\n--- Usando función de flecha (arrow function) como callback ---");
// 2. Función de flecha (arrow function)
lstNombres.forEach(nombre => {
  console.log(nombre);
});

// Si la función de flecha es de una sola línea, se puede abreviar aún más:
// lstNombres.forEach(nombre => console.log(nombre));


console.log("\n--- Usando función declarada (externa) como callback ---");
// 3. Función declarada (externa)
function imprimeNombres(nombre) {
  console.log(nombre);
}

// Pasamos la referencia de la función (su nombre), no la ejecutamos
lstNombres.forEach(imprimeNombres);

// Si intentáramos pasarla ejecutada (imprimeNombres()), daría un error
// lstNombres.forEach(imprimeNombres()); // Esto causaría un error