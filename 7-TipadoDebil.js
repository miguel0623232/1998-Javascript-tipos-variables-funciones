// Ejemplo 1: Declaración de una variable sin especificar su tipo
let miVariable = 10; 
console.log("Valor de miVariable:", miVariable, "Tipo:", typeof miVariable);
// Salida: Valor de miVariable: 10 Tipo: number
// Aquí, JavaScript infiere que 'miVariable' es de tipo 'number' porque le asignamos un número entero.

// Ejemplo 2: Reasignación de la misma variable con un tipo de dato diferente
miVariable = "Hola Mundo";
console.log("Nuevo valor de miVariable:", miVariable, "Tipo:", typeof miVariable);
// Salida: Nuevo valor de miVariable: Hola Mundo Tipo: string
// Esto es posible gracias al tipado débil de JavaScript. 
// La misma variable 'miVariable' que antes contenía un número, ahora contiene una cadena de texto.
// En lenguajes de tipado fuerte, esto generaría un error.

// Ejemplo 3: Reasignación con otro tipo de dato
miVariable = true;
console.log("Último valor de miVariable:", miVariable, "Tipo:", typeof miVariable);
// Salida: Último valor de miVariable: true Tipo: boolean
// Nuevamente, la variable cambia su tipo a 'boolean' sin ningún problema.

// Ejemplo 4: Operaciones con tipos mixtos (coerción implícita)
let numero = 5;
let texto = "10";

let resultadoSuma = numero + texto; // JavaScript convierte 'numero' a cadena y concatena
console.log("Resultado de 'numero + texto':", resultadoSuma, "Tipo:", typeof resultadoSuma);
// Salida: Resultado de 'numero + texto': 510 Tipo: string
// Aquí, JavaScript, debido a su tipado débil, realiza una "coerción" implícita.
// Al ver que uno de los operandos del '+' es una cadena, decide convertir el otro operando (el número) a cadena
// y luego realiza una concatenación en lugar de una suma numérica.

let resultadoMultiplicacion = numero * texto; // JavaScript convierte 'texto' a número y multiplica
console.log("Resultado de 'numero * texto':", resultadoMultiplicacion, "Tipo:", typeof resultadoMultiplicacion);
// Salida: Resultado de 'numero * texto': 50 Tipo: number
// En este caso, con el operador '*', JavaScript intenta convertir 'texto' a un número antes de la operación.
// Si la conversión es exitosa, realiza la operación numérica.

// Ejemplo 5: Una situación donde la conversión implícita puede llevar a NaN (Not a Number)
let otroTexto = "Hola";
let resultadoInvalido = numero * otroTexto;
console.log("Resultado de 'numero * otroTexto':", resultadoInvalido, "Tipo:", typeof resultadoInvalido);
// Salida: Resultado de 'numero * otroTexto': NaN Tipo: number
// JavaScript intentó convertir "Hola" a un número para la multiplicación, pero no pudo.
// El resultado es 'NaN', que sigue siendo de tipo 'number' en JavaScript.