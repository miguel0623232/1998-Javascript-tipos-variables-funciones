// 1. Definimos nuestro arreglo de notas
let listaNotas = [10, 9, 8, 9, 10, 4, 7.5, 6.5, 9, 5, 7];

// 2. Inicializamos una variable para acumular la suma de las notas
let sumaNotas = 0;

// 3. Usamos un bucle 'for' para recorrer el arreglo y sumar cada nota
// La variable 'i' es nuestro contador, que va desde 0 hasta la cantidad de elementos - 1
for (let i = 0; i < listaNotas.length; i++) {
  // Sumamos la nota actual (listaNotas[i]) a nuestra variable sumaNotas
  sumaNotas += listaNotas[i]; // Esto es lo mismo que: sumaNotas = sumaNotas + listaNotas[i];
}

// 4. Mostramos la suma total de las notas para verificar
console.log("La suma total de las notas es: " + sumaNotas);

// 5. Calculamos la media aritmética
// Dividimos la suma total entre la cantidad de elementos en el arreglo (usando .length)
const mediaAritmetica = sumaNotas / listaNotas.length;

// 6. Mostramos el valor de la media aritmética
console.log("El valor de la media aritmética de la lista es: " + mediaAritmetica);

// 7. Opcional: Formateamos la media aritmética para mostrar solo dos decimales
const mediaFormateada = mediaAritmetica.toFixed(2);
console.log("El valor de la media aritmética (formateado a 2 decimales) es: " + mediaFormateada);

// Ejemplo de cómo se ajusta si cambiamos las notas:
console.log("\n--- Probando con nuevas notas ---");
listaNotas = [7, 8, 9]; // Cambiamos la lista de notas
sumaNotas = 0; // Reiniciamos la suma para el nuevo cálculo

for (let i = 0; i < listaNotas.length; i++) {
  sumaNotas += listaNotas[i];
}

const nuevaMedia = sumaNotas / listaNotas.length;
console.log("La suma de las nuevas notas es: " + sumaNotas);
console.log("La nueva media aritmética es: " + nuevaMedia.toFixed(2));