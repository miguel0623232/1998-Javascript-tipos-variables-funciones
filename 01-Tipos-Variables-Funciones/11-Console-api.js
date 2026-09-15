// Este archivo demuestra el uso de la API de Console en JavaScript.

// 1. Mostrando mensajes con console.log()
// Es el método más común para mostrar información general o el valor de variables.
console.log('¡Hola, mundo desde console.log!');

let nombre = 'Luri';
let edad = 30;
console.log('Mi nombre es:', nombre);
console.log('Tengo', edad, 'años.');

// También podemos concatenar mensajes y variables.
console.log(`El usuario ${nombre} tiene ${edad} años.`);

// 2. Mostrando errores con console.error()
// Se utiliza para indicar que ha ocurrido un error.
// Algunos terminales pueden mostrar este mensaje en color rojo.
console.error('¡Error: La variable "usuario" no está definida!');

let valorNumerico = 5;
if (valorNumerico < 10) {
  console.error('El valor numérico debe ser mayor o igual a 10.');
}

// 3. Mostrando advertencias con console.warn()
// Se usa para alertar sobre posibles problemas o situaciones no ideales,
// pero que no necesariamente detienen la ejecución del programa.
// Algunos terminales pueden mostrar este mensaje en color amarillo.
console.warn('Advertencia: La función "calcularTotal" está obsoleta y será eliminada en futuras versiones.');

let cantidad = 0;
if (cantidad === 0) {
  console.warn('La cantidad es cero. Asegúrate de que esto sea intencional.');
}

// 4. Midiendo el tiempo de ejecución con console.time() y console.timeEnd()
// Estos métodos son útiles para evaluar el rendimiento de un bloque de código.
// console.time() inicia un temporizador con una etiqueta específica.
console.time('Tiempo de cálculo complejo');

// Simulamos una operación que toma tiempo
for (let i = 0; i < 1000000; i++) {
  // Realizamos alguna operación simple para consumir tiempo
  let resultado = i * 2 / 3;
}

// console.timeEnd() detiene el temporizador con la misma etiqueta
// y muestra el tiempo transcurrido en milisegundos.
console.timeEnd('Tiempo de cálculo complejo');

// Otro ejemplo de medición de tiempo
console.time('Carga de datos');
// Aquí iría el código para cargar datos, por ejemplo
setTimeout(() => {
  console.log('Datos cargados.');
  console.timeEnd('Carga de datos');
}, 1500); // Simulamos una carga de 1.5 segundos