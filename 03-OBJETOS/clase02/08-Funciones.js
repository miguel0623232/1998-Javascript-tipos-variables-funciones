// Creamos un objeto llamado 'cliente'
const cliente = {
    nombre: "Juan",
    saldo: 200, // Una propiedad que representa el saldo del cliente

    // Este es un MÉTODO: una función dentro del objeto
    efectuarPago: function (valor) {
        // Usamos 'this.saldo' para acceder a la propiedad 'saldo' del mismo objeto 'cliente'
        if (valor < this.saldo) {
            console.log("Realizando pago...");
            this.saldo -= valor; // Restamos el valor del pago al saldo actual
            console.log("Pago realizado. Saldo actual:", this.saldo);
        } else {
            console.log("Saldo insuficiente. No se puede realizar el pago.");
            console.log("Tu saldo actual es:", this.saldo);
            console.log("El monto a pagar es:", valor);
        }
    },

    // Otro método para ver el saldo actual
    verSaldo: function() {
        console.log("El saldo actual de", this.nombre, "es:", this.saldo);
    }
};

console.log("--- Estado inicial del cliente ---");
cliente.verSaldo(); // Llamamos al método verSaldo para mostrar el saldo inicial

console.log("\n--- Intentando un pago de 50 ---");
cliente.efectuarPago(50); // Llamamos al método efectuarPago con un valor de 50
cliente.verSaldo(); // Verificamos el saldo después del pago

console.log("\n--- Intentando un pago de 150 ---");
cliente.efectuarPago(150); // Intentamos otro pago
cliente.verSaldo(); // Verificamos el saldo nuevamente

console.log("\n--- Intentando un pago de 100 (saldo insuficiente) ---");
cliente.efectuarPago(100); // Intentamos un pago que excede el saldo restante
cliente.verSaldo(); // El saldo no debería cambiar