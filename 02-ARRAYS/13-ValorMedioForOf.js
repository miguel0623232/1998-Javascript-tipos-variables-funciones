// Definimos la lista de notas
const lstNotas = [7, 8.5, 6, 9, 7.5];

// Inicializamos una variable para acumular la suma de las notas
let sumaNotas = 0;

// Usamos for-of para recorrer cada nota en la lista
for (let nota of lstNotas) {
    // Sumamos cada nota al acumulador
    sumaNotas += nota;
}

// Calculamos el valor medio dividiendo la suma por la cantidad de notas
const valorMedio = sumaNotas / lstNotas.length;

// Imprimimos el resultado usando interpolación de cadenas
console.log(`El valor de la media aritmética usando for-of es: ${valorMedio.toFixed(2)}`);

// También podemos ver cómo el for-of simplemente imprime cada elemento
console.log("\nImprimiendo cada nota con for-of:");
for (let nota of lstNotas) {
    console.log(nota);
}