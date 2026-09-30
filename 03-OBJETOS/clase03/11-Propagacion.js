const cliente = {
  nombre: "Sofía",
  telefonos: ["123-456-7890", "098-765-4321"],
  direccion: {
    calle: "Calle Falsa",
    numero: "123",
    pais: "Ejemplolandia",
    apartamento: "Apt 4B"
  }
};

// Explicación: Función que espera dos argumentos de teléfono.
function llamarCliente(telefonoUno, telefonoDos) {
  console.log(`Llamando a ${telefonoUno}`);
  console.log(`Llamando a ${telefonoDos}`);
}

// Uso del Spread Operator con arreglos:
// Los tres puntos (...) "esparcen" los elementos del arreglo cliente.telefonos
// para que se pasen como argumentos individuales a la función llamarCliente.
// Es equivalente a llamarCliente(cliente.telefonos[0], cliente.telefonos[1]);
console.log("--- Llamando al cliente ---");
llamarCliente(...cliente.telefonos);

// Explicación: Creando un nuevo objeto 'pedido'.
// Queremos incluir el nombre del cliente y todas las propiedades de su dirección.
const pedido = {
  cliente: cliente.nombre,
  // Uso del Spread Operator con objetos:
  // Los tres puntos (...) "esparcen" las propiedades del objeto cliente.direccion
  // (calle, numero, pais, apartamento) directamente en el nuevo objeto 'pedido'.
  ...cliente.direccion
};

console.log("\n--- Detalles del Pedido ---");
console.log(pedido);

/*
Salida esperada:
--- Llamando al cliente ---
Llamando a 123-456-7890
Llamando a 098-765-4321

--- Detalles del Pedido ---
{
  cliente: 'Sofía',
  calle: 'Calle Falsa',
  numero: '123',
  pais: 'Ejemplolandia',
  apartamento: 'Apt 4B'
}
*/