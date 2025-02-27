//Dia 3 del #7DaysOfCode.

//Primera  y segunda indicación. Se utiliza .toLowerCase() para no tener problemas de reconocimiento de las minisculas al momento de que el usuario coloque su respuesta. Se creo un bucle para que en el caso de que la respuesta no cumple con las condiciones se repita hasta que se pueda continuar a la siguiente sección, ya que si se realzaba sin bucle aunque se colocara un valor invalido continuaba a la siguiente sección.
while(true){
let area = prompt('¿Quieres seguir hacia el área de Front-End o seguir hacia el área de Back-End.?').toLowerCase();
let tecnologiaEspecifica;

if ( area === "front-end" ){

tecnologiaEspecifica = prompt('Quieres aprender React o aprender Vue?').toLowerCase();

} else if ( area === 'back-end') {

tecnologiaEspecifica = prompt('Quieres aprender C# o aprender Java?').toLowerCase;
}else{
alert('Area invalida, intentalo de nuevo.');
continue;
}
break;
}
//Tercera indicación. Se utiliza una estructura similar a la sección anterior.
while(true){
let respuesta = parseInt(prompt('Usa un (1) si quieres seguir especializándose en el área elegida o un (2) si deseas ser Fullstack.'));

if ( respuesta === 1){

alert('Excelente elección. La especialización te permitirá profundizar en un área específica y convertirte en un experto.');

} else if (respuesta === 2) {
   
   alert('¡Perfecto! El desarrollo Fullstack te abrirá un amplio abanico de oportunidades al dominar tanto el frontend como el backend.');
} else {
alert('Respuesta inválida. Por favor, ingresa 1 o 2.');
continue;
}
break;
}

//Cuarta indicación. En esta sección decidí crear un arreglo para que se fueran almacenando las "tecnologias", el usuario puede añadir todas las que quiera, hasta que responda con un "no" se cortará el bucle y saldra un mensaje deseandole suerte, se imprimiran en la consola el arreglo resultante.
let tecnologias = [];

let tecnologia = "";

while (tecnologia !== "no") {

  tecnologia  = prompt('Hay alguna tecnología en la que te gustaría especializarte?. Mencionala. Escribe (no) si no tienes ninguna en mente.');

  if (tecnologia !== "no") {

    tecnologias.push(tecnologia);

    alert(` Ser espcialista de ${tecnologia} te será util en tu vida laboral y te permitira estar más cerca de alcanzar tus metas.`); 

  } 

}
alert('Mucha suerte en tu aventura de aprendizaje y especialización.');
console.log("Tecnologias con vistas a especializarse:", tecnologias);
