// --- Ejemplos de Conversión de Tipos en JavaScript ---

// 1. Declaración de variables con diferentes tipos
const edadNumero = 39; // Tipo: number
const edadCadena = "39"; // Tipo: string
const edadCadenaConLetra = "39a"; // Tipo: string con caracteres no numéricos

console.log("--- Conversión Implícita ---");

// 2. Conversión implícita con el operador de doble igual (==)
// JavaScript convierte implícitamente la cadena "39" a número para comparar solo los valores.
console.log("¿edadNumero == edadCadena?", edadNumero == edadCadena); // Esperamos: true

// 3. Conversión implícita con el operador de triple igual (===)
// JavaScript compara tanto el valor como el tipo de dato. No hay conversión implícita de tipo.
console.log("¿edadNumero === edadCadena?", edadNumero === edadCadena); // Esperamos: false (porque los tipos son diferentes)

// 4. Conversión implícita con el operador de suma (+)
// Si uno de los operandos es una cadena, JavaScript convierte el otro a cadena y concatena.
console.log("edadNumero + edadCadena (suma implícita)", edadNumero + edadCadena); // Esperamos: "3939" (concatenación)

// 5. Conversión implícita con el operador de resta (-)
// JavaScript intenta convertir ambos operandos a números y realiza la resta.
console.log("edadNumero - edadCadena (resta implícita)", edadNumero - edadCadena); // Esperamos: 0 (resta numérica)

console.log("\n--- Conversión Explícita ---");

// 6. Conversión explícita a número usando Number()
// Forzamos que edadCadena se convierta a un número antes de la suma.
const edadCadenaConvertidaANumero = Number(edadCadena);
console.log("edadNumero + Number(edadCadena)", edadNumero + edadCadenaConvertidaANumero); // Esperamos: 78 (suma numérica)

// 7. Conversión explícita a número con un valor no numérico
// Si la cadena no puede convertirse completamente a un número, Number() devuelve NaN (Not a Number).
const edadCadenaConLetraConvertidaANumero = Number(edadCadenaConLetra);
console.log("Number(edadCadenaConLetra)", edadCadenaConLetraConvertidaANumero); // Esperamos: NaN

// 8. Operaciones con NaN
// Cualquier operación matemática que involucre NaN resultará en NaN.
console.log("edadNumero + Number(edadCadenaConLetra)", edadNumero + edadCadenaConLetraConvertidaANumero); // Esperamos: NaN

// 9. Conversión explícita a cadena usando String()
// Forzamos que edadNumero se convierta a una cadena.
const edadNumeroConvertidaACadena = String(edadNumero);
console.log("String(edadNumero) + edadCadena (concatenación explícita)", edadNumeroConvertidaACadena + edadCadena); // Esperamos: "3939" (concatenación)

// 10. Conversión explícita a cadena usando el método .toString()
// Otro método para convertir un número a su representación en cadena.
const edadNumeroConToString = edadNumero.toString();
console.log("edadNumero.toString() + edadCadena (concatenación con toString)", edadNumeroConToString + edadCadena); // Esperamos: "3939" (concatenación)