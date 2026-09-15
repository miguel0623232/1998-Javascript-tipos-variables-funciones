// Explicación y ejemplo del método concat()

// 1. Definimos nuestros arreglos originales
const estudiantesPHP = ['Lucía', 'Martina', 'Hugo', 'Daniel'];
const estudiantesNode = ['Martín', 'María', 'Daniela', 'Lucas'];
const estudiantesPython = ['Diego', 'Leonardo'];

console.log("--- Arreglos Originales ---");
console.log("Estudiantes PHP:", estudiantesPHP);
console.log("Estudiantes Node:", estudiantesNode);
console.log("Estudiantes Python:", estudiantesPython);
console.log("--------------------------\n");

// 2. Usamos concat() para unir dos arreglos
// Creamos un nuevo arreglo 'listaUnificada' que contiene primero los estudiantes de PHP y luego los de Node.
const listaUnificadaDosCursos = estudiantesPHP.concat(estudiantesNode);

console.log("--- Uniendo dos arreglos con concat() ---");
console.log("Lista Unificada (PHP y Node):", listaUnificadaDosCursos);
console.log("-----------------------------------------\n");

// 3. Verificamos que los arreglos originales no fueron modificados
// Es crucial entender que concat() devuelve un NUEVO arreglo.
// Los arreglos 'estudiantesPHP' y 'estudiantesNode' siguen siendo los mismos.
console.log("--- Verificación de arreglos originales ---");
console.log("Estudiantes PHP después de concat():", estudiantesPHP);
console.log("Estudiantes Node después de concat():", estudiantesNode);
console.log("-------------------------------------------\n");


// 4. Usamos concat() para unir más de dos arreglos
// Podemos pasar múltiples arreglos como argumentos a concat().
const listaUnificadaTresCursos = estudiantesPHP.concat(estudiantesNode, estudiantesPython);

console.log("--- Uniendo tres arreglos con concat() ---");
console.log("Lista Unificada (PHP, Node y Python):", listaUnificadaTresCursos);
console.log("------------------------------------------\n");

// 5. Un ejemplo de cómo NO usar concat() (y por qué)
// Si intentáramos modificar un arreglo existente con concat() de esta manera,
// no funcionaría como esperamos, ya que concat() devuelve un nuevo arreglo.
// estudiantesPHP = estudiantesPHP.concat(estudiantesNode); // Esto daría un error si estudiantesPHP es 'const'
// Si fuera 'let', se reasignaría, pero el concepto es que concat() crea uno nuevo.

// La forma correcta siempre es asignar el resultado a una nueva variable
const nuevaLista = ['Ana'].concat(['Pedro'], ['Luis']);
console.log("Nueva lista creada con concat():", nuevaLista);