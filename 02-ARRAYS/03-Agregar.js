// 1. Declaramos un arreglo inicial de notas
let notas = [9, 8, 6];
console.log("Arreglo inicial de notas:", notas); // [9, 8, 6]

// 2. Agregamos un elemento al final del arreglo usando push()
// Imaginemos que el profesor olvidó una nota y la agregamos al final.
notas.push(10);
console.log("Arreglo después de agregar con push(10):", notas); // [9, 8, 6, 10]

// Calculamos la media para ver el impacto de la nota agregada
let mediaConPush = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log("Media después de agregar con push():", mediaConPush); // 8.25

// 3. Ahora, vamos a ver cómo funciona unshift()
// Para este ejemplo, vamos a reiniciar el arreglo o trabajar con uno nuevo
// para que el efecto de unshift sea claro sin el push anterior.
let otrasNotas = [7, 5, 8];
console.log("\nOtro arreglo de notas para unshift():", otrasNotas); // [7, 5, 8]

// Agregamos un elemento al inicio del arreglo usando unshift()
// Esto moverá los elementos existentes a una posición mayor.
otrasNotas.unshift(10);
console.log("Arreglo después de agregar con unshift(10):", otrasNotas); // [10, 7, 5, 8]

// Observa cómo el '10' se añadió al principio y el '7' ahora está en la posición 1.