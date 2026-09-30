const clientes = require('./clientes.json');

function encontrar(lista, llave, valor) {
    return lista.find((cliente) => cliente[llave] === valor);
}

const clienteEncontrado = encontrar(clientes, 'nombre', 'Jose');
console.log(clienteEncontrado);