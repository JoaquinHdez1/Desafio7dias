//Dia 7 del #7DaysOfCode.

//Calculadora basica con 4 operadores que permita el uso de dos números.
function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return "Error: División por cero";
    }
    return a / b;
}

function calculadora() {
    let opcion;

    while (true) {
        opcion = prompt(
            "Seleccione una operación:\n" +
            "1. Suma\n" +
            "2. Resta\n" +
            "3. Multiplicación\n" +
            "4. División\n" +
            "5. Salir"
        );

        if (opcion === "5") {
            console.log("Hasta la próxima.");
            break;
        }

        if (opcion < "1" || opcion > "4") {
            console.log("Opción inválida. Intente de nuevo.");
            continue;
        }

        const num1 = parseFloat(prompt("Ingrese el primer número:"));
        const num2 = parseFloat(prompt("Ingrese el segundo número:"));

        let resultado;

        switch (opcion) {
            case "1":
                resultado = suma(num1, num2);
                break;
            case "2":
                resultado = resta(num1, num2);
                break;
            case "3":
                resultado = multiplicacion(num1, num2);
                break;
            case "4":
                resultado = division(num1, num2);
                break;
        }

        console.log("Resultado: " + resultado);
    }
}

calculadora();
