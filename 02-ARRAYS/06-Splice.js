// 1. Creamos nuestra lista inicial de tareas
let listaDeTareas = [
  'Comprar víveres',
  'Pagar facturas',
  'Llamar al médico',
  'Estudiar JavaScript',
  'Hacer ejercicio'
];

console.log('--- Lista de Tareas Original ---');
console.log(listaDeTareas);
console.log('Cantidad de tareas:', listaDeTareas.length);
console.log('--------------------------------\n');

// 2. Caso 1: Eliminar una tarea específica
// Queremos eliminar 'Llamar al médico'. Está en la posición 2 (0-Comprar, 1-Pagar, 2-Llamar).
// Queremos eliminar solo 1 elemento.
listaDeTareas.splice(2, 1);

console.log('--- Después de eliminar "Llamar al médico" ---');
console.log(listaDeTareas);
console.log('Cantidad de tareas:', listaDeTareas.length);
console.log('----------------------------------------------\n');

// 3. Caso 2: Reemplazar tareas
// Queremos reemplazar 'Estudiar JavaScript' por 'Terminar proyecto' y 'Revisar emails'.
// 'Estudiar JavaScript' está ahora en la posición 2 (0-Comprar, 1-Pagar, 2-Estudiar).
// Vamos a eliminar 1 elemento y agregar 2 nuevos.
listaDeTareas.splice(2, 1, 'Terminar proyecto', 'Revisar emails');

console.log('--- Después de reemplazar "Estudiar JavaScript" ---');
console.log(listaDeTareas);
console.log('Cantidad de tareas:', listaDeTareas.length);
console.log('---------------------------------------------------\n');

// 4. Caso 3: Insertar nuevas tareas sin eliminar ninguna
// Queremos agregar 'Planificar cena' en la posición 1 (después de 'Comprar víveres').
// Para esto, indicamos la posición 1, 0 elementos a eliminar, y luego los nuevos elementos.
listaDeTareas.splice(1, 0, 'Planificar cena');

console.log('--- Después de insertar "Planificar cena" ---');
console.log(listaDeTareas);
console.log('Cantidad de tareas:', listaDeTareas.length);
console.log('---------------------------------------------\n');

// 5. Caso 4: Eliminar múltiples tareas
// Queremos eliminar 'Terminar proyecto' y 'Revisar emails'.
// 'Terminar proyecto' está en la posición 3 (0-Comprar, 1-Planificar, 2-Pagar, 3-Terminar).
// Vamos a eliminar 2 elementos.
listaDeTareas.splice(3, 2);

console.log('--- Después de eliminar "Terminar proyecto" y "Revisar emails" ---');
console.log(listaDeTareas);
console.log('Cantidad de tareas:', listaDeTareas.length);
console.log('------------------------------------------------------------------\n');