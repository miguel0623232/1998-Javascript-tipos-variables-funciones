// --- Ejemplo 1: Transformando una expresión de función a una arrow function ---

// Expresión de función original (como la que vimos antes de las arrow functions)
const multiplicaNumeroExpresion = function(a, b, c) {
  return a * b * c;
};
console.log("Expresión de función:", multiplicaNumeroExpresion(2, 3, 4)); // Salida: 24

// Arrow function equivalente
// 1. Se declara con 'const' como una expresión de función.
// 2. Se omitió la palabra 'function'.
// 3. Después de los parámetros (a, b, c), se usa la flecha '=>'.
// 4. El cuerpo de la función está entre llaves y usa 'return'.
const multiplicaNumeroFuncionFlecha = (a, b, c) => {
  return a * b * c;
};
console.log("Arrow function (con return y llaves):", multiplicaNumeroFuncionFlecha(2, 3, 4)); // Salida: 24

// Arrow function simplificada (cuando el cuerpo es una sola línea de retorno)
// 1. Se omiten las llaves '{}'.
// 2. Se omite la palabra 'return'.
// El resultado de la expresión 'a * b * c' se retorna implícitamente.
const multiplicaNumeroFuncionFlechaSimplificada = (a, b, c) => a * b * c;
console.log("Arrow function (simplificada):", multiplicaNumeroFuncionFlechaSimplificada(2, 3, 4)); // Salida: 24

// --- Ejemplo 2: Arrow function con un solo parámetro ---

// Función para elevar un número al cuadrado
// 1. Como solo hay un parámetro ('numero'), se pueden omitir los paréntesis '()' alrededor de él.
// 2. Se usa la flecha '=>'.
// 3. El cuerpo es una sola línea de retorno, por lo que se omiten 'return' y las llaves.
const elevaAlCuadrado = numero => numero * numero;
console.log("Eleva al cuadrado (un parámetro):", elevaAlCuadrado(5)); // Salida: 25

// --- Ejemplo 3: Arrow function con parámetros por defecto ---

// Función de multiplicación con un parámetro 'c' que tiene un valor por defecto de 2
// Si no se proporciona 'c', su valor será 2.
const multiplicaConDefecto = (a, b, c = 2) => a * b * c;
console.log("Multiplica con defecto (sin c):", multiplicaConDefecto(2, 3)); // Salida: 12 (2 * 3 * 2)
console.log("Multiplica con defecto (con c):", multiplicaConDefecto(2, 3, 5)); // Salida: 30 (2 * 3 * 5)