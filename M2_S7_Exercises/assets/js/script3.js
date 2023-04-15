// Declaracion de multiples variables
var num1, num2, resultado;

/* Asignando valor a num1 a través de propmt() , 
que solicita datos al usuario por el navegador  */

num1 = prompt("Ingrese el valor para num1");

/* Para corroborar que hemos obtenido el valor ingresado por el usuario, 
vamos a imprimir en consola la variable */

console.log("El valor asignado a num1 es : " + num1);

/* Asignando valor a num2 a través de propmt() , 
que solicita datos al usuario por el navegador  */

num2 = prompt("Ingrese el valor para num2");

// E imprimimos su valor
console.log("El valor asignado a num2 es : " + num2);

/* Una vez que hemos capturado ambos números debemos “parsearlos”, 
es decir, transformar el valor de un tipo de dato a otro 
Dado que lo que se recibe por el prompt() viene como string de texto
se debe aparsear a enteros o valores numericos con los cuales operar. */

num1 = parseInt(num1);
num2 = parseInt(num2);

// Ahora podemos operar con ellos, realicemos una multiplicación:

var multiplica = num1 * num2;

// imprimimos en consola el resultado de la variable multiplica

console.log(
  "Al multiplicar " + num1 + " y " + num2 + " obtenemos : " + multiplica
);

// Ahora establecemos una alerta para poder mostrar el mensaje al usuario
alert ("Al multiplicar " + num1 + " y " + num2 + " obtenemos: " + multiplica);