//Dia 5 del #7DaysOfCode

// Se declara el objeto que contedra los arreglos, posteiormete se declaran las variables para definir los alimentos y las categorias.

let ListaCompras = {};
let categoria;
let alimento;

// Se declara la primera función para el proceso de crear las categorias y añadir los alimentos a las mismas, tambien se añaden mensajes con template strings para mantener dinamico el proceso de llenado de la lista.
function agregarAlimento(alimento, categoria) {
  if (!ListaCompras[categoria]) {
    ListaCompras[categoria] = [];
    console.log(`Categoria "${categoria}" creada.`);
  }
  ListaCompras[categoria].push(alimento);
  console.log(`"${alimento}" agregado a "${categoria}".`);
}

//La segunda se encarga de añadir los productos, lanza las preguntas al usuario declarando las variables que se establecieron previamente, además de usar un bucle while para que se añadan tantos productos y categorias como el usuario desee.

function agregarProductos() {
  let respuesta = prompt('¿Deseas agregar un alimento a la lista? Responde con un (SI) o (NO).').toLowerCase();

  while (respuesta === 'si') {
    alimento = prompt('¿Qué alimento deseas agregar?');
    categoria = prompt('¿A qué categoría pertenece?');

    agregarAlimento(alimento, categoria);

    respuesta = prompt('¿Deseas añadir otro producto? Responde con un (SI) o (NO).').toLowerCase();
  }

  if (respuesta === 'no') {
    console.log('No se agregaron más alimentos a la lista.');
  } else {
    console.log('Respuesta no válida.');
  }

// Formatea la salida de la lista de compras para una mejor visualización en la consola.
let salida = 'Lista de compras:\n';
for (let categoria in ListaCompras) {
  salida += `  ${categoria}: ${ListaCompras[categoria].join(', ')}\n`;
   // Agrega una línea para cada categoría, incluyendo el nombre de la categoría y los alimentos, separados por comas.
  // Se añade un salto de línea al final para separar las categorías.
}
console.log(salida);
}

agregarProductos();
