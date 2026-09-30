const clientes = require('./clientes.json');

function filtrarPorPais(lista, pais) {
    return lista.filter((cliente) => cliente.direccion.pais === pais);
}

const resultado = filtrarPorPais(clientes, 'Colombia');
console.log(resultado);