/* Para definir una función usaremos la palabra reservada function 
seguida del nombre de la función, la lista de parámetros que puede recibir 
(los valores que requiere de entrada para poder llevar a cabo la operación) 
y, entre llaves, las instrucciones que componen la función */

function ejemplo (valor1, valor2) { // valores de entrada
    valorEntrada = valor1 + valor2; // instrucciones
    return valorEntrada // return
}

/*  Las funciones pueden o no retornar un valor, es decir, 
devolver un valor que puede ser utilizado en otra parte de nuestro programa. 
Para eso se utiliza la instrucción *return* que especifica el valor devuelto. */

function suma(numero1, numero2) {
 resultado = numero1 + numero2;
 return resultado;
}

function resta(numero1, numero2) {
 resultado = numero1 - numero2;
 return resultado;
}

function multiplicacion(numero1, numero2) {
 resultado = numero1 * numero2;
 return resultado;
}

function division(numero1, numero2) {
 resultado = numero1 / numero2;
 return resultado;
}

/* Llamar una función es el acto de utilizar esa función en beneficio 
del desarrollo del algoritmo realizado. */

/* Hasta acá tenemos realizadas las funciones, pero aún no hacen ninguna acción 
porque no las hemos llamado. */

/* Vamos a solicitarle al usuario nos entregue los valores para asignar a las 
variables numero1 y numero2, como en el ejercicio anterior, las imprimiremos
por consola y posteriormente llamaremos la función suma y
mostraremos al usuario el resultado a través de una alerta en el navegador */

var numero1 = prompt("Ingresa un número");
var numero2 = prompt("Ingresa un segundo número");

// parseo de datos apra operar
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

console.log ("var numero1 es: " + numero1 + " y var numero2 es: " + numero2 );

/* Al momento de escribir el nombre de la función y agregar los parámetros obligatorios, 
estamos “llamando la función”. */

respuesta = suma (numero1,numero2);
console.log (respuesta);

alert ("El resultado de la función suma entre: " + numero1 + " y "  + numero2 + " es " + respuesta);