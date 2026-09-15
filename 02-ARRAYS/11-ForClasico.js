// 1. Definimos un arreglo de frutas
const frutas = ["Manzana", "Banana", "Cereza", "Dátil", "Uva"];

console.log("--- Recorriendo el arreglo de frutas con un bucle for clásico ---");

// 2. Usamos un bucle for para mostrar cada fruta
//    - let i = 0: Inicializamos el índice en 0 (la primera posición).
//    - i < frutas.length: La condición es que el índice sea menor que la cantidad total de frutas.
//    - i++: Incrementamos el índice en 1 después de cada fruta.
for (let i = 0; i < frutas.length; i++) {
    console.log("La fruta en la posición " + i + " es: " + frutas[i]);
}

console.log("\n--- El bucle for se adapta al tamaño del arreglo ---");

// 3. Agregamos una nueva fruta al arreglo
frutas.push("Kiwi");

console.log("Después de agregar 'Kiwi', el arreglo ahora tiene " + frutas.length + " elementos.");

// 4. Volvemos a recorrer el arreglo. El bucle for automáticamente incluirá el nuevo elemento.
for (let i = 0; i < frutas.length; i++) {
    console.log("La fruta en la posición " + i + " es: " + frutas[i]);
}

console.log("\n--- Ejemplo con un arreglo de números y una operación ---");

const precios = [10.50, 25.00, 12.75, 30.20];
const impuesto = 0.10; // 10% de impuesto

for (let i = 0; i < precios.length; i++) {
    const precioConImpuesto = precios[i] * (1 + impuesto);
    console.log("El precio original de " + precios[i] + " con impuesto es: " + precioConImpuesto.toFixed(2));
}