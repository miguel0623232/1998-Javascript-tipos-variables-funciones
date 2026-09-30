// Creamos un objeto principal llamado 'cliente'
const cliente = {
    nombre: "Ana",
    edad: 28,
    email: "ana@ejemplo.com",
    telefonos: ["55 9876 5432", "55 1122 3344"],
    // Aquí es donde anidamos otro objeto: 'direccion'
    direccion: {
        calle: "Calle Falsa",
        numero: 123,
        ciudad: "Ciudad de México",
        pais: "México",
        codigoPostal: "01000"
    },
    // También podemos anidar otros objetos, por ejemplo, información de contacto de emergencia
    contactoEmergencia: {
        nombre: "Pedro",
        relacion: "Hermano",
        telefono: "55 5555 5555"
    }
};

// Imprimimos el objeto completo para ver su estructura
console.log("Objeto cliente completo:");
console.log(cliente);

// Accediendo a propiedades simples del objeto cliente
console.log("\nNombre del cliente:", cliente.nombre);
console.log("Edad del cliente:", cliente.edad);

// Accediendo a una propiedad dentro del objeto anidado 'direccion'
console.log("\nPaís de la dirección:", cliente.direccion.pais);

// Accediendo a otra propiedad dentro del objeto anidado 'direccion'
console.log("Calle de la dirección:", cliente.direccion.calle);

// Accediendo a una propiedad dentro del objeto anidado 'contactoEmergencia'
console.log("\nNombre del contacto de emergencia:", cliente.contactoEmergencia.nombre);
console.log("Teléfono del contacto de emergencia:", cliente.contactoEmergencia.telefono);

// Si intentamos acceder a una propiedad que no existe, nos dará 'undefined'
console.log("\nEstado de la dirección (no existe en este objeto):", cliente.direccion.estado);