// Ejemplo 1: Definición de una Clase
// Una clase es como un "plano" o "molde" para crear objetos.
// Define las propiedades (características) y los métodos (comportamientos) que tendrán los objetos.
class Persona {
  // El constructor es un método especial que se ejecuta cuando se crea una nueva instancia de la clase.
  // Se usa para inicializar las propiedades del objeto.
  constructor(nombre, edad) {
    this.nombre = nombre; // 'this' se refiere a la instancia actual del objeto
    this.edad = edad;
  }

  // Métodos: Son funciones que pertenecen a la clase y definen el comportamiento de los objetos.
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }

  cumplirAnios() {
    this.edad++; // Modifica la propiedad 'edad' del objeto
    console.log(`${this.nombre} ahora tiene ${this.edad} años.`);
  }
}

// Ejemplo 2: Creación de Objetos (Instancias de la Clase)
// Usamos la palabra clave 'new' para crear objetos a partir de la clase 'Persona'.
let persona1 = new Persona("Ana", 30);
let persona2 = new Persona("Juan", 25);

// Accedemos a las propiedades de los objetos
console.log("Nombre de persona1:", persona1.nombre); // Salida: Ana
console.log("Edad de persona2:", persona2.edad);     // Salida: 25

// Llamamos a los métodos de los objetos
persona1.saludar();     // Salida: Hola, mi nombre es Ana y tengo 30 años.
persona2.saludar();     // Salida: Hola, mi nombre es Juan y tengo 25 años.

persona1.cumplirAnios(); // Salida: Ana ahora tiene 31 años.
persona1.saludar();     // Salida: Hola, mi nombre es Ana y tengo 31 años.

// Ejemplo 3: Herencia (Extensión de Clases)
// La herencia permite crear una nueva clase (clase hija) basada en una clase existente (clase padre).
// La clase hija hereda las propiedades y métodos de la clase padre y puede añadir los suyos propios.
class Estudiante extends Persona {
  constructor(nombre, edad, carrera) {
    // 'super()' llama al constructor de la clase padre (Persona)
    super(nombre, edad);
    this.carrera = carrera; // Propiedad específica de Estudiante
  }

  // Método específico de Estudiante
  estudiar() {
    console.log(`${this.nombre} está estudiando ${this.carrera}.`);
  }

  // Sobreescritura de un método (Polimorfismo)
  // Un método en la clase hija puede tener el mismo nombre que uno en la clase padre,
  // pero con una implementación diferente.
  saludar() {
    console.log(`¡Hola! Soy ${this.nombre}, tengo ${this.edad} años y estudio ${this.carrera}.`);
  }
}

let estudiante1 = new Estudiante("Carlos", 20, "Ingeniería de Software");

estudiante1.saludar();    // Salida: ¡Hola! Soy Carlos, tengo 20 años y estudio Ingeniería de Software.
                          // (Se usa el método 'saludar' de Estudiante, no el de Persona)
estudiante1.estudiar();   // Salida: Carlos está estudiando Ingeniería de Software.
estudiante1.cumplirAnios(); // Hereda el método 'cumplirAnios' de Persona
estudiante1.saludar();    // Salida: ¡Hola! Soy Carlos, tengo 21 años y estudio Ingeniería de Software.

// Ejemplo 4: Encapsulamiento (usando propiedades privadas con #)
// El encapsulamiento es el principio de ocultar los detalles internos de un objeto
// y exponer solo una interfaz pública para interactuar con él.
// En JavaScript, las propiedades privadas se indican con un '#' al inicio.
class CuentaBancaria {
  #saldo; // Propiedad privada

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  depositar(cantidad) {
    if (cantidad > 0) {
      this.#saldo += cantidad;
      console.log(`Depósito de ${cantidad} realizado. Nuevo saldo: ${this.#saldo}`);
    } else {
      console.log("La cantidad a depositar debe ser positiva.");
    }
  }

  retirar(cantidad) {
    if (cantidad > 0 && cantidad <= this.#saldo) {
      this.#saldo -= cantidad;
      console.log(`Retiro de ${cantidad} realizado. Nuevo saldo: ${this.#saldo}`);
    } else {
      console.log("Cantidad de retiro inválida o saldo insuficiente.");
    }
  }

  obtenerSaldo() {
    return this.#saldo; // Método público para acceder al saldo privado
  }
}

let miCuenta = new CuentaBancaria(1000);
miCuenta.depositar(200); // Salida: Depósito de 200 realizado. Nuevo saldo: 1200
miCuenta.retirar(500);   // Salida: Retiro de 500 realizado. Nuevo saldo: 700
// console.log(miCuenta.#saldo); // Esto daría un error, no se puede acceder directamente a la propiedad privada
console.log("Saldo actual:", miCuenta.obtenerSaldo()); // Salida: Saldo actual: 700