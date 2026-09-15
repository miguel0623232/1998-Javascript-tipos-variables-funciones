// --- Ejemplo de SyntaxError (Error de Sintaxis) ---

// Este es un SyntaxError porque una variable 'const' debe ser inicializada
// en el momento de su declaración. JavaScript espera un valor aquí.
const nombre; 
console.log(nombre); 

// Para corregirlo, deberíamos inicializarla así:
// const nombre = "Luri";
// console.log(nombre);


// --- Ejemplo de ReferenceError (Error de Referencia) ---

// Este es un ReferenceError porque 'apellidoUsuario' no ha sido declarado
// ni definido en ninguna parte de nuestro código.
// JavaScript no tiene una referencia a esta variable.
console.log(apellidoUsuario); 

// Para corregirlo, primero deberíamos declarar y quizás inicializar la variable:
// const apellidoUsuario = "Bot";
// console.log(apellidoUsuario);


// --- Otro ejemplo de SyntaxError ---

// Este es un SyntaxError porque falta un paréntesis de cierre en la llamada a console.log.
// La sintaxis de la función no está completa.
console.log("Este es un mensaje incompleto" )

// Para corregirlo, simplemente añadimos el paréntesis que falta:
// console.log("Este es un mensaje incompleto");