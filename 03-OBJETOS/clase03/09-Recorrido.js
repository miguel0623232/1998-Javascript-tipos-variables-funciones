// Objeto de ejemplo que usamos en la clase
const cliente = {
    nombre: "Sofía",
    edad: 31,
    email: "sofia@gmail.com",
    telefono: "123-456-7890",
    direccion: {
        calle: "Calle Falsa 123",
        ciudad: "Springfield"
    },
    compras: ["libro", "camiseta"],
    saludar: function() {
        console.log("Hola");
    }
};

console.log("--- Recorriendo todas las llaves del objeto ---");
// Primer ejemplo: solo mostrar las llaves
for (let llave in cliente) {
    console.log(llave); // Imprime: nombre, edad, email, telefono, direccion, compras, saludar
}

console.log("\n--- Mostrando llaves y sus valores ---");
// Segundo ejemplo: mostrar la llave y su valor
for (let llave in cliente) {
    // Usamos backticks para crear un string con la llave y su valor
    console.log(`La llave ${llave} tiene el valor ${cliente[llave]}`);
    /*
    Imprime:
    La llave nombre tiene el valor Sofía
    La llave edad tiene el valor 31
    La llave email tiene el valor sofia@gmail.com
    La llave telefono tiene el valor 123-456-7890
    La llave direccion tiene el valor [object Object] (porque es un objeto anidado)
    La llave compras tiene el valor libro,camiseta (porque es un arreglo, que JS trata como objeto)
    La llave saludar tiene el valor function() { console.log("Hola"); }
    */
}

console.log("\n--- Mostrando llaves y valores, excluyendo objetos y funciones ---");
// Tercer ejemplo: filtrar para no mostrar objetos (incluyendo arreglos) ni funciones
for (let llave in cliente) {
    let tipo = typeof cliente[llave]; // Obtenemos el tipo de dato del valor
    
    // Si el tipo no es "object" Y no es "function", entonces lo mostramos
    if (tipo !== "object" && tipo !== "function") {
        console.log(`La llave ${llave} tiene el valor ${cliente[llave]}`);
    }
    /*
    Imprime:
    La llave nombre tiene el valor Sofía
    La llave edad tiene el valor 31
    La llave email tiene el valor sofia@gmail.com
    La llave telefono tiene el valor 123-456-7890
    */
}