
// --- Ejemplos de Truthy y Falsy ---
// Estos valores se comportan como 'true' o 'false' en contextos booleanos,
// incluso si no son explícitamente de tipo booleano.

// Ejemplo 1: El número 0 es 'falsy'
let numeroCero = 0;
console.log("--- Truthy y Falsy ---");
console.log("¿0 es igual a false (==)?", numeroCero == false); // true
// Explicación: JavaScript considera que el número 0 es 'falsy', por lo que se comporta como 'false' en esta comparación.

// Ejemplo 2: La cadena de caracteres vacía "" es 'falsy'
let textoVacio = "";
console.log("¿Cadena vacía es igual a false (==)?", textoVacio == false); // true
// Explicación: Una cadena sin ningún carácter también es 'falsy'.

// Ejemplo 3: El número 1 es 'truthy'
let numeroUno = 1;
console.log("¿1 es igual a true (==)?", numeroUno == true); // true
// Explicación: El número 1 es un ejemplo de un valor 'truthy'.

// Ejemplo 4: Una cadena con contenido es 'truthy' en un contexto booleano
let textoConContenido = "Hola Alura";
console.log("¿'Hola Alura' es igual a true (==)?", textoConContenido == true); // false
// Explicación: Aunque 'textoConContenido == true' es 'false' con el operador '==',
// una cadena con contenido se evalúa como 'true' en una condición 'if' o similar.
if (textoConContenido) {
    console.log("La cadena 'Hola Alura' es truthy en un contexto booleano (como un if)."); // Este mensaje se mostrará
}

// --- Ejemplos de undefined y null ---
// Ambos representan la ausencia de un valor, pero de maneras diferentes.

console.log("\n--- undefined y null ---");

// Ejemplo 5: Variable 'undefined'
let miVariableSinValor; // Declarada pero no inicializada
console.log("Valor de 'miVariableSinValor':", miVariableSinValor); // undefined
console.log("Tipo de 'miVariableSinValor':", typeof miVariableSinValor); // undefined
console.log("¿'miVariableSinValor' (undefined) es igual a false (==)?", miVariableSinValor == false); // false
// Explicación: 'undefined' significa que una variable no tiene un valor asignado.
// No se comporta como 'false' en una comparación directa con '=='.

// Ejemplo 6: Variable 'null'
let miVariableNula = null; // Asignada explícitamente como 'null'
console.log("Valor de 'miVariableNula':", miVariableNula); // null
console.log("Tipo de 'miVariableNula':", typeof miVariableNula); // object
// Explicación: 'null' es un valor que se asigna intencionalmente para indicar la ausencia de un valor.
// Es una particularidad histórica de JavaScript que 'typeof null' retorne "object".

// Ejemplo 7: Comparación entre 'undefined' y 'null'
let variableNoDefinida; // undefined
let variableConNull = null; // null
console.log("¿'undefined' (variableNoDefinida) es igual a 'null' (variableConNull) con (==)?", variableNoDefinida == variableConNull); // true
// Explicación: Con el operador de igualdad '==', JavaScript considera que 'undefined' y 'null' son iguales.
console.log("¿'undefined' (variableNoDefinida) es estrictamente igual a 'null' (variableConNull) con (===)?", variableNoDefinida === variableConNull); // false
// Explicación: Con el operador de igualdad estricta '===', los tipos de datos también deben coincidir.
// Como 'undefined' y 'null' son de tipos diferentes, la comparación estricta es 'false'.

// --- Ejemplos de typeof ---
// El operador 'typeof' nos permite conocer el tipo de dato de una expresión o variable.

console.log("\n--- Operador typeof ---");

// Ejemplo 8: Obteniendo tipos de datos de diferentes variables
let edad = 25;
let nombre = "Carlos";
let estaConectado = true;
let sinAsignar; // undefined
let valorVacio = null;
let simbolo = Symbol("id"); // Otro tipo de dato primitivo visto brevemente

console.log("Tipo de 'edad' (25):", typeof edad); // number
console.log("Tipo de 'nombre' ('Carlos'):", typeof nombre); // string
console.log("Tipo de 'estaConectado' (true):", typeof estaConectado); // boolean
console.log("Tipo de 'sinAsignar' (undefined):", typeof sinAsignar); // undefined
console.log("Tipo de 'valorVacio' (null):", typeof valorVacio); // object (¡la particularidad!)
console.log("Tipo de 'simbolo' (Symbol):", typeof simbolo); // symbol
// Explicación: 'typeof' es una herramienta útil para verificar el tipo de dato de una variable,
// lo cual es importante para evitar errores y asegurar que las operaciones se realicen correctamente.