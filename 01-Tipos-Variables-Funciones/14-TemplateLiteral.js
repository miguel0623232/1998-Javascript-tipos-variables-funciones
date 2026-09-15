// Ejemplo 1: Uso básico de template literal con una variable
const nombre = 'Luri';
const saludo = `¡Hola, mi nombre es ${nombre}!`; // Aquí, ${nombre} inserta el valor de la variable 'nombre' directamente en la cadena.
console.log(saludo); // Salida: ¡Hola, mi nombre es Luri!

// Ejemplo 2: Template literal con múltiples variables y un salto de línea
const producto = 'Laptop';
const precio = 1200;
const moneda = 'USD';

const mensajeCompra = `Has seleccionado el producto: ${producto}.
El precio es de ${precio} ${moneda}.`; // Observa cómo el salto de línea se escribe directamente en el template literal.
                                     // ${producto}, ${precio} y ${moneda} insertan los valores de sus respectivas variables.
console.log(mensajeCompra);
/* Salida:
Has seleccionado el producto: Laptop.
El precio es de 1200 USD.
*/

// Ejemplo 3: Realizando operaciones dentro de un template literal
const cantidad = 3;
const costoUnitario = 25;

const factura = `Total a pagar: ${cantidad * costoUnitario} pesos.`; // Se puede realizar una operación (multiplicación) directamente dentro de ${}.
console.log(factura); // Salida: Total a pagar: 75 pesos.

// Ejemplo 4: Combinando texto y expresiones más complejas
const esMayorDeEdad = true;
const edadMensaje = `La persona ${esMayorDeEdad ? 'es mayor de edad' : 'es menor de edad'}.`; // Aquí usamos un operador ternario dentro del template literal.
                                                                                             // Si 'esMayorDeEdad' es true, muestra 'es mayor de edad', de lo contrario, 'es menor de edad'.
console.log(edadMensaje); // Salida: La persona es mayor de edad.

// Ejemplo 5: Template literal para construir una URL dinámica
const idUsuario = 123;
const urlPerfil = `/api/usuarios/${idUsuario}/perfil`; // Útil para construir rutas o URLs con identificadores dinámicos.
console.log(urlPerfil); // Salida: /api/usuarios/123/perfil