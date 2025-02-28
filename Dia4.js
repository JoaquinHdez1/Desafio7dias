//Dia 4 del #7DaysOfCode. Se genera un número aleatorio entre el 0 y el 10, en el que solo se tiene dos intentos para resolverlo. 
let NumFinal = Math.floor(Math.random() * 10) + 1; // Genera un número aleatorio entre 1 y 10
let intentos = 0;
let NumUsuario;

while (intentos < 3) {
  NumUsuario = parseInt(prompt("Adivina el número secreto (intento " + (intentos + 1) + "):"));
  intentos++;

  if (NumUsuario === NumFinal) {
    alert("¡Felicidades, acertaste el número secreto!");
    break; // Sale del bucle si el usuario acierta
  } else if (intentos === 3) {
    alert("Alcanzaste el número máximo de intentos. El número secreto era: " + NumFinal);
  } else {
    alert("Intenta de nuevo.");
  }
}
