// --- Explicación y Ejemplos del Spread Operator ---

// 1. El problema de la referencia al copiar arreglos

// Arreglo original de notas
const notasIniciales = [7, 8, 4, 9, 6, 8, 9];
console.log("Notas iniciales originales:", notasIniciales);

// Intentamos "copiar" el arreglo asignándolo a una nueva variable
const notasConReferencia = notasIniciales;

// Agregamos una nueva nota al arreglo "copiado"
notasConReferencia.push(10);

console.log("Notas con referencia (después de agregar 10):", notasConReferencia);
console.log("Notas iniciales (después de agregar 10 a notasConReferencia):", notasIniciales);
// Observa que notasIniciales también fue modificado. ¡Esto es el problema de la referencia!

console.log("--------------------------------------------------");

// 2. La solución: Clonar arreglos con el Spread Operator

// Restablecemos las notas iniciales para el siguiente ejemplo
const notasOriginalesParaClonar = [7, 8, 4, 9, 6, 8, 9];
console.log("Notas originales para clonar:", notasOriginalesParaClonar);

// Clonamos el arreglo usando el Spread Operator
// Los tres puntos (...) "propagan" los elementos de notasOriginalesParaClonar
// dentro de un nuevo arreglo, creado por los corchetes [].
const notasClonadasConSpread = [...notasOriginalesParaClonar];

// Agregamos una nueva nota al arreglo clonado
notas