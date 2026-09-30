// Objeto de ejemplo
const silla = {
    tipo: "ejecutiva",
    color: "negro",
    peso: "10kg"
};

console.log("--- Acceso con notación de corchetes ---");

// Accediendo a una propiedad específica con corchetes
// Nota: el nombre de la propiedad debe ir entre comillas
console.log(`Color de la silla: ${silla['color']}`);

// Otro ejemplo con otra propiedad
console.log(`Tipo de la silla: ${silla['tipo']}`);

// Objeto de ejemplo para mostrar la utilidad con arreglos
const telefono = {
    marca: "Samsung",
    color: "rojo"
};

// Arreglo con los nombres de las propiedades que queremos acceder
const llavesDelTelefono = ['marca', 'color', 'procesador']; // 'procesador' no existe en el objeto

console.log("\n--- Acceso dinámico con corchetes y un arreglo de llaves ---");

llavesDelTelefono.forEach((llave) => {
    // Usamos la variable 'llave' dentro de los corchetes para acceder dinámicamente
    console.log(`La llave: ${llave} tiene el valor: ${telefono[llave]}`);
});

// Observa que 'procesador' muestra 'undefined' porque no existe en el objeto 'telefono'