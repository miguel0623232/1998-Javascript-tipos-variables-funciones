// --- Explicación y Ejemplo de forEach en JavaScript ---

// 1. Nuestro arreglo de notas, similar al usado en la clase.
const notas = [7, 5, 9, 8, 6, 10, 7, 8, 9, 5, 6, 7];
console.log("Arreglo de notas:", notas);

// 2. Inicializamos una variable para acumular la suma de las notas.
//    Esto es necesario para calcular el valor medio.
let sumaNotas = 0;

// 3. Usando el método forEach para recorrer el arreglo.
//    forEach es un método de la clase Array, por eso lo llamamos desde 'notas'.
//    Recibe como argumento una función de callback.
console.log("\n--- Recorrido con forEach ---");
notas.forEach(function(nota, posicion) {
    // La función de callback se ejecuta para cada elemento del arreglo.
    // 'nota' recibe el valor del elemento actual.
    // 'posicion' recibe el índice (posición) del elemento actual.

    console.log(`Procesando nota: ${nota} en la posición: ${posicion}`);

    // Acumulamos la nota actual en nuestra variable 'sumaNotas'.
    sumaNotas += nota;
});

// 4. Después de que forEach ha terminado de recorrer todos los elementos,
//    calculamos el valor medio.
const valorMedio = sumaNotas / notas.length;

// 5. Mostramos el resultado final.
console.log("\n--- Resultado del cálculo ---");
console.log("Suma total de las notas:", sumaNotas);
console.log("Cantidad de notas:", notas.length);
console.log(`El valor medio de las notas usando forEach es: ${valorMedio.toFixed(2)}`);

// --- Pequeño ejercicio adicional para practicar ---
console.log("\n--- Ejercicio: Duplicar valores con forEach (solo mostrar) ---");
// Aunque forEach no crea un nuevo arreglo, podemos usarlo para realizar
// operaciones y mostrar resultados para cada elemento.
notas.forEach(function(nota) {
    const notaDuplicada = nota * 2;
    console.log(`La nota ${nota} duplicada es: ${notaDuplicada}`);
});