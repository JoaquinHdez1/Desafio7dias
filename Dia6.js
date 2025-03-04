//Dia 6 del #7DaysOfCode

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

//La funcion eliminarProducto se encarga de eliminar los productos que se añadieron previamente, lanza las preguntas al usuario declarando nuevamente las variables que se establecieron previamente, además de usar un bucle while para que se eliminen tantos productos como el usuario desee, mientras exitan en la lista.
  
  function eliminarProductos(){
 let respuestaEliminar = prompt('¿Deseas eliminar algun producto? Responde con un (SI) o (NO).').toLowerCase();
 while (respuestaEliminar === 'si'){
  alimento = prompt('Que alimento quieres eliminar? ');
  categoria = prompt('¿De qué categoría?');
  
   if (ListaCompras[categoria]) { // Verifica si la categoría existe
    let indice = ListaCompras[categoria].indexOf(alimento);

    if (indice !== -1) {
      ListaCompras[categoria].splice(indice, 1);
      console.log(`Elemento "${alimento}" eliminado de "${categoria}".`);
    } else {
      console.log(`Elemento "${alimento}" no encontrado en "${categoria}".`);
    }
  } else {
    console.log(`Categoría "${categoria}" no existe.`);
  }
 respuestaEliminar = prompt('¿Deseas eliminar otro producto? Responde con un (SI) o (NO).').toLowerCase();
 }
   if (respuestaEliminar !== 'si' && respuestaEliminar !== 'no') {
    console.log('Respuesta no válida.');
    }
    }
  
//La funcion AgregarMas se encarga de añadir los productos, lanza las preguntas al usuario declarando las variables que se establecieron previamente, además de usar un bucle while para que se añadan tantos productos y categorias como el usuario desee.
  function agregarMas() {
  let respuesta = prompt('¿Deseas agregar un alimento a la lista? Responde con un (SI) o (NO).').toLowerCase();

  while (respuesta === 'si') {
    alimento = prompt('¿Qué alimento deseas agregar?');
    categoria = prompt('¿A qué categoría pertenece?');

    agregarAlimento(alimento, categoria);

    respuesta = prompt('¿Deseas añadir otro producto? Responde con un (SI) o (NO).').toLowerCase();
  }

  if (respuesta === 'no') {
    console.log('No se agregaron más alimentos a la lista.');
    eliminarProductos();
  }  else if (respuesta !== 'si' && respuesta !== 'no') {
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

agregarMas();
