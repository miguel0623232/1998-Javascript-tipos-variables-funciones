//var tiene un alcance global, por lo que funciona en cualquier parte del código
// Declaramos una variable 'nombre' con var y le asignamos un valor
var nombre = "Luri";
console.log("Mi nombre inicial es: " + nombre); // Salida: Mi nombre inicial es: Luri

// Podemos re-asignar un nuevo valor a la misma variable 'nombre'
nombre = "Alura";
console.log("Mi nombre ahora es: " + nombre); // Salida: Mi nombre ahora es: Alura

// Incluso podemos re-declarar la variable con var (aunque no es una buena práctica)
var nombre = "Chatbot";
console.log("Mi nombre re-declarado es: " + nombre); // Salida: Mi nombre re-declarado es: Chatbot

//let y const tienen un ámbito local, por lo que no se puede acceder a ellos desde otros ámbitos, y const no puede cambiar su valor una vez definido.
// Declaramos una variable 'contador' con let y le asignamos un valor
let contador = 0;
console.log("Valor inicial del contador: " + contador); // Salida: Valor inicial del contador: 0

// Podemos re-asignar un nuevo valor a la misma variable 'contador'
contador = 10;
console.log("Valor del contador después de re-asignación: " + contador); // Salida: Valor del contador después de re-asignación: 10

// ¡Importante! No podemos re-declarar una variable 'let' en el mismo ámbito.
// Si intentas descomentar la siguiente línea, obtendrás un error:
// let contador = 20; // Esto causaría un error: "SyntaxError: 'contador' has already been declared"

// Declaramos una constante 'PI' con un valor que no cambiará
const PI = 3.14159;
console.log("El valor de PI es: " + PI); // Salida: El valor de PI es: 3.14159

// ¡Importante! No podemos re-asignar un nuevo valor a una constante.
// Si intentas descomentar la siguiente línea, obtendrás un error:
// PI = 3.14; // Esto causaría un error: "TypeError: Assignment to constant variable."

// Tampoco podemos re-declarar una constante en el mismo ámbito.
// Si intentas descomentar la siguiente línea, obtendrás un error:
// const PI = 3.0; // Esto causaría un error: "SyntaxError: 'PI' has already been declared"
