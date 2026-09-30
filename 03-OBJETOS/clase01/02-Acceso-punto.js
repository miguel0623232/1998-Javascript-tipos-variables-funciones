// 1. Definimos un objeto que representa un libro
const libro = {
  titulo: "El Gran Viaje",
  autor: "Ana García",
  paginas: 320,
  genero: "aventura"
};

// 2. Accedemos a las propiedades del objeto usando la notación de punto
console.log("Accediendo a propiedades específicas:");
console.log(libro.titulo); // Muestra el título del libro
console.log(libro.autor);  // Muestra el autor del libro
console.log(libro.paginas); // Muestra el número de páginas

// 3. Usamos backticks para combinar texto y variables de forma dinámica
console.log("\nInformación completa del libro:");
console.log(`El libro "${libro.titulo}" fue escrito por ${libro.autor}.`);
console.log(`Tiene ${libro.paginas} páginas y es del género de ${libro.genero}.`);

// 4. Aplicamos un método nativo a una propiedad (en este caso, a un string)
console.log("\nMostrando el título en mayúsculas:");
console.log(libro.titulo.toUpperCase()); // Convierte el título a mayúsculas