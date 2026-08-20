// 15-Funciones.js

// [00:00] Hola, continuamos con nuestra formación en tipos variables y funciones.
// Llegó el momento de ellas, de las funciones. ¿Qué son? ¿Para qué nos sirven?
// ¿Cómo usarlas, cómo utilizarlas? Para ello vamos al código.

// [00:23] Hemos trabajado con código secuencial, pero cuando tenemos un conjunto
// de instrucciones que realizan un proceso específico y que puede ser repetitivo,
// estamos hablando de una función.

// [01:08] Concepto de función: Es un bloque de código que tiene un objetivo específico
// y que va a retornar un resultado. Nos permite ejecutarlo tantas veces queramos.

// Ejemplo sin funciones (código repetitivo):
// Imaginemos que queremos sumar dos números y luego sacar el 10% de esa suma.
// Si lo hacemos sin funciones, tendríamos que repetir el código cada vez que
// queramos hacer esta operación con diferentes números.

let a1 = 5;
let b1 = 10;
let c1 = a1 + b1; // Suma
c1 = c1 * 10 / 100; // Calcula el 10% de la suma
console.log("Resultado sin función (1): " + c1); // Salida: 1.5

let a2 = 8;
let b2 = 45;
let c2 = a2 + b2; // Suma
c2 = c2 * 10 / 100; // Calcula el 10% de la suma
console.log("Resultado sin función (2): " + c2); // Salida: 5.3

// [03:17] Es el caso de la función. Vamos a limpiar el código para tener un bloque
// capaz de sumar dos números y devolver el 10% de esa suma.

// Anatomía de una función (forma declarativa o declaración de función):
// [03:50] 1. Palabra reservada 'function'.
// [03:50] 2. Un nombre válido para la función (alfanumérico, no empieza con número, sin caracteres especiales).
//    Debe representar el objetivo de la función.
// [04:12] 3. Paréntesis '()'. Indican que es un proceso y pueden recibir parámetros (lo veremos en el próximo video).
// [04:40] 4. Llaves '{}'. Definen el bloque de código que la función ejecutará.
// [06:01] 5. Palabra reservada 'return'. Para que la función devuelva un resultado.

function sumaYPorcentaje(numero1, numero2) { // 'numero1' y 'numero2' son los parámetros
  // [05:11] Dentro del bloque de código, definimos las operaciones.
  // Aquí sumamos los dos números que la función recibe.
  let suma = numero1 + numero2;

  // [05:33] Luego, calculamos el 10% de esa suma.
  let resultadoFinal = suma * 10 / 100;

  // [06:01] La palabra 'return' es crucial. Es lo que la función "entrega"
  // como su resultado final cuando es ejecutada.
  return resultadoFinal;
}

// [07:05] Ya tenemos nuestra función declarada. Ahora, ¡vamos a usarla!
// [07:32] Declarar la función no la ejecuta, solo la hace disponible.
// Para usarla, debemos "invocarla" o "llamada".

// [07:50] ¿Cómo se llama? Simplemente usando su nombre seguido de paréntesis.
// Dentro de los paréntesis, pasamos los valores que la función necesita.
// Estos valores son los 'argumentos' que corresponden a los 'parámetros' definidos.

// [08:09] Opción 1: Asignar el resultado de la función a una variable.
// La función 'sumaYPorcentaje(5, 10)' se ejecuta, devuelve 1.5, y ese valor
// se guarda en 'numeroResultado1'.
const numeroResultado1 = sumaYPorcentaje(5, 10); // Aquí 5 y 10 son los argumentos
console.log("Resultado con función (1): " + numeroResultado1); // Salida: 1.5

// [09:12] Podemos llamar la función 'n' veces con diferentes argumentos.
const numeroResultado2 = sumaYPorcentaje(8, 45); // Aquí 8 y 45 son los argumentos
console.log("Resultado con función (2): " + numeroResultado2); // Salida: 5.3

// [09:33] Opción 2: Pasar el resultado de la función directamente a otra función.
// En este caso, 'console.log()' es una función que puede recibir el resultado
// de 'sumaYPorcentaje()' directamente como uno de sus argumentos.
console.log("Resultado con función (3) directo: " + sumaYPorcentaje(20, 30)); // Salida: 5

// [10:32] Un detalle interesante: las funciones también pueden tener otras funciones dentro.
// Esto es útil para organizar aún más el código si una parte de la lógica
// interna de la función principal es compleja o reutilizable dentro de ella misma.

function calculaComplejo(val1, val2) {
  // Función interna: solo existe dentro del ámbito de 'calculaComplejo'
  function multiplicaNumeros(a, b) {
    return a * b;
  }

  let sumaInterna = val1 + val2;
  let productoInterno = multiplicaNumeros(val1, val2); // Llamamos a la función interna

  // Retornamos la suma de la suma y el producto
  return sumaInterna + productoInterno;
}

console.log("Resultado de función compleja (10, 5): " + calculaComplejo(10, 5));
// Explicación:
// val1 = 10, val2 = 5
// sumaInterna = 10 + 5 = 15
// productoInterno = multiplicaNumeros(10, 5) = 10 * 5 = 50
// return 15 + 50 = 65
// Salida: Resultado de función compleja (10, 5): 65

// [11