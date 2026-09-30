// Paso 1: Creamos un objeto cliente con propiedades básicas.
// Inicialmente, 'telefono' es una sola cadena de texto.
const clienteInicial = {
    nombre: "Sofía",
    edad: 31,
    email: "sofia@gmail.com",
    telefono: "55 1234 5678"
};

console.log("--- Objeto cliente inicial ---");
console.log(clienteInicial);
console.log("------------------------------\n");

// Paso 2: Nos damos cuenta de que un cliente puede tener varios teléfonos.
// Modificamos el objeto para que la propiedad 'telefonos' sea un arreglo.
const clienteConArreglo = {
    nombre: "Sofía",
    edad: 31,
    email: "sofia@gmail.com",
    // Ahora 'telefonos' es un arreglo que puede contener múltiples números.
    telefonos: ["55 1234 5678", "55 4323 4353", "55 9876 5432"]
};

console.log("--- Objeto cliente con arreglo de teléfonos ---");
console.log(clienteConArreglo);
console.log("----------------------------------------------\n");

// Puedes acceder a elementos específicos del arreglo usando su índice
console.log("Primer teléfono de Sofía:", clienteConArreglo.telefonos[0]);
console.log("Segundo teléfono de Sofía:", clienteConArreglo.telefonos[1]);

// También puedes ver cuántos teléfonos tiene
console.log("Cantidad de teléfonos de Sofía:", clienteConArreglo.telefonos.length);