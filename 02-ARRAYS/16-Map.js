// 1. Arreglo original de números
const numerosOriginales = [1, 2, 3, 4, 5];
console.log("Arreglo original de números:", numerosOriginales);

// --- Ejemplo 1: Duplicar cada número ---
// Usamos map para crear un nuevo arreglo donde cada número se multiplica por 2.
const numerosDuplicados = numerosOriginales.map(numero => numero * 2);
console.log("Arreglo con números duplicados:", numerosDuplicados);
// El arreglo original 'numerosOriginales' sigue siendo [1, 2, 3, 4, 5]

// --- Ejemplo 2: Convertir números a cadenas de texto ---
// Usamos map para transformar cada número en una cadena de texto.
const numerosComoStrings = numerosOriginales.map(numero => `El número es: ${numero}`);
console.log("Arreglo con números como strings:", numerosComoStrings);

// --- Ejemplo 3: Aplicar una condición (similar al ejemplo de las notas) ---
// Tenemos un arreglo de precios y queremos aplicar un descuento del 10%,
// pero si el precio es menor de 10, queremos que el nuevo precio sea 10.
const precios = [5, 12, 20, 8, 15];
console.log("\nArreglo original de precios:", precios);

const preciosConDescuento = precios.map(precio => {
  let nuevoPrecio = precio * 0.9; // Aplicar 10% de descuento
  if (nuevoPrecio < 10) {
    nuevoPrecio = 10; // Si es menor de 10, el nuevo precio es 10
  }
  return nuevoPrecio;
});
console.log("Arreglo de precios con descuento y mínimo de 10:", preciosConDescuento);

// --- Ejemplo 4: Usando una función externa como callback ---
// Podemos definir la función de transformación por separado y luego pasarla a map.
function elevarAlCuadrado(numero) {
  return numero * numero;
}

const numerosAlCuadrado = numerosOriginales.map(elevarAlCuadrado);
console.log("Arreglo con números elevados al cuadrado (usando función externa):", numerosAlCuadrado);

// --- Verificación de que el arreglo original no cambia ---
console.log("\nVerificación: El arreglo 'numerosOriginales' sigue siendo:", numerosOriginales);