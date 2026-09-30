const datos = require("./datos.json"); // Importamos el archivo JSON que contiene la información de la persona

// Accedemos a las propiedades del objeto importado desde el archivo JSON       
console.log(datos);
console.log(typeof datos); // Muestra el tipo de datos (debería ser 'object')

//JSON.stringify convierte un objeto JavaScript en una cadena JSON
//JSON.parse convierte una cadena JSON en un objeto JavaScript

const datosString = JSON.stringify(datos); // Convertimos el objeto a una cadena JSON
console.log(datosString);
console.log(typeof datosString); // Muestra el tipo de datos (debería ser 'string')

// Ahora convertimos la cadena JSON de nuevo a un objeto JavaScript
const datosObjeto = JSON.parse(datosString);
console.log(datosObjeto);
console.log(typeof datosObjeto); // Muestra el tipo de datos (debería ser 'object')     
