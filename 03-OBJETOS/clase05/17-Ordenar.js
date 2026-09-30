const clientes = require('./clientes.json');

function ordenar(lista, propiedad) {
    return lista.sort((a, b) => {
        if (a[propiedad] < b[propiedad]) {
            return -1; // a viene antes que b
        }
        if (a[propiedad] > b[propiedad]) {
            return 1; // a viene después que b
        }
        return 0; // son iguales
    });
}

const resultado = ordenar(clientes, 'nombre');
console.log(resultado);

//sort significa ordenar, y se utiliza para ordenar los elementos de un arreglo. En este caso, estamos ordenando la lista de clientes según la propiedad especificada (por ejemplo, 'nombre'). La función de comparación dentro del sort determina el orden de los elementos comparando sus valores.