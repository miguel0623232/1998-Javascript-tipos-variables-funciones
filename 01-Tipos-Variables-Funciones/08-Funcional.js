// Ejemplo 1: Una función simple para sumar dos números
// En el paradigma funcional, las funciones son "ciudadanos de primera clase".
// Esto significa que pueden ser asignadas a variables, pasadas como argumentos y retornadas por otras funciones.
function sumar(a, b) {
  return a + b;
}

// Usamos la función
let resultado1 = sumar(5, 3);
console.log("Resultado de sumar(5, 3):", resultado1); // Salida: 8

// Ejemplo 2: Funciones puras
// Una función pura siempre devuelve el mismo resultado para los mismos argumentos
// y no tiene efectos secundarios (no modifica variables externas ni realiza operaciones de E/S).
// Esto hace que el código sea más predecible y fácil de probar.

let valorGlobal = 10; // Variable externa

function sumarPura(a, b) {
  return a + b; // Siempre devuelve a + b, no depende de 'valorGlobal'
}

function sumarImpura(a, b) {
  valorGlobal = a + b; // Modifica una variable externa (efecto secundario)
  return valorGlobal;
}

console.log("Resultado de sumarPura(2, 3):", sumarPura(2, 3)); // Salida: 5
console.log("Valor global después de sumarPura:", valorGlobal); // Salida: 10 (no cambió)

console.log("Resultado de sumarImpura(2, 3):", sumarImpura(2, 3)); // Salida: 5
console.log("Valor global después de sumarImpura:", valorGlobal); // Salida: 5 (¡cambió!)
// La función 'sumarPura' es preferible en el paradigma funcional por su predictibilidad.

// Ejemplo 3: Funciones de orden superior (Higher-Order Functions)
// Son funciones que toman una o más funciones como argumentos o devuelven una función.
// Esto permite una gran flexibilidad y abstracción.

// Función que toma otra función como argumento
function aplicarOperacion(numero1, numero2, operacion) {
  return operacion(numero1, numero2);
}

// Definimos una función de multiplicación
function multiplicar(a, b) {
  return a * b;
}

// Usamos 'aplicarOperacion' con 'sumar' y 'multiplicar'
let resultadoSumaHOF = aplicarOperacion(10, 5, sumar);
console.log("Resultado de aplicarOperacion(10, 5, sumar):", resultadoSumaHOF); // Salida: 15

let resultadoMultiplicacionHOF = aplicarOperacion(10, 5, multiplicar);
console.log("Resultado de aplicarOperacion(10, 5, multiplicar):", resultadoMultiplicacionHOF); // Salida: 50

// Ejemplo 4: Inmutabilidad
// En el paradigma funcional, se prefiere no modificar los datos originales,
// sino crear nuevas copias con las modificaciones.

let numerosOriginales = [1, 2, 3];

// Función que modifica el array (no funcional)
function agregarNumeroImpuro(arr, num) {
  arr.push(num); // Modifica el array original
  return arr;
}

// Función que devuelve un nuevo array (funcional)
function agregarNumeroPuro(arr, num) {
  return [...arr, num]; // Crea un nuevo array con el número añadido
}

console.log("Array original antes de agregarNumeroImpuro:", numerosOriginales); // Salida: [1, 2, 3]
let numerosModificadosImpuro = agregarNumeroImpuro(numerosOriginales, 4);
console.log("Array después de agregarNumeroImpuro:", numerosModificadosImpuro); // Salida: [1, 2, 3, 4]
console.log("Array original después de agregarNumeroImpuro:", numerosOriginales); // Salida: [1, 2, 3, 4] (¡el original fue modificado!)

let otrosNumerosOriginales = [10, 20, 30];
console.log("Otro array original antes de agregarNumeroPuro:", otrosNumerosOriginales); // Salida: [10, 20, 30]
let numerosModificadosPuro = agregarNumeroPuro(otrosNumerosOriginales, 40);
console.log("Array después de agregarNumeroPuro:", numerosModificadosPuro); // Salida: [10, 20, 30, 40]
console.log("Otro array original después de agregarNumeroPuro:", otrosNumerosOriginales); // Salida: [10, 20, 30] (¡el original no fue modificado!)
// La inmutabilidad ayuda a prevenir errores y hace el código más fácil de razonar.