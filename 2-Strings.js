var nombreCompleto = "Miguel Vega";
var ciudadDomicilio = "Bogota";
var fechaNacimiento = "23 de Junio de 1997 ";
var diaIndependenciaPais = "20 de Julio de 1810";

var fichaTecnicaModo1 = 'Nombre del producto\n\
Codigo del producto\n\
Valor';

var fichaTecnicaModo2 = `Modo 2:\n' +
'Nombre del producto\n' +
'Codigo del producto\n' +
'Valor`;

var fichaTecnicaModo3 = `Modo 3:
Nombre del producto
Codigo del producto
Valor`;

console.log(fichaTecnicaModo1);
console.log(fichaTecnicaModo2);
console.log(fichaTecnicaModo3);


console.log(nombreCompleto.toLocaleLowerCase());
console.log(ciudadDomicilio.toUpperCase());
console.log(fechaNacimiento.length );
//console.log("El día de la independencia de mi país es: " + diaIndependenciaPais);