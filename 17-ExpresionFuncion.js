 // --- Declaración de Función ---

// Podemos llamar a esta función antes de su definición gracias al hoisting
console.log("Resultado de sumaDeclaracion (antes de la definición):", sumaDeclaracion(5, 3)); 

function sumaDeclaracion(a, b) {
  return a + b;
}

console.log("Resultado de sumaDeclaracion (después de la definición):", sumaDeclaracion(10, 2));

// --- Expresión de Función ---

// Si intentamos llamar a sumaExpresion aquí, obtendríamos un error
// console.log("Resultado de sumaExpresion (antes de la definición):", sumaExpresion(5, 3)); 
// Error: Cannot access 'sumaExpresion' before initialization

const sumaExpresion = function(a, b) {
  return a + b;
};

console.log("Resultado de sumaExpresion (después de la definición):", sumaExpresion(7, 4));

// Otro ejemplo de expresión de función con un nombre diferente
const restaExpresion = function(x, y) {
  return x - y;
};

console.log("Resultado de restaExpresion:", restaExpresion(15, 5));