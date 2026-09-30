// 1. Creamos un objeto 'cliente' con una propiedad 'direcciones' que es un arreglo de objetos.
// Cada objeto dentro de 'direcciones' representa una dirección con sus propias propiedades.
let cliente = {
  nombre: "Carlos",
  edad: 35,
  email: "carlos@ejemplo.com",
  telefonos: ["55 9876 5432", "55 1122 3344"],
  direcciones: [ // Aquí 'direcciones' es un arreglo de objetos
    {
      calle: "Calle Falsa",
      numero: 123,
      pais: "México",
      apartamento: true // Esta es una dirección de apartamento
    },
    {
      calle: "Avenida Siempre Viva",
      numero: 742,
      pais: "México",
      apartamento: false // Esta es una dirección de casa
    }
  ]
};

console.log("--- Direcciones iniciales del cliente ---");
console.log(cliente.direcciones);
// Salida esperada: Un arreglo con dos objetos de dirección.

// 2. Usamos el método 'push()' para agregar una nueva dirección al arreglo 'direcciones'.
// 'push()' es un método de los arreglos que añade un elemento al final.
cliente.direcciones.push({
  calle: "Bulevar de los Sueños Rotos",
  numero: 500,
  pais: "México",
  apartamento: true // Otra dirección de apartamento
});

console.log("\n--- Direcciones después de agregar una nueva con push() ---");
console.log(cliente.direcciones);
// Salida esperada: Un arreglo con tres objetos de dirección, incluyendo la nueva.

// 3. Usamos el método 'filter()' para crear un nuevo arreglo con solo las direcciones que son apartamentos.
// 'filter()' itera sobre cada elemento del arreglo y devuelve un nuevo arreglo
// con los elementos que cumplen una condición específica (en este caso, 'direccion.apartamento === true').
const soloApartamentos = cliente.direcciones.filter((direccion) => {
  return direccion.apartamento === true;
});

console.log("\n--- Solo direcciones que son apartamentos (usando filter()) ---");
console.log(soloApartamentos);
// Salida esperada: Un arreglo con solo las dos direcciones donde 'apartamento' es true.

// 4. También podemos filtrar para ver solo las casas (donde 'apartamento' es false).
const soloCasas = cliente.direcciones.filter((direccion) => direccion.apartamento === false);

console.log("\n--- Solo direcciones que son casas (usando filter()) ---");
console.log(soloCasas);
// Salida esperada: Un arreglo con la dirección donde 'apartamento' es false.