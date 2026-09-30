// Nuestro objeto de cliente
const cliente = {
  nombre: "Juan",
  edad: 30,
  email: "juan@example.com",
  telefono: "123456789"
  // dirección: "Calle Falsa 123" // Esta línea está comentada para el ejemplo de error
};

// 1. Obtener las llaves del objeto usando Object.keys()
// Esto nos devolverá un arreglo como ["nombre", "edad", "email", "telefono"]
const llavesDelObjeto = Object.keys(cliente);

console.log("Las llaves del objeto cliente son:", llavesDelObjeto);

// 2. Usar el método includes() para verificar si una llave existe
// Queremos verificar si la llave "direccion" existe en nuestro objeto.

// Si la llave "direccion" NO está incluida en el arreglo de llaves...
if (!llavesDelObjeto.includes("direccion")) {
  console.log("Error: Es necesario tener una dirección para este cliente.");
} else {
  console.log("La dirección del cliente está presente.");
}

// Puedes probar descomentando la línea de 'dirección' en el objeto 'cliente'
// y ejecutando el código de nuevo para ver cómo cambia el mensaje.