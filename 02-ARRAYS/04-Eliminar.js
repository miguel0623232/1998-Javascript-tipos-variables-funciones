// Definimos nuestro arreglo de notas inicial
let notas = [8, 7, 9, 6, 10];
console.log("Arreglo original de notas:", notas); // [8, 7, 9, 6, 10]

// --- Eliminando el último elemento con pop() ---
console.log("\n--- Usando pop() para eliminar el último elemento ---");
notas.pop(); // Elimina el 10
console.log("Arreglo después de pop():", notas); // [8, 7, 9, 6]

// --- Eliminando el primer elemento con shift() ---
console.log("\n--- Usando shift() para eliminar el primer elemento ---");
notas.shift(); // Elimina el 8
console.log("Arreglo después de shift():", notas); // [7, 9, 6]

// Observa cómo los índices se ajustaron después de shift()
// El 7 que estaba en la posición 1 ahora está en la posición 0