// Ejemplo 1: Determinar si un número es par o impar

const numero = 10;

// Usando el operador ternario para verificar si el número es par o impar
// La condición es 'numero % 2 === 0' (si el residuo de la división por 2 es 0, es par)
// Si la condición es verdadera, el resultado es 'Es par'
// Si la condición es falsa, el resultado es 'Es impar'
const resultadoParImpar = (numero % 2 === 0) ? 'Es par' : 'Es impar';

console.log(`El número ${numero} ${resultadoParImpar}.`); // Salida: El número 10 Es par.

// ---

// Ejemplo 2: Asignar un mensaje de bienvenida según si el usuario está logueado

const usuarioLogueado = true;
const nombreUsuario = "Ana";

// Usando el operador ternario para decidir el mensaje de bienvenida
// La condición es 'usuarioLogueado' (si es true, el usuario está logueado)
// Si la condición es verdadera, el mensaje es 'Bienvenida, ' + nombreUsuario
// Si la condición es falsa, el mensaje es 'Por favor, inicia sesión'
const mensajeBienvenida = usuarioLogueado ? `Bienvenida, ${nombreUsuario}` : 'Por favor, inicia sesión';

console.log(mensajeBienvenida); // Salida: Bienvenida, Ana

// ---

// Ejemplo 3: Verificar si un producto está en stock

const cantidadEnStock = 5;
const cantidadDeseada = 3;

// Usando el operador ternario para verificar si hay suficiente stock
// La condición es 'cantidadEnStock >= cantidadDeseada'
// Si la condición es verdadera, el mensaje es 'Producto disponible'
// Si la condición es falsa, el mensaje es 'Stock insuficiente'
const estadoProducto = (cantidadEnStock >= cantidadDeseada) ? 'Producto disponible' : 'Stock insuficiente';

console.log(estadoProducto); // Salida: Producto disponible

// ---

// Ejemplo 4: Determinar si un estudiante aprobó o reprobó un examen

const notaExamen = 75;
const notaMinimaAprobacion = 60;

// Usando el operador ternario para verificar si el estudiante aprobó
// La condición es 'notaExamen >= notaMinimaAprobacion'
// Si la condición es verdadera, el resultado es 'Aprobado'
// Si la condición es falsa, el resultado es 'Reprobado'
const estadoEstudiante = (notaExamen >= notaMinimaAprobacion) ? 'Aprobado' : 'Reprobado';

console.log(`El estudiante está: ${estadoEstudiante}.`); // Salida: El estudiante está: Aprobado.